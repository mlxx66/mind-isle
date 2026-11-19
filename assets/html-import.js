/* HTML 智能导入解析器 —— 纯字符串实现，浏览器/Node 均可运行 */
(function (global) {
  'use strict';

  function uid(p) { return (p || 'id') + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

  function decode(s) {
    return String(s == null ? '' : s)
      .replace(/\\u([0-9a-fA-F]{4})/g, function (_, h) { return String.fromCharCode(parseInt(h, 16)); })
      .replace(/\\(["'\\])/g, '$1')
      .replace(/&nbsp;/gi, ' ').replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
      .replace(/&quot;/gi, '"').replace(/&#0*39;/gi, "'").replace(/&apos;/gi, "'")
      .replace(/&ldquo;/gi, '“').replace(/&rdquo;/gi, '”').replace(/&mdash;/gi, '—')
      .replace(/&#x([0-9a-f]+);/gi, function (_, h) { return String.fromCharCode(parseInt(h, 16)); })
      .replace(/&#(\d+);/g, function (_, n) { return String.fromCharCode(+n); });
  }

  function stripTags(s) {
    return decode(String(s || '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
  }

  var NOISE = /^(?:请完成本题答案|请选择|请作答|提交|下一题|上一题|查看答案|本题必答)$/;
  function cleanStem(s) { return stripTags(s).replace(/^第\s*\d+\s*题\s*[：:]?\s*/, '').trim(); }
  function cleanOption(s) { return stripTags(s).replace(NOISE, '').trim(); }

  function metaContent(html, name) {
    var re = new RegExp('<meta[^>]*name=["\']' + name + '["\'][^>]*content=["\']([^"\']*)["\']', 'i');
    var m = html.match(re); if (m) return decode(m[1]);
    re = new RegExp('<meta[^>]*content=["\']([^"\']*)["\'][^>]*name=["\']' + name + '["\']', 'i');
    m = html.match(re); return m ? decode(m[1]) : '';
  }

  function extractTitle(html, fileName) {
    var m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    var t = m ? stripTags(m[1]) : '';
    if (!t) { m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i); t = m ? stripTags(m[1]) : ''; }
    if (!t) { m = html.match(/property=["\']og:title["\'][^>]*content=["\']([^"\']*)["\']/i); t = m ? decode(m[1]) : ''; }
    t = t.replace(/[\s\-_|—·]+(心理测试|性格测试|在线测试|测评|测试|exam).*$/i, '').trim();
    return t || (fileName ? fileName.replace(/\.[^.]+$/, '') : '导入的测试');
  }

  /* ===== 通用 JS 数据数组解析：括号匹配 + 受控解析 + 字段识别 ===== */

  // 从 offset 处的括号开始，找到匹配的闭合括号位置（跳过字符串内容）
  function matchBracket(s, start) {
    var open = s.charAt(start), close = open === '[' ? ']' : '}';
    var depth = 0, quote = '', esc = false;
    for (var i = start; i < s.length; i++) {
      var c = s.charAt(i);
      if (quote) {
        if (esc) { esc = false; continue; }
        if (c === '\\') { esc = true; continue; }
        if (c === quote) quote = '';
        continue;
      }
      if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
      if (c === open) depth++;
      else if (c === close) { depth--; if (depth === 0) return i; }
    }
    return -1;
  }

  // 提取所有指定变量名的数组字面量文本
  function findAllArrayLiterals(html, names) {
    var found = [];
    names.forEach(function (name) {
      var re = new RegExp('(?:\\bvar\\b|\\blet\\b|\\bconst\\b)?\\s*\\b' + name + '\\b\\s*=\\s*\\[', 'gi');
      var m;
      while ((m = re.exec(html))) {
        var bs = m.index + m[0].length - 1; // 指向 '['
        if (s_charAt(html, bs) !== '[') continue;
        var end = matchBracket(html, bs);
        if (end > bs) found.push(html.slice(bs, end + 1));
      }
    });
    return found;
  }
  function s_charAt(s, i) { return s.charAt(i); }

  // 取指定变量名下解析成功的最长原始对象数组（保留 w/dims 等嵌套字段）
  function getRawObjects(html, names) {
    var best = [];
    findAllArrayLiterals(html, names).forEach(function (lit) {
      var arr = evalDataArray(lit);
      if (arr && arr.length > best.length && arr.some(function (x) { return x && typeof x === 'object'; })) best = arr;
    });
    return best;
  }

  // 受控解析纯数据字面量；含函数/作用域访问则拒绝，回退到正则方案
  function evalDataArray(lit) {
    if (!lit || lit.length > 800000) return null;
    if (/\bfunction\b|=>|\bnew\s+[A-Za-z_$]|\bwindow\b|\bdocument\b|\beval\b|\bimport\b|\.call\s*\(|\.apply\s*\(|globalThis/.test(lit)) return null;
    try {
      var v = (new Function('"use strict";return (' + lit + ');'))();
      return Array.isArray(v) ? v : null;
    } catch (e) { return null; }
  }

  function firstString(o, keys) {
    for (var i = 0; i < keys.length; i++) {
      var v = o[keys[i]];
      if (typeof v === 'string' && v.trim()) return v.trim();
      if (typeof v === 'number') return String(v);
    }
    return '';
  }

  // 从对象数组识别题目：题干 q/stem/title/question/text，选项 o/options/opts/choices（字符串或 {t/text/label}）
  function questionsFromObjects(arr) {
    var out = [];
    arr.forEach(function (o) {
      if (!o || typeof o !== 'object') return;
      var stem = firstString(o, ['q', 'stem', 'title', 'question', 'text', 'content']);
      var os = o.o || o.options || o.opts || o.choices || o.answers || o.items;
      if (!stem || !Array.isArray(os)) return;
      var opts = [];
      os.forEach(function (oo) {
        var t = '';
        if (typeof oo === 'string') t = oo;
        else if (oo && typeof oo === 'object') t = firstString(oo, ['t', 'text', 'label', 'title', 'content', 'name', 'o']);
        if (t) opts.push(t.trim());
      });
      var clean = cleanStem(stem);
      if (clean && opts.length >= 2) out.push({ stem: clean, options: opts });
    });
    return out;
  }

  // 从对象数组识别结果：标题 name/title/type，描述 self/why/desc/description/slogan
  function resultsFromObjects(arr) {
    var out = [];
    arr.forEach(function (o) {
      if (!o || typeof o !== 'object') return;
      var title = firstString(o, ['name', 'title', 'type', 'result', 'label']);
      if (!title || title.length > 40) return;
      var desc = firstString(o, ['self', 'desc', 'description', 'slogan', 'content', 'intro', 'summary']);
      if (!desc && typeof o.why === 'string') desc = o.why.slice(0, 160);
      if (!desc && Array.isArray(o.mode) && typeof o.mode[0] === 'string') desc = o.mode[0].slice(0, 160);
      out.push({ title: title.trim(), desc: (desc || '').trim() });
    });
    return out;
  }

  /* 策略 A：JS 数据数组（questionDataset = [{q,o1,o2}] 等） */
  function parseJsDataset(html) {
    var best = [];
    // A1: 通用对象数组（支持 q/o/t、name 等字段，含单引号）
    var lits = findAllArrayLiterals(html, ['questionDataset', 'questionList', 'questions', 'quizData', 'questionData', 'qList', 'items']);
    lits.forEach(function (lit) {
      var arr = evalDataArray(lit);
      if (!arr) return;
      var q = questionsFromObjects(arr);
      if (q.length > best.length) best = q;
    });
    if (best.length >= 2) return best;
    // A2: 旧格式正则兜底（o1/o2、options 字符串数组，双引号）
    var m = html.match(/(?:questionDataset|questionList|questions|quizData|questionData)\s*=\s*\[([\s\S]*?)\]\s*;/i);
    if (m) {
      var re = /\{[^{}]*?(?:q|stem|title|question)\s*:\s*"((?:[^"\\]|\\.)*)"([^{}]*?)\}/g;
      var x;
      while ((x = re.exec(m[1]))) {
        var stem = decode(x[1]).trim(); var rest = x[2]; var opts = [];
        var ore = /o(\d+)\s*:\s*"((?:[^"\\]|\\.)*)"/g, y;
        while ((y = ore.exec(rest))) opts.push(decode(y[2]).trim());
        if (!opts.length) {
          var are = /options\s*:\s*\[([^\]]*)\]/g;
          while ((y = are.exec(rest))) {
            (y[1].match(/"((?:[^"\\]|\\.)*)"/g) || []).forEach(function (q) { opts.push(decode(q.slice(1, -1)).trim()); });
          }
        }
        if (stem && opts.length >= 2) best.push({ stem: cleanStem(stem), options: opts });
      }
    }
    return best;
  }

  /* 策略 B：常见 DOM 结构 */
  function parseDomQuestions(html) {
    var out = [];

    // B1: .question-card + 标题 + .option
    var blocks = html.split(/<div[^>]*class="[^"]*question-card[^"]*"[^>]*>/i).slice(1);
    blocks.forEach(function (b) {
      var chunk = b.split(/<div[^>]*class="[^"]*question-card[^"]*"/i)[0];
      var h = chunk.match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
      var stem = h ? cleanStem(h[1]) : '';
      var opts = [], y;
      var ore = /<div[^>]*class="[^"]*option[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
      while ((y = ore.exec(chunk))) { var t = cleanOption(y[1]); if (t) opts.push(t); }
      if (opts.length < 2) {
        var sre = /<span[^>]*>([\s\S]*?)<\/span>/gi;
        while ((y = sre.exec(chunk))) { var s = cleanOption(y[1]); if (s && s !== stem && s.length < 120) opts.push(s); }
      }
      if (stem && opts.length >= 2) out.push({ stem: stem, options: opts });
    });
    if (out.length >= 3) return out;

    // B2: .swiper-slide + .subtitle + radio
    out = [];
    var slides = html.split(/<div[^>]*class="[^"]*swiper-slide[^"]*"[^>]*>/i).slice(1);
    slides.forEach(function (b) {
      var chunk = b.split(/<div[^>]*class="[^"]*swiper-slide[^"]*"/i)[0];
      var h = chunk.match(/class="[^"]*(?:subtitle|stem|question-title)[^"]*"[^>]*>([\s\S]*?)</i);
      var stem = h ? cleanStem(h[1]) : '';
      var opts = [], y;
      var ore = /<input[^>]*(?:type=["\']radio["\'][^>]*|[^>]*type=["\']radio["\'])[^>]*>\s*([^<]+)/gi;
      while ((y = ore.exec(chunk))) { var t = cleanOption(y[1]); if (t) opts.push(t); }
      if (!opts.length) {
        var lre = /<label[^>]*>([\s\S]*?)<\/label>/gi;
        while ((y = lre.exec(chunk))) { var lt = cleanOption(y[1]); if (lt) opts.push(lt); }
      }
      if (stem && opts.length >= 2) out.push({ stem: stem, options: opts });
    });
    if (out.length >= 3) return out;

    // B3: 通用 —— 标题标签后紧跟的 label/li/option
    out = [];
    var parts = html.split(/<\/(?:h2|h3|h4|p)>/i);
    parts.forEach(function (p) {
      var h = p.match(/<(h2|h3|h4)[^>]*>([\s\S]*)$/i);
      if (!h) return;
      var stem = cleanStem(h[2]); if (!stem || stem.length > 200) return;
      var opts = [], y;
      var ore = /<(?:label|li)[^>]*>([\s\S]*?)<\/(?:label|li)>/gi;
      while ((y = ore.exec(p))) { var t = cleanOption(y[1]); if (t && t !== stem && t.length < 120) opts.push(t); }
      if (opts.length >= 2) out.push({ stem: stem, options: opts });
    });
    return out;
  }

  /* 策略 C：纯文本降级 */
  function parseTextFallback(html) {
    var text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<br\s*\/?>/gi, '\n').replace(/<\/(?:div|p|li|tr)>/gi, '\n').replace(/<[^>]*>/g, ' ');
    text = decode(text).replace(/[ \t]+/g, ' ');
    var lines = text.split(/\n/).map(function (x) { return x.trim(); }).filter(Boolean);
    var qStart = /^(?:\d+[.、)）]|[一二三四五六七八九十]+[、.．])\s*/;
    var optStart = /^[A-Ha-h][.、:：)）]\s*/;
    var out = [], cur = null;
    lines.forEach(function (line) {
      if (qStart.test(line)) { if (cur && cur.stem) out.push(cur); cur = { stem: line.replace(qStart, '').trim(), options: [] }; }
      else if (optStart.test(line) && cur) cur.options.push(stripTags(line.replace(optStart, '')));
      else if (cur) { if (cur.options.length) cur.options[cur.options.length - 1] += ' ' + line; else cur.stem += ' ' + line; }
    });
    if (cur && cur.stem) out.push(cur);
    return out.filter(function (q) { return q.options.length >= 2; });
  }

  var DEFAULT_RESULTS = [
    { key: 'dawn', emoji: '🌅', title: '晨曦型', en: 'THE DAWN', desc: '你在变化里保持自己的节奏，擅长把复杂的事情慢慢理清。', tags: ['清醒', '稳定'] },
    { key: 'ember', emoji: '🔥', title: '余烬型', en: 'THE EMBER', desc: '你看起来平静，内在却有很强的生命力与行动冲动。', tags: ['热情', '行动'] },
    { key: 'tide', emoji: '🌊', title: '潮汐型', en: 'THE TIDE', desc: '你对环境和关系很敏锐，懂得顺势，也有自己的边界。', tags: ['共情', '灵活'] },
    { key: 'forest', emoji: '🌿', title: '森屿型', en: 'THE FOREST', desc: '你需要足够的个人空间，在安静中恢复能量，也愿意为重要的人留出位置。', tags: ['内向', '治愈'] }
  ];
  var RESULT_EMOJI = ['🌅', '🔥', '🌊', '🌿', '✨', '🎯', '🌟', '💫', '🦋', '🌙'];

  /* 从 HTML 中提取结果类型 */
  function parseResults(html) {
    var out = [];
    // 通用对象数组（支持 FIGS / resultTypes / name+self 等）
    var lits = findAllArrayLiterals(html, ['resultTypes', 'resultList', 'resultData', 'results', 'types', 'FIGS', 'figures', 'persons', 'characters', 'roles']);
    lits.forEach(function (lit) {
      var arr = evalDataArray(lit);
      if (!arr) return;
      var r = resultsFromObjects(arr);
      if (r.length > out.length) out = r;
    });
    // 旧格式正则兜底（双引号 title/name + desc）
    if (out.length < 2) {
      var m = html.match(/(?:resultTypes|resultList|resultData|results|types)\s*=\s*\[([\s\S]*?)\]\s*;/i);
      if (m) {
        var re = /\{[^{}]*?(?:title|name|type)\s*:\s*["']([^"']+)["'][^{}]*\}/g, x;
        while ((x = re.exec(m[1]))) {
          var title = decode(x[1]).trim(); var obj = x[0];
          var dm = obj.match(/(?:desc|description|content|self)\s*:\s*["']([^"']+)["']/i);
          if (title && title.length < 40) out.push({ title: title, desc: dm ? decode(dm[1]).trim() : '' });
        }
      }
    }
    if (out.length < 2) {
      var blocks = html.split(/<div[^>]*class="[^"]*result[^"]*"[^>]*>/i).slice(1);
      blocks.forEach(function (b) {
        var chunk = b.split(/<div[^>]*class="[^"]*result[^"]*"/i)[0];
        var h = chunk.match(/<h[2-4][^>]*>([\s\S]*?)<\/h[2-4]>/i);
        var p = chunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
        var title = h ? stripTags(h[1]) : '';
        if (title && title.length < 40) out.push({ title: title, desc: p ? stripTags(p[1]) : '' });
      });
    }
    if (out.length < 2) return DEFAULT_RESULTS.map(function (r) { return Object.assign({}, r); });
    return out.slice(0, 60).map(function (r, i) {
      return {
        key: 'r' + i, emoji: RESULT_EMOJI[i % RESULT_EMOJI.length],
        title: r.title, en: '', desc: r.desc || '这是你在测试中呈现的一种倾向。',
        tags: ['自我探索'], advice: ''
      };
    });
  }

  /* 提取主配色，生成作用于用户端画布的覆盖 CSS */
  function extractStyle(html) {
    var styles = [], re = /<style[^>]*>([\s\S]*?)<\/style>/gi, m;
    while ((m = re.exec(html))) styles.push(m[1]);
    var css = styles.join('\n');
    // 优先使用 CSS 变量定义的主色
    var mainVar = (css.match(/--color-(?:main|primary|accent|theme)[\w-]*\s*:\s*(#[0-9a-f]{3,8}|rgba?\([^)]*\))/i) || [])[1] || '';
    var bg = (css.match(/background(?:-color)?\s*:\s*(linear-gradient\([^;]*\)|#[0-9a-f]{3,8}|rgba?\([^)]*\))/i) || [])[1] || '';
    var fg = (css.match(/(?:^|[;{]\s*)color\s*:\s*(#[0-9a-f]{3,8}|rgba?\([^)]*\))/i) || [])[1] || '';
    // 前景色仅当为深色时应用，避免白字配浅底导致不可读
    var lightFg = /^(#fff|#ffffff|#f[0-9a-f]{2}|rgba?\(\s*2[0-5][0-5]\s*,)/i.test(fg);
    if (lightFg) fg = '';
    // 纯白/近白背景不覆盖，避免破坏用户端模板视觉
    var lightBg = /^(#fff|#ffffff|#f[0-9a-f]{2}|#f[0-9a-f]{5}|rgba?\(\s*25[0-5]\s*,)/i.test(bg);
    if (lightBg) bg = '';
    var hexes = css.match(/#[0-9a-f]{6}\b/gi) || [], counts = {};
    hexes.forEach(function (h) { var k = h.toLowerCase(); counts[k] = (counts[k] || 0) + 1; });
    var accent = mainVar || Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; })
      .find(function (h) { return !/^(#ffffff|#000000|#f5f5f5)$/.test(h); }) || '#c9a961';
    var out = '/* 由 HTML 导入自动提取的配色 */\n';
    if (bg) out += '.test-canvas{background:' + bg + '!important;}\n';
    if (fg && fg.toLowerCase() !== (bg || '').toLowerCase()) out += '.test-canvas{color:' + fg + '!important;}\n';
    out += '.test-canvas .test-option.selected{border-color:' + accent + '!important;}\n';
    out += '.test-canvas .test-main-button{background:' + accent + '!important;}\n';
    return { css: out, bg: bg, fg: fg, accent: accent, rawLength: css.length };
  }

  /* 检测并提取「多维向量匹配」型测试（如 8 维 → 人物/角色相似度） */
  function tryVectorImport(html) {
    var qArr = getRawObjects(html, ['QUESTIONS', 'questions', 'questionDataset', 'questionList', 'quizData', 'questionData']);
    var fArr = getRawObjects(html, ['FIGS', 'figures', 'resultTypes', 'resultList', 'resultData', 'results', 'types', 'persons', 'characters']);
    if (qArr.length < 3 || fArr.length < 2) return null;
    // 判定条件：题目选项含 w 权重对象，且结果条目含 dims 向量
    var hasW = false, hasDims = false;
    qArr.slice(0, 3).forEach(function (q) {
      var os = q && (q.o || q.options || q.opts);
      if (os && os.some(function (o) { return o && typeof o.w === 'object' && Object.keys(o.w).length; })) hasW = true;
    });
    fArr.slice(0, 3).forEach(function (f) { if (f && f.dims && typeof f.dims === 'object') hasDims = true; });
    if (!hasW || !hasDims) return null;

    // 维度键：优先显式 DIMKEYS，其次从首个人物 dims 推断
    var dimKeys = [];
    var dm = html.match(/\bDIMKEYS\s*=\s*\[([^\]]*)\]/i);
    if (dm) dimKeys = (dm[1].match(/["']([^"']+)["']/g) || []).map(function (s) { return s.slice(1, -1); });
    if (!dimKeys.length) {
      var firstDims = fArr.map(function (f) { return f && f.dims; }).find(Boolean) || {};
      dimKeys = Object.keys(firstDims);
    }
    if (dimKeys.length < 2) return null;

    // 维度中文名 DIMNAME
    var dimNames = {};
    var dnm = html.match(/\bDIMNAME\s*=\s*\{([^}]*)\}/i);
    if (dnm) {
      var dre = /["']?(\w+)["']?\s*:\s*["']([^"']+)["']/g, dx;
      while ((dx = dre.exec(dnm[1]))) dimNames[dx[1]] = dx[2];
    }

    // 六维组合 SIX（n + 权重公式），供结果页雷达/说明
    var six = [];
    var sm = html.match(/\bSIX\s*=\s*\[([\s\S]*?)\n\s*\];?/i);
    if (sm) six = Array.from(evalDataArray('[' + sm[1] + ']') || []);
    // 若 SIX 含函数无法解析，用正则兜底提取 n 与系数
    if (!six.length && sm) {
      var sre = /\{\s*n\s*:\s*["']([^"']+)["'][^}]*?v\.(\w+)\s*\*\s*([\d.]+)[^}]*?v\.(\w+)\s*\*\s*([\d.]+)/g, sx;
      while ((sx = sre.exec(sm[1]))) six.push({ n: sx[1], k1: sx[2], w1: +sx[3], k2: sx[4], w2: +sx[5] });
    }

    // 题目：保留每个选项的 w 权重
    var questions = qArr.filter(function (q) { return q && (q.o || q.options || q.opts) && (q.q || q.stem || q.title || q.question); }).map(function (q) {
      var os = q.o || q.options || q.opts || [];
      return {
        stem: cleanStem(String(q.q || q.stem || q.title || q.question)),
        options: os.map(function (o) {
          return { text: String(o.t || o.text || o.label || o.title || '').trim(), w: (o.w && typeof o.w === 'object') ? o.w : {} };
        })
      };
    }).filter(function (q) { return q.stem && q.options.length >= 2; });
    if (questions.length < 3) return null;

    // 结果人物：保留 dims + 展示字段
    var results = fArr.filter(function (f) { return f && f.dims && (f.name || f.title || f.type); }).map(function (f, i) {
      var r = {
        key: 'vf_' + i, title: String(f.name || f.title || f.type).trim(),
        dims: {}, sex: f.sex || 'all', era: String(f.era || ''),
        emoji: '🏛', en: ''
      };
      dimKeys.forEach(function (k) { r.dims[k] = Number(f.dims[k]) || 0; });
      r.tag = Array.isArray(f.tag) ? f.tag.map(String) : [];
      r.self = String(f.self || '');
      r.slogan = String(f.slogan || '');
      r.why = String(f.why || '');
      r.egg = String(f.egg || '');
      r.mode = Array.isArray(f.mode) ? f.mode.map(String) : [];
      r.read = Array.isArray(f.read) ? f.read.map(String) : [];
      r.lines = Array.isArray(f.lines) ? f.lines.map(String) : [];
      r.desc = r.self || r.why.slice(0, 80) || ('你最像' + r.title + '。');
      r.tags = r.tag.length ? r.tag.slice(0, 3) : ['历史人物'];
      // 若有头像配置，保留
      if (f.av && typeof f.av === 'object') r.avatar = f.av;
      return r;
    });
    if (results.length < 2) return null;

    return {
      scoringType: 'vector_match',
      dimKeys: dimKeys, dimNames: dimNames, six: six,
      questions: questions, results: results
    };
  }

  function parse(html, fileName) {
    html = String(html || '');
    var title = extractTitle(html, fileName);
    var description = metaContent(html, 'description') || '';

    // 优先尝试向量匹配型测试
    var vector = tryVectorImport(html);
    if (vector) {
      var vkeys = vector.results.map(function (r) { return r.key; });
      var vletters = 'ABCDEFGHIJ';
      var vq = vector.questions.map(function (q) {
        return {
          id: uid('q'), type: 'single_choice', stem: q.stem,
          analysis: '没有标准答案，选择更接近你第一反应的一项。',
          options: q.options.map(function (o, oi) {
            return { id: uid('opt'), text: o.text, w: o.w, dimension: vkeys[oi % vkeys.length], points: 3, label: vletters[oi] || String(oi + 1) };
          })
        };
      });
      var vstyle = extractStyle(html);
      return {
        title: title, subtitle: description ? description.slice(0, 60) : (vector.dimKeys.length + ' 维人物匹配测试'),
        description: description || ('基于 ' + vector.dimKeys.length + ' 个性格维度与 ' + vector.results.length + ' 位人物的特征匹配。'),
        scoringType: 'vector_match',
        scoringConfig: { dimKeys: vector.dimKeys, dimNames: vector.dimNames, six: vector.six },
        questions: vq, results: vector.results, customCss: vstyle.css,
        meta: { source: 'vector', questionCount: vq.length, resultCount: vector.results.length, styleFound: !!vstyle.bg || !!vstyle.fg, cssLength: vstyle.rawLength, dimCount: vector.dimKeys.length }
      };
    }

    var questions = parseJsDataset(html);
    var source = 'js';
    if (questions.length < 3) { questions = parseDomQuestions(html); source = 'dom'; }
    if (questions.length < 3) { questions = parseTextFallback(html); source = 'text'; }

    var results = parseResults(html);
    var keys = results.map(function (r) { return r.key; });
    var letters = 'ABCDEFGHIJ';
    questions = questions.map(function (q, qi) {
      return {
        id: uid('q'), type: 'single_choice', stem: q.stem,
        analysis: '没有标准答案，选择更接近你第一反应的一项。',
        options: q.options.map(function (t, oi) {
          return { id: uid('opt'), text: t, dimension: keys[oi % keys.length], points: 3, label: letters[oi] || String(oi + 1) };
        })
      };
    });
    var style = extractStyle(html);
    return {
      title: title, subtitle: description ? description.slice(0, 60) : '', description: description,
      questions: questions, results: results, customCss: style.css,
      meta: { source: source, questionCount: questions.length, resultCount: results.length, styleFound: !!style.bg || !!style.fg, cssLength: style.rawLength }
    };
  }

  global.MindIsleHtmlImport = { parse: parse, stripTags: stripTags, decode: decode };
})(typeof window !== 'undefined' ? window : globalThis);
