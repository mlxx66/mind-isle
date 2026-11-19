(() => {
  'use strict';

  const STORAGE_KEY = 'mindisle_demo_v1';
  const SESSION_KEY = 'mindisle_session_v2';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const root = $('#root');
  const modalRoot = $('#modal-root');
  const toastRoot = $('#toast-root');
  const uid = (prefix = 'id') => prefix + '_' + Math.random().toString(36).slice(2, 9);
  const esc = (value = '') => String(value).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const clone = obj => JSON.parse(JSON.stringify(obj));
  const fmt = n => Number(n || 0).toLocaleString('zh-CN');
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const today = () => new Date().toISOString().slice(0, 10);
  const shortDate = value => {
    const d = new Date(value + (String(value).length === 10 ? 'T00:00:00' : ''));
    if (Number.isNaN(d.getTime())) return value || '';
    return d.toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' });
  };
  const dateCn = value => {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value || '';
    return d.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };
  const weekdayCn = () => '星期' + '日一二三四五六'[new Date().getDay()];

  const ICONS = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="m11 12 8-8M16 4l4 4M14 6l4 4"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
    chevronRight: '<path d="m9 18 6-6-6-6"/>',
    chevronLeft: '<path d="m15 18-6-6 6-6"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronUp: '<path d="m18 15-6-6-6 6"/>',
    eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/>',
    edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v5M14 11v5"/>',
    more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
    play: '<path d="m8 5 11 7-11 7z"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    refresh: '<path d="M20 7h-5V2M4 17h5v5"/><path d="M5.3 9a8 8 0 0 1 13.1-2L20 9M4 15l1.6 2A8 8 0 0 0 19 15"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    sparkles: '<path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8zM19 14l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    command: '<path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z"/>',
    checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
    panel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16M13 8h4M13 12h4"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
    code: '<path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 4l-4 16"/>',
    back: '<path d="M19 12H5M12 19l-7-7 7-7"/>',
    external: '<path d="M15 3h6v6M10 14 21 3M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>',
    tag: '<path d="M20 13 13 20a2 2 0 0 1-2.8 0L3 12.8V3h9.8L20 10.2a2 2 0 0 1 0 2.8Z"/><circle cx="8" cy="8" r="1.4"/>',
    filter: '<path d="M4 4h16l-6 7v6l-4 2v-8z"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    zap: '<path d="m13 2-9 12h7l-1 8 9-12h-7z"/>',
    inbox: '<path d="M4 4h16v16H4z"/><path d="M4 13h4l2 3h4l2-3h4"/>',
    type: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
    checkSquare: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 12 3 3 5-6"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M7.5 8C5 8 4 6.5 4 5a2 2 0 0 1 3.5-1.2C9 5.5 12 8 12 8s3-2.5 4.5-4.2A2 2 0 0 1 20 5c0 1.5-1 3-3.5 3"/>',
    eyeOff: '<path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a15.5 15.5 0 0 1-3.1 4M6.6 6.6C3.6 8.4 2 12 2 12s3.5 7 10 7c1.6 0 3.1-.4 4.4-1"/>',
    plusCircle: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>'
  };
  const icon = (name, cls = '') => '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.sparkles) + '</svg>';

  const TEMPLATES = [
    { id: 'midnight', name: '午夜兽语', en: 'MIDNIGHT INSTINCT', glyph: '狼', mark: '◒', mood: '暗色 · 神秘 · 动物原型', desc: '深棕与鎏金，适合人格、潜意识与原型类测试。', color: '#efd397' },
    { id: 'paper', name: '古籍花笺', en: 'FLOWER LETTER', glyph: '花', mark: '笺', mood: '宋韵 · 留白 · 手作纸感', desc: '米纸与朱砂，适合古风、关系与情绪洞察类测试。', color: '#8b493f' },
    { id: 'cute', name: '奶油贴纸', en: 'CREAM STICKER', glyph: '熊', mark: '萌', mood: '奶油黄 · 圆润 · 轻快', desc: '高明度与厚边框，适合萌系、社交与趣味测试。', color: '#dd9b33' },
    { id: 'fairy', name: '星砂童话', en: 'STARLIT FAIRYTALE', glyph: '狐', mark: '星', mood: '古典 · 插画感 · 酒红', desc: '圆拱画框与细金线，适合动物塑与叙事型测试。', color: '#7b293e' },
    { id: 'hogwarts', name: '魔法学院', en: 'ARCANE ACADEMY', glyph: '⚡', mark: '巫', mood: '深紫 · 鎏金 · 玻璃质感', desc: '深紫渐变与鎏金描边，玻璃拟态答题卡片，适合分院、魔杖与角色类魔法主题测试。', color: '#c9a961' }
  ];
  const templateCatalog = () => TEMPLATES.concat((data && data.settings && data.settings.customTemplates) || []);
  const templateById = id => templateCatalog().find(t => t.id === id) || TEMPLATES[0];
  const isImageTemplate = t => !!(t && t.image);
  const templateBackgroundCss = t => t && t.image ? 'background-image:linear-gradient(rgba(14,20,18,.18),rgba(14,20,18,.32)),url(&quot;' + esc(t.image) + '&quot;);background-size:cover;background-position:center;color:#fff;' : '';
  const templateImageStyle = t => t && t.image ? ' style="' + templateBackgroundCss(t) + '"' : '';

  const seedData = {
    version: 1,
    settings: { defaultTemplate: 'midnight', siteTitle: '心屿 Mind Isle', brandLine: '让每一次自我探索，都有漂亮的落脚点。', customTemplates: [] },
    categories: [
      { id: 'cat_personality', name: '性格探索', emoji: '🪞', bg: '#e8f0ea', desc: '人格原型与内在特质' },
      { id: 'cat_relationship', name: '情感关系', emoji: '🫧', bg: '#f7e8e4', desc: '亲密关系与社交模式' },
      { id: 'cat_growth', name: '心理成长', emoji: '🌱', bg: '#eef0dc', desc: '情绪、压力与自我照顾' },
      { id: 'cat_fun', name: '趣味测试', emoji: '✦', bg: '#f7efda', desc: '轻松、传播型小测试' }
    ],
    tests: [],
    codes: [],
    logs: { visits: [1160, 1390, 1280, 1650, 1880, 1720, 2070], completes: [710, 850, 760, 990, 1130, 1040, 1280], days: ['11.11','11.12','11.13','11.14','11.15','11.16','11.17'] }
  };

  function option(text, dimension, points = 3) {
    return { id: uid('opt'), text, dimension, points };
  }
  function question(text, options) {
    return { id: uid('q'), type: 'single_choice', stem: text, options, analysis: '没有标准答案，选择更接近你第一反应的一项。' };
  }
  const animalQuestions = [
    question('走进一个几乎全是陌生人的聚会，你最先会做什么？', [
      option('先站在角落，观察现场的关系和气氛', 'wolf'), option('主动找一个看起来有趣的人开口', 'fox'),
      option('快速判断谁是这里最值得认识的人', 'eagle'), option('找到主人打个招呼，然后自在地做自己', 'dragon')
    ]),
    question('当计划突然被打乱，你的真实反应更接近？', [
      option('先安静下来，重新判断局势再行动', 'wolf'), option('马上切换方案，边走边调整', 'fox'),
      option('拉开距离看全局，找最关键的一步', 'eagle'), option('不喜欢被控制，干脆按自己的节奏重来', 'dragon')
    ]),
    question('朋友眼中的你，最常被形容成哪一种？', [
      option('话不多，但一开口就很准', 'wolf'), option('很会接话，也很会照顾气氛', 'fox'),
      option('看事情很远，常常像局外人一样清醒', 'eagle'), option('有主见，不太按常规出牌', 'dragon')
    ]),
    question('压力最大的时候，你会如何让自己恢复？', [
      option('独处，把情绪消化完再出现', 'wolf'), option('找信任的人聊天，换一个视角', 'fox'),
      option('把问题拆开，找到最可控的变量', 'eagle'), option('暂时离开原来的环境，制造新的空间', 'dragon')
    ]),
    question('如果必须选择一种力量，你更想拥有？', [
      option('在黑暗里也能保持方向的直觉', 'wolf'), option('让任何人都愿意靠近的松弛感', 'fox'),
      option('一眼看清全局的判断力', 'eagle'), option('不被定义、随时重建自己的勇气', 'dragon')
    ])
  ];
  const ancientQuestions = [
    question('看到一场春雨落在庭院里，你最先想到的是？', [
      option('一枝海棠被打湿，但依然很好看', 'liqingzhao', '清照'), option('雨声正好，适合一个人读书', 'wuzetian', '则天'),
      option('檐下的人有没有带伞', 'xishi', '西施'), option('干脆出门走走，雨里也有风景', 'mulan', '木兰')
    ]),
    question('面对不公平的规则，你通常会？', [
      option('把它写下来，让更多人看见', 'liqingzhao', '清照'), option('找到规则的漏洞，反过来利用它', 'wuzetian', '则天'),
      option('先保护身边的人，再想办法周旋', 'xishi', '西施'), option('直接问一句：凭什么？', 'mulan', '木兰')
    ]),
    question('你最容易被哪一种气质打动？', [
      option('清冷又有才气', 'liqingzhao', '清照'), option('笃定、有掌控力', 'wuzetian', '则天'),
      option('温柔但不软弱', 'xishi', '西施'), option('爽利、有行动力', 'mulan', '木兰')
    ]),
    question('如果给你一间只属于自己的屋子，你会怎么布置？', [
      option('书、旧纸和一杯温茶', 'liqingzhao', '清照'), option('简洁、秩序分明、每件东西都有位置', 'wuzetian', '则天'),
      option('花、柔软织物和刚刚好的光', 'xishi', '西施'), option('宽敞利落，最好还能练剑', 'mulan', '木兰')
    ]),
    question('一段关系里，你最不能接受的是？', [
      option('彼此没有精神上的理解', 'liqingzhao', '清照'), option('失去选择权与边界', 'wuzetian', '则天'),
      option('被辜负的真心', 'xishi', '西施'), option('被要求成为别人期待的样子', 'mulan', '木兰')
    ]),
    question('你希望别人记住你的哪一面？', [
      option('细腻、清醒、有风骨', 'liqingzhao', '清照'), option('有野心，也有能力托住野心', 'wuzetian', '则天'),
      option('温柔、体面、让人安心', 'xishi', '西施'), option('勇敢、笃定、说到做到', 'mulan', '木兰')
    ])
  ];
  const cuteQuestions = [
    question('早上闹钟响了三遍，你会？', [
      option('再躺五分钟，抱紧枕头', 'bear'), option('迅速关掉，假装它从未响过', 'cat'),
      option('一边刷牙一边规划今天', 'penguin'), option('已经起了，在窗边晒太阳', 'dragon')
    ]),
    question('朋友临时说“出来玩”，你的第一反应是？', [
      option('好啊好啊，吃点什么？', 'bear'), option('看心情，如果出门要洗头就算了', 'cat'),
      option('先确认时间地点和回家路线', 'penguin'), option('立刻出发，临时起意最好玩', 'dragon')
    ]),
    question('在群聊里你最像哪种成员？', [
      option('不常说话，但一说话大家都会笑', 'bear'), option('只在感兴趣的话题出现', 'cat'),
      option('认真回复每件事，负责收尾', 'penguin'), option('气氛组，表情包供应商', 'dragon')
    ]),
    question('如果今天可以不做任何正事，你想怎么过？', [
      option('窝在家里吃好吃的', 'bear'), option('找一块有阳光的地方发呆', 'cat'),
      option('整理房间和待办，让自己安心', 'penguin'), option('出门探索一个新地方', 'dragon')
    ]),
    question('遇到喜欢的人，你更像？', [
      option('先默默对 Ta 好，等对方发现', 'bear'), option('制造很多偶遇，但绝不先承认', 'cat'),
      option('认真观察，确认靠谱再靠近', 'penguin'), option('直接表达，不喜欢猜来猜去', 'dragon')
    ]),
    question('别人夸你时，你通常会？', [
      option('嘿嘿，真的吗？', 'bear'), option('表面淡定，内心已经截图保存', 'cat'),
      option('谢谢，其实我还可以更好', 'penguin'), option('当然，我值得！', 'dragon')
    ])
  ];
  const fairyQuestions = [
    question('你走进一座森林，最先被什么吸引？', [
      option('远处一闪一闪的湖面', 'fox'), option('树洞里传来的小小声响', 'cat'),
      option('一束穿过树叶的金色光', 'deer'), option('一条没有人走过的小路', 'wolf')
    ]),
    question('旅行前，你更可能是？', [
      option('把想去的地方列成一张梦幻地图', 'fox'), option('临时决定，到了再说', 'cat'),
      option('做足攻略，确保体验顺畅', 'deer'), option('只带上自己，去没去过的地方', 'wolf')
    ]),
    question('面对新环境，你最先寻找？', [
      option('有趣的细节和灵感', 'fox'), option('一个可以躲起来的角落', 'cat'),
      option('认识一个友善的人', 'deer'), option('出口和安全的边界', 'wolf')
    ]),
    question('你希望自己的房间藏着什么秘密？', [
      option('一扇通往别处的小门', 'fox'), option('一块谁也找不到的软垫', 'cat'),
      option('每天都会换花的窗台', 'deer'), option('可以看见整座城市的窗', 'wolf')
    ]),
    question('如果有一样东西能一直陪着你，你选？', [
      option('一只狡黠又会撒娇的小狐狸', 'fox'), option('一只安静趴着的小黑猫', 'cat'),
      option('一只温顺的小鹿', 'deer'), option('一匹忠诚但有野性的狼', 'wolf')
    ]),
    question('别人第一次见你，最容易觉得你？', [
      option('机灵、有趣、反应快', 'fox'), option('安静、可爱、有点慢热', 'cat'),
      option('温柔、可靠、让人放松', 'deer'), option('有个性、有距离感', 'wolf')
    ])
  ];

  const tests = [
    {
      id: 'test_animal', title: '测一测，你内心住着什么动物？', subtitle: '你的内心深处，住着一只什么兽？',
      description: '心理学家荣格曾提出“人格原型”的概念。每个人的潜意识里，都住着一种与生俱来的内在形象。用 5 道生活场景题，找到你的动物人格。',
      categoryId: 'cat_personality', template: 'midnight', status: 'active', featured: true,
      slug: 'q_animal_8f3k', code: 'WOLF-8A6C', codeMax: 999, codeUsed: 642,
      createdAt: '2026-11-12', updatedAt: '2026-11-16', access: 3284, completions: 2071, starts: 2450,
      coverEmoji: '狼', questions: animalQuestions,
      results: [
        { key: 'wolf', emoji: '🐺', title: '孤狼', en: 'THE LONE WOLF', desc: '你外表安静，内心却有一套非常清晰的秩序。你不热衷解释自己，更愿意在关键时刻用判断和行动说话。', tags: ['独立', '清醒', '边界感'], advice: '别总把情绪留在自己心里，试着让值得信任的人靠近一点。' },
        { key: 'fox', emoji: '🦊', title: '灵狐', en: 'THE CLEVER FOX', desc: '你敏锐、松弛，也很会读懂空气。你在人群里不抢风头，却总能找到最舒服的位置。', tags: ['机敏', '松弛', '社交感'], advice: '不必每一刻都照顾所有人，你也有权利优先照顾自己。' },
        { key: 'eagle', emoji: '🦅', title: '苍鹰', en: 'THE FAR-SEEING EAGLE', desc: '你习惯从更高的位置看问题。你不太容易被当下的情绪带着走，更在意长期的方向和结果。', tags: ['洞察', '理性', '全局观'], advice: '偶尔也回到具体的生活里，允许自己感受而不只是分析。' },
        { key: 'dragon', emoji: '🐉', title: '游龙', en: 'THE FREE DRAGON', desc: '你不喜欢被定义，也很难被真正的框架困住。你身上有一种天然的创造力和不服气。', tags: ['自由', '创造', '生命力'], advice: '自由不等于永远独自承担，找到同频的人会让你的世界更大。' }
      ]
    },
    {
      id: 'test_ancient', title: '测测你骨子里住着哪位古代女子', subtitle: '有些人天生就有一种气质，说不清楚哪来的。',
      description: '若有前世，你会是哪一种女子？从细微的选择里，看看你骨子里的性情与风骨。',
      categoryId: 'cat_personality', template: 'paper', status: 'active', featured: true,
      slug: 'q_ancient_2m9v', code: 'LOTUS-3K7P', codeMax: 500, codeUsed: 183,
      createdAt: '2026-11-10', updatedAt: '2026-11-15', access: 2180, completions: 1518, starts: 1780,
      coverEmoji: '莲', questions: ancientQuestions,
      results: [
        { key: 'liqingzhao', emoji: '🪷', title: '李清照', en: 'THE POETESS', desc: '你细腻、敏锐，对美与情绪有天生的感知力。看似柔软，骨子里却有自己的判断和坚持。', tags: ['才情', '敏感', '风骨'], advice: '你的感受力是天赋，不必为了坚强而把细腻藏起来。' },
        { key: 'wuzetian', emoji: '♛', title: '武则天', en: 'THE SOVEREIGN', desc: '你有强烈的目标感和掌控欲，不喜欢被动地等待命运安排。你愿意为想要的东西承担责任。', tags: ['野心', '决断', '掌控力'], advice: '权力之外，也别忘记给自己留下不会被身份吞没的空间。' },
        { key: 'xishi', emoji: '🌸', title: '西施', en: 'THE GENTLE BEAUTY', desc: '你重视关系里的体面与分寸，擅长让对方舒服。你的温柔不是没有锋芒，而是知道何时收敛。', tags: ['温柔', '体面', '共情'], advice: '被喜欢不是唯一的价值来源，你的需求同样值得被认真对待。' },
        { key: 'mulan', emoji: '🗡', title: '花木兰', en: 'THE WARRIOR', desc: '你爽利、直接，有很强的行动力。遇到问题，你更愿意站起来解决，而不是困在情绪里等答案。', tags: ['勇敢', '行动力', '担当'], advice: '不必永远做那个最可靠的人，偶尔也可以被照顾。' }
      ]
    },
    {
      id: 'test_cute', title: '你是哪一种萌系人格？', subtitle: '6 道题，测出你的可爱能量场。',
      description: '有的人像轻松熊，有的人像傲娇小猫。用 6 个日常瞬间，找到你最自然、最可爱的状态。',
      categoryId: 'cat_fun', template: 'cute', status: 'active', featured: true,
      slug: 'q_cute_6b2q', code: 'MENG-6B2Q', codeMax: 300, codeUsed: 76,
      createdAt: '2026-11-08', updatedAt: '2026-11-14', access: 1460, completions: 1032, starts: 1208,
      coverEmoji: '熊', questions: cuteQuestions,
      results: [
        { key: 'bear', emoji: '🐻', title: '轻松熊', en: 'RELAX BEAR', desc: '你是那种让人一靠近就放松下来的存在。你不太争抢，却总能把普通的日子过得很有温度。', tags: ['治愈', '随和', '好相处'], advice: '你的温柔很珍贵，但别忘了偶尔也把自己的需要说出来。' },
        { key: 'cat', emoji: '🐈‍⬛', title: '傲娇黑猫', en: 'ALOOF CAT', desc: '你慢热、挑剔，也很清楚自己喜欢什么。你不需要所有人理解，只要遇到真正同频的人就会变得很黏。', tags: ['慢热', '敏锐', '小傲娇'], advice: '你不是难接近，只是值得被认真靠近。' },
        { key: 'penguin', emoji: '🐧', title: '秩序企鹅', en: 'ORDERLY PENGUIN', desc: '你靠谱、体贴，习惯把事情安排得妥妥当当。你看起来冷静，其实非常在意身边人的感受。', tags: ['可靠', '细腻', '责任感'], advice: '世界不会因为你休息一下就乱掉，允许自己松一口气。' },
        { key: 'dragon', emoji: '🐲', title: '元气奶龙', en: 'SUNNY DRAGON', desc: '你自带热场能力，情绪感染力很强。你喜欢新鲜感，也愿意把快乐分给身边的人。', tags: ['元气', '直接', '行动派'], advice: '热闹之外，也留一点时间给自己安静地充电。' }
      ]
    },
    {
      id: 'test_fairy', title: '来测测你是哪种动物塑', subtitle: '别人眼里的你 vs 真实的你，差别有多大？',
      description: '8 种古典童话风动物少女，解锁你的主塑与副塑。它不定义你，只是给此刻的你一份温柔的说明书。',
      categoryId: 'cat_relationship', template: 'fairy', status: 'inactive', featured: false,
      slug: 'q_fairy_9d4w', code: 'STAR-9D4W', codeMax: 999, codeUsed: 522,
      createdAt: '2026-11-04', updatedAt: '2026-11-13', access: 984, completions: 612, starts: 740,
      coverEmoji: '狐', questions: fairyQuestions,
      results: [
        { key: 'fox', emoji: '🦊', title: '灵狐系', en: 'THE FOX', desc: '你机灵、敏锐，擅长捕捉别人忽略的细节。你有分寸感，也有一点点只留给自己的狡黠。', tags: ['灵动', '洞察', '分寸感'], advice: '别总是猜别人怎么想，直接问一句会轻松很多。' },
        { key: 'cat', emoji: '🐈', title: '黑猫系', en: 'THE CAT', desc: '你有自己的小世界，喜欢在熟悉的角落安静做自己。你对信任的人很柔软，对不熟的人保持礼貌的距离。', tags: ['慢热', '独立', '柔软'], advice: '被看见并不等于被冒犯，试着多给世界一点进入你的机会。' },
        { key: 'deer', emoji: '🦌', title: '小鹿系', en: 'THE DEER', desc: '你温柔、警觉，也很在意环境和关系是否安全。你善于照顾别人，常常先看见那些细微的不舒服。', tags: ['温柔', '共情', '谨慎'], advice: '安全感很多时候来自清晰的边界，而不只是别人的善意。' },
        { key: 'wolf', emoji: '🐺', title: '孤狼系', en: 'THE WOLF', desc: '你冷静、独立，有自己的判断标准。你宁愿独处，也不愿意在无效的关系里消耗自己。', tags: ['冷静', '独立', '有边界'], advice: '强大不是永远不需要别人，选择值得的人依靠，也是一种能力。' }
      ]
    },
    {
      id: 'test_pressure', title: '压力下，你会变成哪种隐藏人格？', subtitle: '那些没有被说出口的应对方式，才是更真实的你。',
      description: '当生活突然加速，你的身体和情绪会先做出什么反应？8 道题，看见你压力下的隐藏模式。',
      categoryId: 'cat_growth', template: 'midnight', status: 'active', featured: false,
      slug: 'q_pressure_4r7n', code: 'CALM-4R7N', codeMax: 200, codeUsed: 117,
      createdAt: '2026-11-01', updatedAt: '2026-11-11', access: 760, completions: 482, starts: 570,
      coverEmoji: '夜', questions: animalQuestions.slice(0, 4),
      results: [
        { key: 'wolf', emoji: '🌒', title: '沉默守夜人', en: 'THE NIGHT WATCHER', desc: '压力来袭时，你会先把自己收回来，独自消化。你看起来平静，但脑子一直在高速运转。', tags: ['内耗', '自持', '观察'], advice: '沉默能保护你，但也会让需要被帮助的时刻悄悄溜走。' },
        { key: 'fox', emoji: '🫧', title: '气氛修复师', en: 'THE HARMONIZER', desc: '你习惯先稳住场面，让别人感觉没事。你处理危机的能力很强，但常常最后才照顾自己。', tags: ['共情', '调节', '承担'], advice: '你不是所有人的情绪避风港，先问问自己现在需要什么。' },
        { key: 'eagle', emoji: '📐', title: '理性规划者', en: 'THE STRATEGIST', desc: '你会迅速拆解问题、列出清单、寻找最可控的路径。行动能带来安全感，但情绪不应被完全跳过。', tags: ['理性', '掌控', '效率'], advice: '把感受也当成需要处理的变量，而不是噪音。' },
        { key: 'dragon', emoji: '⚡', title: '破局者', en: 'THE BREAKER', desc: '你很难忍受长期压抑的环境，压力到临界点时，会做出非常果断的改变。代价是容易一次消耗太多。', tags: ['果断', '冲动', '重生'], advice: '破局前给自己一个停顿，让勇气和判断一起上线。' }
      ]
    },
    {
      id: 'test_color', title: '你的社交能量是什么颜色？', subtitle: '一眼看见你在人群里的能量场。',
      description: '你在人群中是安静充电，还是被互动点亮？用 5 个场景，找到你的社交能量色彩。',
      categoryId: 'cat_relationship', template: 'paper', status: 'draft', featured: false,
      slug: 'q_color_5x8m', code: 'AURA-5X8M', codeMax: 100, codeUsed: 0,
      createdAt: '2026-11-16', updatedAt: '2026-11-17', access: 0, completions: 0, starts: 0,
      coverEmoji: '光', questions: ancientQuestions.slice(0, 5),
      results: ancientQuestions.slice(0,4).map((q,i) => ({ key: ['liqingzhao','wuzetian','xishi','mulan'][i], emoji: ['🌊','🔥','🌷','🌿'][i], title: ['静谧蓝','石榴红','柔雾粉','青苔绿'][i], en: ['QUIET BLUE','POMEGRANATE','SOFT PINK','MOSS GREEN'][i], desc: '你的社交能量有自己的节奏。你不需要成为最热闹的人，也能在关系里找到真正舒服的位置。', tags: ['社交能量','自我节奏'], advice: '把能量留给真正重要的连接。' }))
    }
  ];
  const codes = [
    { id:'code_1', testId:'test_animal', code:'WOLF-8A6C', max:999, used:642, status:'active', expires:'2027-12-31', createdAt:'2026-11-12' },
    { id:'code_2', testId:'test_animal', code:'WOLF-7T2Q', max:100, used:100, status:'used', expires:'2026-12-31', createdAt:'2026-11-13' },
    { id:'code_3', testId:'test_ancient', code:'LOTUS-3K7P', max:500, used:183, status:'active', expires:'2027-06-30', createdAt:'2026-11-10' },
    { id:'code_4', testId:'test_cute', code:'MENG-6B2Q', max:300, used:76, status:'active', expires:'2027-01-31', createdAt:'2026-11-08' },
    { id:'code_5', testId:'test_fairy', code:'STAR-9D4W', max:999, used:522, status:'active', expires:'2027-03-01', createdAt:'2026-11-04' },
    { id:'code_6', testId:'test_pressure', code:'CALM-4R7N', max:200, used:117, status:'active', expires:'2026-12-20', createdAt:'2026-11-01' }
  ];
  seedData.tests = tests; seedData.codes = codes;
  if (window.MIND_ISLE_BANK) {
    seedData.tests.push(...clone(window.MIND_ISLE_BANK.tests || []));
    seedData.codes.push(...clone(window.MIND_ISLE_BANK.codes || []));
    seedData.version = 2;
  }

  const CLOUD = window.MindIsleCloud || null;
  let cloudReady = false;
  let cloudPulled = false;

  function applyCloudState(remote) {
    if (!remote || !remote.tests || !Array.isArray(remote.tests)) return false;
    const merged = normalizeData(mergeQuestionBank(clone(remote)));
    data = merged;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  }
  function cloudPull() {
    if (!CLOUD || !CLOUD.ready) return Promise.resolve();
    return CLOUD.pullState().then(remote => {
      if (applyCloudState(remote)) {
        cloudPulled = true;
        rerender();
        toast('已从云端同步最新数据');
      }
    }).catch(() => {});
  }
  function cloudPush() {
    if (!CLOUD || !CLOUD.ready || !CLOUD.isSignedIn()) return;
    clearTimeout(cloudPush._t);
    cloudPush._t = setTimeout(() => {
      CLOUD.pushState(clone(data)).catch(() => {});
    }, 400);
  }

  let data;
  let session = CLOUD ? CLOUD.isSignedIn() : (localStorage.getItem(SESSION_KEY) === '1');
  let currentRoute = '';
  let navigationEpoch = 0;
  let state = {
    dashboardDays: 7,
    testsView: { tab: 'all', search: '', category: 'all', template: 'all', sort: 'updated', selected: new Set() },
    codesView: { search: '', status: 'all' },
    statsDays: 7,
    editorDraft: null,
    editorId: null,
    importText: '',
    importParsed: [],
    importName: '批量导入测试',
    importTemplate: 'paper',
    importHtml: null,
    categoryEditId: null,
    pendingTemplateImage: '',
    publicState: { testId: null, entryEpoch: -1, stage: 'cover', unlocked: false, qIndex: 0, answers: {}, selected: null, codeId: null, advancing: false, autoAdvanceToken: 0 }
  };

  function mergeQuestionBank(target) {
    if (!window.MIND_ISLE_BANK || !target) return target;
    const existingTests = new Set((target.tests || []).map(t => t.id));
    const existingCodes = new Set((target.codes || []).map(c => c.id));
    target.tests = target.tests || []; target.codes = target.codes || [];
    (window.MIND_ISLE_BANK.tests || []).forEach(t => { if (!existingTests.has(t.id)) target.tests.push(clone(t)); });
    (window.MIND_ISLE_BANK.codes || []).forEach(c => { if (!existingCodes.has(c.id)) target.codes.push(clone(c)); });
    target.version = Math.max(Number(target.version || 1), 2);
    return target;
  }
  function normalizeData(target) {
    if (!target) return target;
    target.settings = target.settings || {};
    if (!Array.isArray(target.settings.customTemplates)) target.settings.customTemplates = [];
    const seenCustom = new Set();
    target.settings.customTemplates = target.settings.customTemplates.filter(t => {
      if (!t || !t.id || seenCustom.has(t.id) || !t.image) return false;
      seenCustom.add(t.id); return true;
    });
    const seenTestIds = new Set(), seenSlugs = new Set();
    target.tests = (target.tests || []).filter(test => {
      if (!test || !test.id || seenTestIds.has(test.id) || (test.slug && seenSlugs.has(test.slug))) return false;
      seenTestIds.add(test.id); if (test.slug) seenSlugs.add(test.slug);
      const seenQIds = new Set(), seenStems = new Set();
      test.questions = (test.questions || []).filter(q => {
        const qid = q.id || uid('q');
        const key = String(q.stem || '').replace(/\s+/g, '').trim() + '|' + (q.options || []).map(o => String(o.text || '').replace(/\s+/g, '').trim()).join('/');
        if (seenQIds.has(qid) || (key && seenStems.has(key))) return false;
        seenQIds.add(qid); if (key) seenStems.add(key);
        const seenOptionIds = new Set(), seenOptionTexts = new Set();
        q.options = (q.options || []).filter(o => {
          const oid = o.id || uid('opt'); const otext = String(o.text || '').replace(/\s+/g, '').trim();
          if (seenOptionIds.has(oid) || (otext && seenOptionTexts.has(otext))) return false;
          seenOptionIds.add(oid); if (otext) seenOptionTexts.add(otext); return true;
        });
        return true;
      });
      const seenResultKeys = new Set();
      test.results = (test.results || []).filter(r => { if (!r || !r.key || seenResultKeys.has(r.key)) return false; seenResultKeys.add(r.key); return true; });
      return true;
    });
    const seenCodeIds = new Set(), seenCodes = new Set();
    target.codes = (target.codes || []).filter(c => {
      if (!c || !c.id || seenCodeIds.has(c.id) || (c.code && seenCodes.has(c.code))) return false;
      seenCodeIds.add(c.id); if (c.code) seenCodes.add(c.code); return true;
    });
    return target;
  }
  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.tests) {
          const merged = normalizeData(mergeQuestionBank(parsed));
          localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          return merged;
        }
      }
    } catch (e) { console.warn('Data restore failed', e); }
    return normalizeData(mergeQuestionBank(clone(seedData)));
  }
  function saveData() {
    try { data = normalizeData(data); localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch (e) { toast('本地存储空间不足，数据未保存', 'error'); return; }
    cloudPush();
  }
  data = loadData();

  function toast(message, type = 'success') {
    const el = document.createElement('div');
    el.className = 'toast ' + (type === 'error' ? 'error' : '');
    el.innerHTML = icon(type === 'error' ? 'alert' : 'checkCircle') + '<span>' + esc(message) + '</span>';
    toastRoot.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(6px)'; el.style.transition = '.2s ease'; }, 2400);
    setTimeout(() => el.remove(), 2700);
  }
  async function copyText(text, message = '已复制') {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement('textarea');
        area.value = text; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area);
        area.focus(); area.select(); document.execCommand('copy'); area.remove();
      }
      toast(message);
    } catch (e) { toast('复制失败，请手动选择文本', 'error'); }
  }
  function readImageFile(file, maxWidth = 1200, maxHeight = 1600, quality = .82) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type.startsWith('image/')) { reject(new Error('请选择图片文件')); return; }
      if (file.size > 15 * 1024 * 1024) { reject(new Error('图片不能超过 15MB')); return; }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('图片读取失败'));
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error('图片格式无法识别'));
        img.onload = () => {
          const scale = Math.min(1, maxWidth / img.width, maxHeight / img.height);
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.width * scale));
          canvas.height = Math.max(1, Math.round(img.height * scale));
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/webp', quality));
        };
        img.src = String(reader.result || '');
      };
      reader.readAsDataURL(file);
    });
  }
  function publicUrl(test) { return location.href.split('#')[0] + '#/q/' + test.slug; }
  function baseUrl() { return location.origin + location.pathname; }
  function randomSlug() { return 'q_' + Math.random().toString(36).slice(2, 9); }
  function randomCode(prefix = 'MIND') {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let s = ''; for (let i=0;i<4;i++) s += chars[Math.floor(Math.random()*chars.length)];
    let n = ''; for (let i=0;i<4;i++) n += chars[Math.floor(Math.random()*chars.length)];
    return prefix + '-' + s + n.slice(0,2);
  }
  function categoryById(id) { return data.categories.find(c => c.id === id) || { name: '未分类', emoji: '○', bg: '#f0f1ed' }; }
  function statusInfo(status) {
    if (status === 'active') return ['已上架','badge-active'];
    if (status === 'inactive') return ['已下架','badge-inactive'];
    return ['草稿','badge-draft'];
  }
  function codeStatusInfo(status) {
    if (status === 'active') return ['可用','badge-active'];
    if (status === 'used') return ['已用完','badge-inactive'];
    return ['已作废','badge-danger'];
  }
  function availableTemplate(id) {
    const disabled = data.settings.disabledTemplates || [];
    const t = templateCatalog().find(x => x.id === id);
    return t && !disabled.includes(id) ? t : templateById(data.settings.defaultTemplate);
  }
  const allTemplateOptions = () => templateCatalog().map(t => '<option value="' + t.id + '">' + esc(t.name) + '</option>').join('');
  const allCategoryOptions = (selected='') => data.categories.map(c => '<option value="' + c.id + '"' + (c.id===selected?' selected':'') + '>' + esc(c.name) + '</option>').join('');
  const statusBadge = status => { const info = statusInfo(status); return '<span class="badge ' + info[1] + '">' + info[0] + '</span>'; };
  const templateBadge = id => { const t = templateById(id); return '<span class="tag"><span style="width:6px;height:6px;border-radius:50%;margin-right:6px;background:' + t.color + '"></span>' + esc(t.name) + '</span>'; };

  const navGroups = [
    {
      label: '工作台',
      items: [
        { id: 'dashboard', label: '数据概览', icon: 'grid', route: '/admin' },
        { id: 'tests', label: '测试管理', icon: 'file', route: '/admin/tests' }
      ]
    },
    {
      label: '内容运营',
      items: [
        { id: 'import', label: '批量导入', icon: 'upload', route: '/admin/import' },
        { id: 'categories', label: '分类管理', icon: 'folder', route: '/admin/categories' },
        { id: 'codes', label: '验证码', icon: 'key', route: '/admin/codes' },
        { id: 'templates', label: '模板库', icon: 'layout', route: '/admin/templates' }
      ]
    },
    {
      label: '分析',
      items: [
        { id: 'stats', label: '数据统计', icon: 'chart', route: '/admin/stats' }
      ]
    }
  ];

  function brandMarkup(dark = false) {
    return '<div class="brand">' +
      '<div class="brand-mark">' + icon('sparkles') + '</div>' +
      '<div class="brand-copy"><strong>心屿</strong><span>MIND ISLE · STUDIO</span></div>' +
    '</div>';
  }

  function activeNavId(path) {
    if (path === '/admin' || path === '') return 'dashboard';
    if (path.startsWith('/admin/tests')) return 'tests';
    if (path.startsWith('/admin/import')) return 'import';
    if (path.startsWith('/admin/categories')) return 'categories';
    if (path.startsWith('/admin/codes')) return 'codes';
    if (path.startsWith('/admin/templates')) return 'templates';
    if (path.startsWith('/admin/stats')) return 'stats';
    return 'dashboard';
  }

  function renderSidebar(path) {
    const active = activeNavId(path);
    const totalActive = data.tests.filter(t => t.status === 'active').length;
    return '<aside class="sidebar" id="sidebar">' +
      brandMarkup() +
      navGroups.map(group => '<div class="sidebar-section">' + group.label + '</div><nav class="side-nav">' +
        group.items.map(item => '<button class="nav-link ' + (active===item.id?'active':'') + '" data-nav="' + item.route + '">' +
          icon(item.icon) + '<span>' + item.label + '</span>' +
          (item.id==='tests' ? '<span class="nav-badge">' + totalActive + '</span>' : '') +
        '</button>').join('') + '</nav>').join('') +
      '<div class="sidebar-bottom">' +
        '<div class="sidebar-tip"><strong>让测试更容易被分享</strong><p>本期模板已完成移动端适配，打开手机预览即可查看真实体验。</p><button data-action="open-template-help">查看使用建议 ' + icon('arrowUpRight') + '</button></div>' +
        '<div class="admin-user"><div class="avatar">屿</div><div class="admin-user-copy"><strong>岛屿管理员</strong><span>mlxx4235@cc.com</span></div><button class="icon-btn" data-action="logout" title="退出登录">' + icon('logout') + '</button></div>' +
      '</div>' +
    '</aside>';
  }

  function renderTopbar(crumb, subcrumb = '') {
    return '<header class="topbar">' +
      '<button class="icon-btn mobile-menu" data-action="toggle-sidebar" aria-label="打开菜单">' + icon('menu') + '</button>' +
      '<div class="breadcrumb"><span>心屿管理台</span>' + icon('chevronRight') + '<strong>' + esc(crumb) + '</strong>' + (subcrumb ? icon('chevronRight') + '<span>' + esc(subcrumb) + '</span>' : '') + '</div>' +
      '<div class="topbar-actions">' +
        '<button class="global-search" data-action="open-command"><span>' + icon('search') + '</span><span>搜索测试、验证码</span><kbd>⌘ K</kbd></button>' +
        '<button class="icon-btn notification-dot" data-action="notifications" title="通知">' + icon('bell') + '</button>' +
        '<button class="avatar top-avatar" data-action="account" title="账户">屿</button>' +
      '</div>' +
    '</header>';
  }

  function renderShell(content, crumb, subcrumb = '') {
    const path = location.hash.replace(/^#/, '') || '/admin';
    return '<div class="app-shell">' + renderSidebar(path) + '<main class="main">' + renderTopbar(crumb, subcrumb) + content + '</main></div>';
  }

  function renderLogin() {
    return '<div class="login-page">' +
      '<section class="login-visual">' + brandMarkup() +
        '<div class="login-hero">' +
          '<div class="login-eyebrow">A small studio for inner worlds</div>' +
          '<h1>看见每一种<br><em>内在的形状。</em></h1>' +
          '<p>从一句提问，到一张愿意被分享的结果卡片。管理你的心理测试、访问链接与每一次真实抵达。</p>' +
          '<div class="login-cards">' +
            '<div class="login-template-mini mini-midnight"><span class="mini-title">午夜兽语</span><span class="mini-orbit"></span><span class="mini-glyph">狼</span></div>' +
            '<div class="login-template-mini mini-paper"><span class="mini-title">古籍花笺</span><span class="mini-orbit"></span><span class="mini-glyph">花</span></div>' +
            '<div class="login-template-mini mini-cute"><span class="mini-title">奶油贴纸</span><span class="mini-orbit"></span><span class="mini-glyph">萌</span></div>' +
            '<div class="login-template-mini mini-fairy"><span class="mini-title">星砂童话</span><span class="mini-orbit"></span><span class="mini-glyph">狐</span></div>' +
            '<div class="login-template-mini mini-hogwarts"><span class="mini-title">魔法学院</span><span class="mini-orbit"></span><span class="mini-glyph">✦</span></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="login-panel"><div class="login-box">' +
        '<h2>欢迎回来</h2><p>登录后管理测试内容、访问权限与运营数据。</p>' +
        '<form class="login-form" data-form="login">' +
          '<div class="field"><label for="login-email">管理员邮箱</label><div class="input-wrap">' + icon('users') + '<input class="input" id="login-email" name="email" type="email" placeholder="请输入管理员邮箱" autocomplete="username" required></div></div>' +
          '<div class="field"><label for="login-password">密码</label><div class="input-wrap">' + icon('lock') + '<input class="input" id="login-password" name="password" type="password" placeholder="请输入密码" autocomplete="current-password" required></div></div>' +
          '<div id="login-error"></div>' +
          '<button class="btn btn-primary login-submit" type="submit">进入管理台 ' + icon('arrowUpRight') + '</button>' +
        '</form>' +
        '<div class="login-footer">Mind Isle Studio · Supabase 云端版</div>' +
      '</div></section>' +
    '</div>';
  }

  function lineChartSvg(visits, completes, labels) {
    const w = 700, h = 210, left = 34, top = 16, bottom = 30;
    const all = visits.concat(completes);
    const max = Math.max(...all, 10) * 1.16;
    const x = i => left + (i * (w - left - 8) / Math.max(labels.length - 1, 1));
    const y = v => top + (1 - v / max) * (h - top - bottom);
    const smoothPath = values => {
      const pts = values.map((v,i) => [x(i), y(v)]);
      if (pts.length < 2) return '';
      let d = 'M ' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
      for (let i=0;i<pts.length-1;i++) {
        const p0 = pts[i], p1 = pts[i+1];
        const mx = (p0[0] + p1[0]) / 2;
        d += ' C ' + mx.toFixed(1) + ' ' + p0[1].toFixed(1) + ', ' + mx.toFixed(1) + ' ' + p1[1].toFixed(1) + ', ' + p1[0].toFixed(1) + ' ' + p1[1].toFixed(1);
      }
      return d;
    };
    const lineA = smoothPath(visits), lineB = smoothPath(completes);
    const area = lineA + ' L ' + x(visits.length-1).toFixed(1) + ' ' + (h-bottom) + ' L ' + x(0).toFixed(1) + ' ' + (h-bottom) + ' Z';
    const grid = [0,1,2,3,4].map(i => {
      const yy = top + i * (h - top - bottom) / 4;
      const label = Math.round(max * (1 - i/4) / 100) * 100;
      return '<line class="chart-grid-line" x1="' + left + '" x2="' + (w-3) + '" y1="' + yy + '" y2="' + yy + '"/><text class="chart-axis-text" x="0" y="' + (yy+3) + '">' + label + '</text>';
    }).join('');
    const xlabels = labels.map((label,i) => '<text class="chart-axis-text" x="' + x(i) + '" y="' + (h-7) + '" text-anchor="middle">' + esc(label) + '</text>').join('');
    const dots = visits.map((v,i) => '<circle class="chart-dot" cx="' + x(i) + '" cy="' + y(v) + '" r="3"/>').join('');
    return '<svg class="visit-chart" viewBox="0 0 700 210" preserveAspectRatio="none" role="img" aria-label="访问趋势图">' +
      '<defs><linearGradient id="visitGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6a9686" stop-opacity=".22"/><stop offset="1" stop-color="#6a9686" stop-opacity="0"/></linearGradient></defs>' +
      grid + '<path class="chart-area" d="' + area + '"/><path class="chart-line" d="' + lineA + '"/><path class="chart-line secondary" d="' + lineB + '"/>' + dots + xlabels + '</svg>';
  }

  function statCard(label, value, change, sub, iconName, wash, ink) {
    return '<article class="stat-card" style="--stat-wash:' + wash + ';--stat-ink:' + ink + '">' +
      '<div class="stat-top"><span>' + label + '</span><span class="stat-icon">' + icon(iconName) + '</span></div>' +
      '<div class="stat-value">' + value + '</div>' +
      '<div class="stat-bottom"><span class="stat-delta">' + icon('arrowUpRight') + change + '</span><span>' + sub + '</span></div>' +
    '</article>';
  }

  function nanoTemplate(t) {
    return '<div class="template-nano ' + (isImageTemplate(t)?'has-image':'') + '" data-t="' + t.id + '"' + templateImageStyle(t) + '><div class="nano-content"><strong>' + esc(t.name) + '</strong><small>' + esc(t.en) + '</small><div class="nano-lines"><i></i><i></i><i></i></div><div class="nano-art">' + t.glyph + '</div></div></div>';
  }

  function testThumbMarkup(test, tag = 'div', extraStyle = '') {
    const tpl = templateById(test.template);
    const style = tpl.image ? templateBackgroundCss(tpl) + extraStyle : extraStyle;
    return '<' + tag + ' class="test-thumb ' + (tpl.image?'has-image':'') + '" data-t="' + test.template + '"' + (style ? ' style="' + style + '"' : '') + '>' + esc(test.coverEmoji) + '</' + tag + '>';
  }

  function recentRows(limit = 5) {
    return data.tests.slice().sort((a,b)=>new Date(b.updatedAt)-new Date(a.updatedAt)).slice(0, limit).map(test => {
      const st = statusInfo(test.status);
      return '<tr>' +
        '<td><div class="test-cell">' + testThumbMarkup(test) + '<div class="test-cell-copy"><strong data-nav="/admin/tests/' + test.id + '/edit">' + esc(test.title) + '</strong><span>更新于 ' + shortDate(test.updatedAt) + ' · ' + test.questions.length + ' 题</span></div></div></td>' +
        '<td>' + templateBadge(test.template) + '</td>' +
        '<td><span class="badge ' + st[1] + '">' + st[0] + '</span></td>' +
        '<td class="mono">' + fmt(test.access) + '</td>' +
        '<td class="mono">' + pct(test.completions, test.starts) + '%</td>' +
        '<td><div class="table-actions"><button class="icon-btn" data-action="preview-test" data-id="' + test.id + '" title="预览">' + icon('eye') + '</button><button class="icon-btn" data-nav="/admin/tests/' + test.id + '/edit" title="编辑">' + icon('edit') + '</button></div></td>' +
      '</tr>';
    }).join('');
  }

  function renderDashboard() {
    const sums = data.tests.reduce((acc,t) => { acc.access += Number(t.access||0); acc.completions += Number(t.completions||0); acc.starts += Number(t.starts||0); return acc; }, {access:0,completions:0,starts:0});
    const active = data.tests.filter(t => t.status==='active').length;
    const visits = data.logs.visits;
    const completes = data.logs.completes;
    const range = state.dashboardDays;
    const dayLabels = range === 7 ? data.logs.days : ['10.19','10.22','10.25','10.28','10.31','11.03','11.06','11.09','11.12','11.15','11.17'];
    const chartA = range === 7 ? visits : [670,820,760,980,1160,1060,1390,1510,1740,1880,2070];
    const chartB = range === 7 ? completes : [360,470,420,590,700,620,830,910,1050,1130,1280];
    const activeRatio = pct(sums.completions, sums.starts);
    const content = '<div class="page dashboard-page">' +
      '<div class="greeting-row"><div><h1>下午好，<span>岛屿管理员</span></h1><p>' + dateCn(today()) + ' · ' + weekdayCn() + '　今天也有人在你的测试里，看见了自己。</p></div>' +
        '<div class="page-actions"><button class="btn btn-secondary" data-nav="/admin/import">' + icon('upload') + '批量导入</button><button class="btn btn-primary" data-nav="/admin/tests/new">' + icon('plus') + '新建测试</button></div></div>' +
      '<div class="stat-grid">' +
        statCard('测试总数', fmt(data.tests.length), '+2', '较上月新增', 'file', '#edf4ef', '#4c7866') +
        statCard('累计访问', fmt(sums.access), '+18.6%', '近 7 天持续上升', 'target', '#eef1f7', '#6982a4') +
        statCard('完成作答', fmt(sums.completions), '+12.4%', '完成率 ' + pct(sums.completions,sums.starts) + '%', 'checkSquare', '#f8efe7', '#b17150') +
        statCard('已上架', fmt(active), '+' + active, '共 ' + data.tests.length + ' 个测试', 'zap', '#f3f0e3', '#987b32') +
      '</div>' +
      '<div class="dashboard-grid">' +
        '<section class="panel chart-panel">' +
          '<div class="panel-head"><div><div class="panel-title">访问趋势</div><div class="panel-subtitle">访问量与完成作答的变化</div></div><div class="chart-toolbar"><button class="chart-range ' + (range===7?'active':'') + '" data-action="dashboard-range" data-days="7">近 7 天</button><button class="chart-range ' + (range===30?'active':'') + '" data-action="dashboard-range" data-days="30">近 30 天</button></div></div>' +
          '<div class="panel-body">' + lineChartSvg(chartA, chartB, dayLabels) +
            '<div class="chart-legend" style="justify-content:flex-end;margin-top:8px"><span class="legend-item"><i class="legend-dot" style="background:#416d5d"></i>访问量</span><span class="legend-item"><i class="legend-dot" style="background:#d9b376"></i>完成数</span></div>' +
          '</div>' +
        '</section>' +
        '<div class="overview-side">' +
          '<section class="panel funnel-card"><div class="card-title-row"><h3>今日完成漏斗</h3><span>实时</span></div>' +
            '<div class="funnel-metric"><strong>' + pct(sums.completions,sums.access) + '%</strong><span>+4.2%</span></div><div class="muted" style="font-size:9px">访问 → 完成作答的整体转化</div>' +
            '<div class="funnel-bar"><div style="width:' + pct(sums.completions,sums.access) + '%"></div></div>' +
            '<div class="funnel-steps"><div class="funnel-step"><span>打开链接</span><div class="mini-progress"><i style="width:100%"></i></div><strong>' + fmt(Math.round(sums.access*.88)) + '</strong></div><div class="funnel-step"><span>开始做题</span><div class="mini-progress"><i style="width:82%"></i></div><strong>' + fmt(sums.starts) + '</strong></div><div class="funnel-step"><span>完成作答</span><div class="mini-progress"><i style="width:' + activeRatio + '%"></i></div><strong>' + fmt(sums.completions) + '</strong></div></div>' +
          '</section>' +
          '<section class="panel quick-card"><div class="card-title-row"><h3>快捷操作</h3><span>常用</span></div><div class="quick-grid">' +
            '<button class="quick-action" data-nav="/admin/tests/new"><span class="quick-icon">' + icon('plus') + '</span><strong>创建测试</strong><span>新建一套心理测试</span></button>' +
            '<button class="quick-action" data-nav="/admin/import"><span class="quick-icon">' + icon('upload') + '</span><strong>导入题目</strong><span>从文本快速拆题</span></button>' +
            '<button class="quick-action" data-nav="/admin/codes"><span class="quick-icon">' + icon('key') + '</span><strong>生成验证码</strong><span>分发到销售渠道</span></button>' +
            '<button class="quick-action" data-nav="/admin/templates"><span class="quick-icon">' + icon('layout') + '</span><strong>切换模板</strong><span>查看五套视觉风格</span></button>' +
          '</div></section>' +
        '</div>' +
      '</div>' +
      '<section class="panel recent-panel"><div class="section-head"><h3>最近编辑的测试</h3><a href="#/admin/tests" data-nav="/admin/tests">查看全部 ' + icon('chevronRight') + '</a></div><div class="table-wrap"><table class="data-table"><thead><tr><th>测试</th><th>模板</th><th>状态</th><th>访问量</th><th>完成率</th><th></th></tr></thead><tbody>' + recentRows(5) + '</tbody></table></div></section>' +
      '<section class="panel recent-panel"><div class="section-head"><h3>模板灵感</h3><a href="#/admin/templates" data-nav="/admin/templates">打开模板库 ' + icon('chevronRight') + '</a></div><div class="template-strip">' + templateCatalog().map(nanoTemplate).join('') + '</div></section>' +
    '</div>';
    return renderShell(content, '数据概览');
  }

  function filteredTests() {
    const v = state.testsView;
    let rows = data.tests.slice();
    if (v.tab !== 'all') rows = rows.filter(t => t.status === v.tab);
    if (v.category !== 'all') rows = rows.filter(t => t.categoryId === v.category);
    if (v.template !== 'all') rows = rows.filter(t => t.template === v.template);
    if (v.search.trim()) {
      const q = v.search.trim().toLowerCase();
      rows = rows.filter(t => (t.title + ' ' + t.slug + ' ' + t.code + ' ' + t.subtitle).toLowerCase().includes(q));
    }
    if (v.sort === 'visits') rows.sort((a,b) => b.access - a.access);
    else if (v.sort === 'created') rows.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
    else rows.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    return rows;
  }

  function bulkBarMarkup() {
    const n = state.testsView.selected.size;
    if (!n) return '';
    return '<div class="bulk-bar" id="bulk-bar"><strong>已选 ' + n + ' 项</strong><span class="muted">可批量调整状态、模板或导出链接</span><div class="row"><button class="btn btn-xs btn-secondary" data-action="bulk-status" data-status="active">上架</button><button class="btn btn-xs btn-secondary" data-action="bulk-status" data-status="inactive">下架</button><button class="btn btn-xs btn-secondary" data-action="bulk-template">切换模板</button><button class="btn btn-xs btn-secondary" data-action="bulk-export">导出链接</button><button class="btn btn-xs btn-danger" data-action="bulk-delete">删除</button></div></div>';
  }

  function testsTableMarkup() {
    const rows = filteredTests();
    const v = state.testsView;
    if (!rows.length) return '<div class="table-wrap"><div class="empty-state"><div class="empty-icon">' + icon('search') + '</div><h3>没有找到匹配的测试</h3><p>换一个关键词，或清除筛选条件试试。</p><button class="btn btn-secondary btn-sm" data-action="clear-test-filters">清除筛选</button></div></div>';
    return '<div class="table-wrap"><table class="data-table"><thead><tr>' +
      '<th class="check"><input class="checkbox" type="checkbox" data-action="select-all-tests" ' + (rows.every(t => v.selected.has(t.id)) ? 'checked' : '') + '></th>' +
      '<th>测试内容</th><th>分类</th><th>模板</th><th>访问 / 完成</th><th>验证码</th><th>状态</th><th>更新</th><th style="text-align:right">操作</th></tr></thead><tbody>' +
      rows.map(test => {
        const cat = categoryById(test.categoryId); const st = statusInfo(test.status);
        return '<tr class="' + (v.selected.has(test.id)?'selected':'') + '">' +
          '<td class="check"><input class="checkbox" type="checkbox" data-test-select="' + test.id + '" ' + (v.selected.has(test.id)?'checked':'') + '></td>' +
          '<td><div class="test-cell">' + testThumbMarkup(test) + '<div class="test-cell-copy"><strong data-nav="/admin/tests/' + test.id + '/edit">' + esc(test.title) + '</strong><span>/q/' + esc(test.slug) + ' · ' + test.questions.length + ' 道题</span></div></div></td>' +
          '<td><span class="tag">' + esc(cat.emoji) + ' ' + esc(cat.name) + '</span></td>' +
          '<td>' + templateBadge(test.template) + '</td>' +
          '<td><strong style="color:var(--ink);font-size:11px">' + fmt(test.access) + '</strong><span class="muted" style="margin-left:5px">/ ' + fmt(test.completions) + '</span></td>' +
          '<td><button class="table-code" data-action="copy-code" data-code="' + esc(test.code) + '">' + esc(test.code) + icon('copy') + '</button></td>' +
          '<td><span class="badge ' + st[1] + '">' + st[0] + '</span></td>' +
          '<td><span class="muted">' + shortDate(test.updatedAt) + '</span></td>' +
          '<td><div class="table-actions"><button class="icon-btn" data-action="preview-test" data-id="' + test.id + '" title="预览">' + icon('eye') + '</button><button class="icon-btn" data-action="copy-link" data-id="' + test.id + '" title="复制链接">' + icon('link') + '</button><button class="icon-btn" data-nav="/admin/tests/' + test.id + '/edit" title="编辑">' + icon('edit') + '</button><button class="icon-btn" data-action="delete-test" data-id="' + test.id + '" title="删除">' + icon('trash') + '</button></div></td>' +
        '</tr>';
      }).join('') + '</tbody></table></div>';
  }

  function renderTestsPage() {
    const v = state.testsView;
    const counts = {
      all: data.tests.length,
      active: data.tests.filter(t => t.status==='active').length,
      inactive: data.tests.filter(t => t.status==='inactive').length,
      draft: data.tests.filter(t => t.status==='draft').length
    };
    const content = '<div class="page">' +
      '<div class="page-head"><div class="page-title-wrap"><h1>测试管理</h1><p>一套测试，一个独立链接。管理内容、模板和访问权限。</p></div><div class="page-actions"><button class="btn btn-secondary" data-action="export-tests">' + icon('download') + '导出</button><button class="btn btn-primary" data-nav="/admin/tests/new">' + icon('plus') + '新建测试</button></div></div>' +
      '<div class="tabs">' + [['all','全部'],['active','已上架'],['inactive','已下架'],['draft','草稿']].map(x => '<button class="tab ' + (v.tab===x[0]?'active':'') + '" data-action="tests-tab" data-tab="' + x[0] + '">' + x[1] + '<span class="tab-count">' + counts[x[0]] + '</span></button>').join('') + '</div>' +
      '<div class="toolbar">' +
        '<div class="search-box">' + icon('search') + '<input class="input" id="test-search" placeholder="搜索测试名称、链接或验证码" value="' + esc(v.search) + '"></div>' +
        '<select class="select" id="test-category-filter"><option value="all">全部分类</option>' + data.categories.map(c => '<option value="' + c.id + '" ' + (v.category===c.id?'selected':'') + '>' + esc(c.name) + '</option>').join('') + '</select>' +
        '<select class="select" id="test-template-filter"><option value="all">全部模板</option>' + templateCatalog().map(t => '<option value="' + t.id + '" ' + (v.template===t.id?'selected':'') + '>' + esc(t.name) + '</option>').join('') + '</select>' +
        '<select class="select" id="test-sort"><option value="updated" ' + (v.sort==='updated'?'selected':'') + '>最近更新</option><option value="created" ' + (v.sort==='created'?'selected':'') + '>最近创建</option><option value="visits" ' + (v.sort==='visits'?'selected':'') + '>访问最多</option></select>' +
        '<div class="toolbar-actions"><button class="btn btn-secondary btn-sm" data-action="copy-all-links">' + icon('link') + '导出链接表</button></div>' +
      '</div>' +
      '<div id="bulk-host">' + bulkBarMarkup() + '</div>' +
      '<div id="tests-table-host">' + testsTableMarkup() + '</div>' +
      '<div class="pagination"><span>共 ' + filteredTests().length + ' 条记录</span><div class="pager"><button disabled>' + icon('chevronLeft') + '</button><button class="active">1</button><button disabled>' + icon('chevronRight') + '</button></div></div>' +
    '</div>';
    return renderShell(content, '测试管理');
  }

  function blankTest() {
    const dims = [
      { key:'dawn', emoji:'🌅', title:'晨曦型', en:'THE DAWN', desc:'你在变化里保持自己的节奏，擅长把复杂的事情慢慢理清。', tags:['清醒','稳定'] },
      { key:'ember', emoji:'🔥', title:'余烬型', en:'THE EMBER', desc:'你看起来平静，内在却有很强的生命力与行动冲动。', tags:['热情','行动'] },
      { key:'tide', emoji:'🌊', title:'潮汐型', en:'THE TIDE', desc:'你对环境和关系很敏锐，懂得顺势，也有自己的边界。', tags:['共情','灵活'] },
      { key:'forest', emoji:'🌿', title:'森屿型', en:'THE FOREST', desc:'你需要足够的个人空间，在安静中恢复能量，也愿意为重要的人留出位置。', tags:['内向','治愈'] }
    ];
    return {
      id: uid('test'), title: '', subtitle: '', description: '', categoryId: data.categories[0]?.id || '',
      template: data.settings.defaultTemplate, status: 'draft', featured: false, slug: randomSlug(), code: randomCode('MIND'),
      codeMax: 100, codeUsed: 0, createdAt: today(), updatedAt: today(), access: 0, completions: 0, starts: 0, coverEmoji: '心',
      questions: [{
        id: uid('q'), type:'single_choice', stem:' ', analysis:'没有标准答案，选择更接近你第一反应的一项。',
        options: [
          { id:uid('opt'), text:'选项 A', dimension:'dawn', points:3 },
          { id:uid('opt'), text:'选项 B', dimension:'ember', points:3 },
          { id:uid('opt'), text:'选项 C', dimension:'tide', points:3 },
          { id:uid('opt'), text:'选项 D', dimension:'forest', points:3 }
        ]
      }],
      results: dims, customCss: ''
    };
  }

  function ensureEditorDraft(id) {
    if (state.editorId === id && state.editorDraft) return;
    state.editorId = id;
    if (id === 'new') state.editorDraft = blankTest();
    else {
      const found = data.tests.find(t => t.id === id);
      state.editorDraft = found ? clone(found) : blankTest();
      if (!state.editorDraft.customCss) state.editorDraft.customCss = '';
    }
  }

  function previewStage(test) {
    const t = availableTemplate(test.template);
    const q = test.questions?.[0] || { stem: '你的第一个问题会显示在这里。', options: [] };
    const stageClass = isImageTemplate(t) ? 'pv-custom' : 'pv-' + t.id;
    const stageStyle = isImageTemplate(t) ? ' style="' + templateBackgroundCss(t) + '"' : '';
    return '<div class="preview-template" id="phone-preview">' +
      '<div class="template-preview-stage ' + stageClass + '"' + stageStyle + '>' +
        '<div class="pv-kicker">MIND ISLE · ' + esc(t.en) + '</div>' +
        '<div class="pv-title">' + esc(test.title || '给自己一个温柔的提问') + '</div>' +
        '<div class="pv-sub">' + esc(test.subtitle || '在小小的选择里，看见真实的自己') + '</div>' +
        '<div class="pv-rule"></div>' +
        '<div class="pv-question"><div class="pv-q-label">QUESTION 01</div><div class="pv-q-text">' + esc(q.stem || '你的第一个问题会显示在这里。') + '</div><div class="pv-options">' + (q.options||[]).slice(0,4).map((o,i) => '<div class="pv-option"><i></i>' + esc(o.text || ('选项 ' + String.fromCharCode(65+i))) + '</div>').join('') + '</div></div>' +
      '</div>' +
    '</div>';
  }

  function templatePickerMarkup(selected) {
    return '<div class="template-picker">' + templateCatalog().map(t => '<label class="template-option"><input type="radio" name="template" value="' + t.id + '" ' + (selected===t.id?'checked':'') + '><div class="template-option-card" data-t="' + t.id + '"><span class="to-check">✓</span><span class="to-glyph">' + t.glyph + '</span><span class="to-name">' + esc(t.name) + '</span></div></label>').join('') + '</div>';
  }

  function questionEditorMarkup(q, index, draft) {
    const isCustomScoring = draft.scoringType && draft.scoringType !== 'dimension_sum';
    const isChoice = q.type !== 'essay';
    const options = q.options || [];
    return '<div class="question-editor" data-qid="' + q.id + '">' +
      '<div class="question-editor-head"><span class="question-num">' + String(index+1).padStart(2,'0') + '</span><span class="muted" style="font-size:10px">题目 ' + (index+1) + '</span><select class="select" data-field="qtype"><option value="single_choice" ' + (q.type==='single_choice'?'selected':'') + '>单选题</option><option value="multi_choice" ' + (q.type==='multi_choice'?'selected':'') + '>多选题</option><option value="judge" ' + (q.type==='judge'?'selected':'') + '>判断题</option><option value="essay" ' + (q.type==='essay'?'selected':'') + '>简答题</option></select></div>' +
      '<div class="question-editor-body"><div class="field"><label>题干</label><textarea class="textarea" data-field="stem" placeholder="写下问题内容...">' + esc(q.stem || '') + '</textarea></div>' +
        (isChoice ? '<div class="field"><label>' + (isCustomScoring?'选项':'选项与计分归属') + '</label><div class="option-list">' + options.map((o,i) => {
          const control = isCustomScoring ? '<div class="option-score-note">由测试规则自动计分</div><span></span>' : '<select class="select" data-field="odim"><option value="">不计分</option>' + draft.results.map(r => '<option value="' + r.key + '" ' + (o.dimension===r.key?'selected':'') + '>' + esc(r.title) + '</option>').join('') + '</select><button class="icon-btn" data-action="remove-option" data-qid="' + q.id + '" data-oid="' + o.id + '" title="删除选项">' + icon('x') + '</button>';
          return '<div class="option-row" data-oid="' + o.id + '"><span class="option-letter">' + String.fromCharCode(65+i) + '</span><input class="input" data-field="otext" value="' + esc(o.text || '') + '" placeholder="选项内容">' + control + '</div>';
        }).join('') + '</div><button class="btn btn-xs btn-ghost add-option" data-action="add-option" data-qid="' + q.id + '">' + icon('plus') + '添加选项</button></div>' : '<div class="field"><label>答题提示</label><input class="input" data-field="placeholder" value="请输入你的回答..." disabled></div>') +
        '<div class="field"><label>结果计算</label><input class="input" data-field="scoring" value="' + esc(isCustomScoring ? (draft.scoringNote || '由内置规则自动计算') : (q.type==='essay'?'人工评分 / 不计入自动结果':'按选项维度自动累计')) + '" disabled></div>' +
      '</div>' +
      '<div class="question-footer"><span class="muted" style="font-size:9.5px">必答题</span><div class="row"><button class="btn btn-xs btn-ghost" data-action="duplicate-question" data-qid="' + q.id + '">' + icon('copy') + '复制</button><button class="btn btn-xs btn-ghost" data-action="move-question-up" data-qid="' + q.id + '">' + icon('chevronUp') + '</button><button class="btn btn-xs btn-ghost" data-action="move-question-down" data-qid="' + q.id + '">' + icon('chevronDown') + '</button><button class="btn btn-xs btn-danger" data-action="remove-question" data-qid="' + q.id + '">' + icon('trash') + '删除</button></div></div>' +
    '</div>';
  }

  function resultEditorMarkup(r, index) {
    const imagePreview = r.image
      ? '<img src="' + esc(r.image) + '" alt="结果图片">'
      : '<span class="result-emoji-preview">' + esc(r.emoji || '✨') + '</span>';
    return '<div class="result-editor" data-rkey="' + esc(r.key) + '">' +
      '<div class="result-image-cell"><label class="result-image-upload" title="上传结果图片"><input type="file" class="sr-only" data-result-image="' + esc(r.key) + '" accept="image/*"><div class="result-image-preview">' + imagePreview + '<span class="result-image-edit">' + icon('image') + '</span></div></label><input class="input result-emoji-input" data-field="remoji" value="' + esc(r.emoji || '✨') + '" aria-label="无图片时使用的 Emoji"></div>' +
      '<input class="input" data-field="rtitle" value="' + esc(r.title || '') + '" placeholder="结果名称">' +
      '<input class="input" data-field="rtags" value="' + esc((r.tags||[]).join('，')) + '" placeholder="标签，用逗号分隔">' +
      '<button class="icon-btn" data-action="remove-result" data-rkey="' + esc(r.key) + '" title="删除结果">' + icon('x') + '</button>' +
      '<textarea class="textarea" data-field="rdesc" placeholder="结果描述">' + esc(r.desc || '') + '</textarea>' +
      (r.image ? '<button class="btn btn-xs btn-ghost result-image-remove" data-action="remove-result-image" data-rkey="' + esc(r.key) + '">' + icon('trash') + '移除结果图片</button>' : '') +
    '</div>';
  }

  function renderEditorPage(id) {
    ensureEditorDraft(id);
    const draft = state.editorDraft;
    const isNew = !data.tests.some(t => t.id === draft.id);
    const url = publicUrl(draft);
    const content = '<div class="page editor-page">' +
      '<div class="editor-head"><div class="editor-title"><button class="icon-btn" data-nav="/admin/tests" title="返回">' + icon('back') + '</button><div><h1>' + (isNew?'新建测试':'编辑测试') + '</h1><p>' + (isNew?'填写内容并选择一个结果模板':'修改后会立即影响已发布的访问链接') + '</p></div></div><div class="page-actions"><span class="save-state"><i></i>本地自动保存已开启</span><button class="btn btn-secondary" data-action="save-test" data-status="draft">保存草稿</button><button class="btn btn-primary" data-action="save-test" data-status="active">' + icon('check') + '保存并发布</button></div></div>' +
      '<form id="test-editor-form" class="editor-layout" autocomplete="off">' +
        '<div class="editor-main">' +
          '<section class="form-card"><div class="form-card-head"><div><h2>基本信息</h2><p>用户解锁后看到的测试名称与说明</p></div><span class="badge badge-plain">01</span></div><div class="form-card-body">' +
            '<div class="grid-2"><div class="field"><label>测试名称</label><input class="input" name="title" value="' + esc(draft.title) + '" placeholder="例如：你内心住着什么动物？" data-preview="title"></div><div class="field"><label>副标题</label><input class="input" name="subtitle" value="' + esc(draft.subtitle) + '" placeholder="一句话说清测试的价值" data-preview="subtitle"></div></div>' +
            '<div class="field"><label>测试简介</label><textarea class="textarea" name="description" placeholder="告诉用户这套测试能帮 Ta 看见什么">' + esc(draft.description) + '</textarea></div>' +
            '<div class="grid-3"><div class="field"><label>分类</label><select class="select" name="categoryId">' + allCategoryOptions(draft.categoryId) + '</select></div><div class="field"><label>测试封面标记</label><input class="input" name="coverEmoji" maxlength="4" value="' + esc(draft.coverEmoji) + '" placeholder="一个汉字或 Emoji"></div><div class="field"><label>发布状态</label><select class="select" name="status"><option value="draft" ' + (draft.status==='draft'?'selected':'') + '>草稿</option><option value="active" ' + (draft.status==='active'?'selected':'') + '>已上架</option><option value="inactive" ' + (draft.status==='inactive'?'selected':'') + '>已下架</option></select></div></div>' +
          '</div></section>' +
          '<section class="form-card"><div class="form-card-head"><div><h2>选择模板</h2><p>所有模板均已完成移动端适配，切换后立即生效</p></div><span class="badge badge-plain">02</span></div><div class="form-card-body">' + templatePickerMarkup(draft.template) + '<div class="field"><label>单题专属 CSS（可选）</label><textarea class="textarea" name="customCss" placeholder="仅允许 CSS 规则，例如：.test-cover-title { letter-spacing: 0.02em; }">' + esc(draft.customCss || '') + '</textarea><span class="field-hint">正式环境需过滤 script、javascript: 与外部 @import，避免注入风险。</span></div></div></section>' +
          '<section class="form-card"><div class="form-card-head"><div><h2>题目设置</h2><p>心理测试采用逐题作答，系统按选项维度累计结果</p></div><button type="button" class="btn btn-xs btn-secondary" data-action="add-question">' + icon('plus') + '添加题目</button></div><div class="form-card-body"><div class="question-list" id="question-list">' + draft.questions.map((q,i) => questionEditorMarkup(q,i,draft)).join('') + '</div><button type="button" class="add-question" data-action="add-question">' + icon('plus') + ' 添加下一道题</button></div></section>' +
          '<section class="form-card"><div class="form-card-head"><div><h2>结果设置</h2><p>' + esc(draft.scoringNote || '每个结果对应一个计分维度，最终取累计分数最高的一个') + '</p></div><button type="button" class="btn btn-xs btn-secondary" data-action="add-result">' + icon('plus') + '添加结果</button></div><div class="form-card-body"><div class="result-editor-list">' + draft.results.map(resultEditorMarkup).join('') + '</div></div></section>' +
          '<section class="form-card"><div class="form-card-head"><div><h2>访问与安全</h2><p>链接与验证码可随时重置，旧链接和旧验证码会立即失效</p></div><span class="badge badge-plain">03</span></div><div class="form-card-body">' +
            '<div class="grid-2"><div class="field"><label>访问链接 Slug</label><div class="row"><input class="input" name="slug" value="' + esc(draft.slug) + '"><button type="button" class="btn btn-secondary btn-sm" data-action="reset-slug">' + icon('refresh') + '重置</button></div><span class="field-hint">重置后旧链接立即失效，请重新分发。</span></div><div class="field"><label>默认验证码</label><div class="row"><input class="input mono" name="code" value="' + esc(draft.code) + '"><button type="button" class="btn btn-secondary btn-sm" data-action="reset-code">' + icon('refresh') + '重置</button></div><span class="field-hint">验证码仅用于演示，正式环境应由 Edge Function 校验。</span></div></div>' +
            '<div class="grid-2"><div class="field"><label>最大使用次数</label><input class="input" type="number" min="1" name="codeMax" value="' + Number(draft.codeMax||100) + '"></div><div class="field"><label>已使用次数</label><input class="input" type="number" name="codeUsed" value="' + Number(draft.codeUsed||0) + '" disabled></div></div>' +
            '<div class="advanced-row"><div><strong>允许重复作答</strong><span>同一验证码可在有效期内重复进入</span></div><label class="switch"><input type="checkbox" name="allowRetry" checked><span class="switch-slider"></span></label></div>' +
            '<div class="advanced-row"><div><strong>完成时记入统计</strong><span>记录完成率与结果分布，不保存敏感身份信息</span></div><label class="switch"><input type="checkbox" name="trackStats" checked><span class="switch-slider"></span></label></div>' +
          '</div></section>' +
        '</div>' +
        '<aside class="editor-side"><div class="preview-card"><div class="preview-card-head"><strong>实时预览</strong><span>移动端 · ' + esc(templateById(draft.template).name) + '</span></div><div class="phone-frame"><div class="phone-screen">' + previewStage(draft) + '</div></div><div class="preview-hint">' + icon('eye') + '选择模板后自动更新</div></div>' +
          '<div class="access-card"><h3>访问信息</h3><div class="access-item"><label>链接</label><code>' + esc(url) + '</code><button type="button" class="icon-btn" data-action="copy-editor-link">' + icon('copy') + '</button></div><div class="access-item"><label>验证码</label><code>' + esc(draft.code) + '</code><button type="button" class="icon-btn" data-action="copy-editor-code">' + icon('copy') + '</button></div><div class="access-item"><label>操作</label><button type="button" class="btn btn-xs btn-secondary" data-action="open-editor-preview">' + icon('external') + '打开用户端</button></div></div>' +
        '</aside>' +
      '</form>' +
    '</div>';
    return renderShell(content, '测试管理', isNew ? '新建测试' : '编辑测试');
  }

  function syncEditorFromDom() {
    const form = $('#test-editor-form');
    if (!form || !state.editorDraft) return;
    const val = name => form.querySelector('[name="' + name + '"]')?.value ?? '';
    const d = state.editorDraft;
    d.title = val('title'); d.subtitle = val('subtitle'); d.description = val('description'); d.categoryId = val('categoryId');
    d.coverEmoji = val('coverEmoji') || '心'; d.status = val('status'); d.customCss = val('customCss');
    const checkedTpl = form.querySelector('[name="template"]:checked'); if (checkedTpl) d.template = checkedTpl.value;
    d.slug = val('slug'); d.code = val('code'); d.codeMax = Math.max(1, Number(val('codeMax') || 100));
    d.questions = $$('.question-editor', form).map((el, index) => {
      const old = d.questions.find(q => q.id === el.dataset.qid) || {};
      return {
        ...old, id: el.dataset.qid, type: $('[data-field="qtype"]', el)?.value || 'single_choice',
        stem: $('[data-field="stem"]', el)?.value || '',
        analysis: old.analysis || '没有标准答案，选择更接近你第一反应的一项。',
        options: $$('.option-row', el).map((row, i) => {
          const prior = (old.options || []).find(o => o.id === row.dataset.oid) || {};
          return { ...prior, id: row.dataset.oid, text: $('[data-field="otext"]', row)?.value || '', dimension: $('[data-field="odim"]', row)?.value || '', points: 3 };
        })
      };
    });
    d.results = $$('.result-editor', form).map(el => {
      const key = el.dataset.rkey;
      const old = d.results.find(r => r.key === key) || { key, en: 'RESULT', advice: '' };
      return { ...old, key, emoji: $('[data-field="remoji"]', el)?.value || '✨', title: $('[data-field="rtitle"]', el)?.value || '未命名结果', tags: ($('[data-field="rtags"]', el)?.value || '').split(/[,，]/).map(x=>x.trim()).filter(Boolean), desc: $('[data-field="rdesc"]', el)?.value || '' };
    });
  }

  function updateEditorPreview() {
    const host = $('#phone-preview')?.parentElement;
    if (!host || !state.editorDraft) return;
    const face = $('.editor-side .preview-card-head span');
    if (face) face.textContent = '移动端 · ' + templateById(state.editorDraft.template).name;
    host.innerHTML = previewStage(state.editorDraft);
  }

  function renderCategoriesPage() {
    const content = '<div class="page"><div class="page-head"><div class="page-title-wrap"><h1>分类管理</h1><p>分类只用于后台组织与统计，不会向答题用户展示。</p></div><div class="page-actions"><button class="btn btn-primary" data-action="add-category">' + icon('plus') + '新建分类</button></div></div>' +
      '<div class="category-grid">' + data.categories.map(cat => {
        const count = data.tests.filter(t => t.categoryId === cat.id).length;
        return '<article class="category-card" style="--cat-bg:' + cat.bg + '"><div class="cat-top"><span class="category-mark">' + esc(cat.emoji) + '</span><div class="row"><button class="icon-btn" data-action="edit-category" data-id="' + cat.id + '" title="编辑">' + icon('edit') + '</button><button class="icon-btn" data-action="delete-category" data-id="' + cat.id + '" title="删除">' + icon('trash') + '</button></div></div><h3>' + esc(cat.name) + '</h3><p>' + esc(cat.desc) + '</p><div class="category-count"><span>关联测试</span><strong>' + count + '</strong></div></article>';
      }).join('') + '<button class="category-add" data-action="add-category"><span>+</span><strong>添加新分类</strong><small>让内容管理更有秩序</small></button></div>' +
      '<div class="panel" style="margin-top:18px"><div class="section-head"><h3>分类使用建议</h3><span class="muted" style="font-size:10px">后台可见</span></div><div class="panel-body" style="padding-top:0"><div class="grid-3"><div class="import-tips"><h3>按测试目的</h3><p>性格探索、情感关系、心理成长，方便快速筛选和查看不同业务的完成率。</p></div><div class="import-tips"><h3>按传播渠道</h3><p>也可建立小红书、闲鱼、社群等分类，观察不同渠道链接的访问表现。</p></div><div class="import-tips"><h3>保持精简</h3><p>建议维持 4–8 个一级分类。分类过多时，后台筛选会失去效率。</p></div></div></div></div>' +
    '</div>';
    return renderShell(content, '分类管理');
  }

  function codesRows() {
    let rows = data.codes.slice();
    const q = state.codesView.search.trim().toLowerCase();
    if (q) rows = rows.filter(c => {
      const test = data.tests.find(t => t.id === c.testId);
      return (c.code + ' ' + (test?.title || '')).toLowerCase().includes(q);
    });
    if (state.codesView.status !== 'all') rows = rows.filter(c => c.status === state.codesView.status);
    return rows;
  }

  function renderCodesPage() {
    const rows = codesRows();
    const available = data.codes.filter(c => c.status === 'active').length;
    const used = data.codes.filter(c => c.status === 'used').length;
    const revoked = data.codes.filter(c => c.status === 'revoked').length;
    const content = '<div class="page"><div class="page-head"><div class="page-title-wrap"><h1>验证码管理</h1><p>验证码是用户进入测试的唯一凭证，建议一单一码并设置合理上限。</p></div><div class="page-actions"><button class="btn btn-secondary" data-action="export-codes">' + icon('download') + '导出</button><button class="btn btn-primary" data-action="generate-code">' + icon('plus') + '生成验证码</button></div></div>' +
      '<div class="code-stats">' + [['验证码总数',data.codes.length],['当前可用',available],['使用完毕',used],['已作废',revoked]].map(x => '<div class="mini-stat"><span>' + x[0] + '</span><strong>' + x[1] + '</strong></div>').join('') + '</div>' +
      '<div class="toolbar"><div class="search-box">' + icon('search') + '<input class="input" id="code-search" placeholder="搜索验证码或测试名称" value="' + esc(state.codesView.search) + '"></div><select class="select" id="code-status-filter"><option value="all">全部状态</option><option value="active" ' + (state.codesView.status==='active'?'selected':'') + '>可用</option><option value="used" ' + (state.codesView.status==='used'?'selected':'') + '>已用完</option><option value="revoked" ' + (state.codesView.status==='revoked'?'selected':'') + '>已作废</option></select><div class="toolbar-actions"><button class="btn btn-secondary btn-sm" data-action="copy-available-codes">' + icon('copy') + '复制可用码</button></div></div>' +
      '<div class="table-wrap"><table class="data-table"><thead><tr><th>验证码</th><th>关联测试</th><th>使用进度</th><th>有效期</th><th>创建时间</th><th>状态</th><th style="text-align:right">操作</th></tr></thead><tbody>' +
        (rows.length ? rows.map(c => {
          const test = data.tests.find(t => t.id === c.testId) || { title:'测试已删除', template:'midnight', coverEmoji:'○' };
          const si = codeStatusInfo(c.status);
          return '<tr><td><button class="table-code" data-action="copy-code" data-code="' + esc(c.code) + '">' + esc(c.code) + icon('copy') + '</button></td>' +
            '<td><div class="test-cell" style="min-width:190px">' + testThumbMarkup(test, 'div', 'width:31px;height:37px;font-size:13px;') + '<div class="test-cell-copy"><strong>' + esc(test.title) + '</strong><span>/q/' + esc(test.slug || '') + '</span></div></div></td>' +
            '<td><div class="row"><div class="mini-progress" style="width:82px"><i style="width:' + Math.min(100, pct(c.used,c.max)) + '%"></i></div><span class="mono" style="font-size:9.5px">' + c.used + ' / ' + c.max + '</span></div></td>' +
            '<td>' + esc(c.expires || '永久有效') + '</td><td>' + esc(c.createdAt) + '</td><td><span class="badge ' + si[1] + '">' + si[0] + '</span></td>' +
            '<td><div class="table-actions"><button class="icon-btn" data-action="copy-code" data-code="' + esc(c.code) + '" title="复制">' + icon('copy') + '</button><button class="icon-btn" data-action="regenerate-code" data-id="' + c.id + '" title="重新生成">' + icon('refresh') + '</button><button class="icon-btn" data-action="revoke-code" data-id="' + c.id + '" title="作废">' + icon('x') + '</button></div></td></tr>';
        }).join('') : '<tr><td colspan="7"><div class="empty-state" style="padding:45px"><div class="empty-icon">' + icon('key') + '</div><h3>没有匹配的验证码</h3><p>调整筛选条件，或生成一组新的验证码。</p></div></td></tr>') +
      '</tbody></table></div>' +
    '</div>';
    return renderShell(content, '验证码');
  }

  function renderTemplatesPage() {
    const catalog = templateCatalog();
    const content = '<div class="page"><div class="page-head"><div class="page-title-wrap"><h1>模板库</h1><p>上传一张竖版图片，就能生成一套可直接使用的测试模板。</p></div><div class="page-actions"><button class="btn btn-secondary" data-action="template-help">' + icon('code') + '模板说明</button><button class="btn btn-secondary" data-action="open-public-demo">' + icon('eye') + '预览用户端</button><button class="btn btn-primary" data-action="add-template">' + icon('plus') + '添加模板</button></div></div>' +
      '<div class="template-page-grid">' + catalog.map(t => {
        const bound = data.tests.filter(x => x.template === t.id).length;
        const isDefault = data.settings.defaultTemplate === t.id;
        const isCustom = isImageTemplate(t);
        const coverTitle = t.id==='midnight'?'测一测，<br>你的内在原型':t.id==='paper'?'你骨子里，<br>住着怎样的诗意':t.id==='cute'?'你是哪一种<br>萌系人格？':t.id==='fairy'?'你是哪种<br>动物塑？':esc(t.name);
        return '<article class="template-gallery-card"><div class="template-cover ' + (isCustom?'cover-custom':'cover-' + t.id) + '" data-action="preview-template" data-id="' + t.id + '"' + templateImageStyle(t) + '><div class="cover-inner">' + (isCustom?'<span class="custom-image-badge">' + icon('image') + ' 图片模板</span>':'') + '<div class="cover-kicker">' + esc(t.en || 'CUSTOM TEMPLATE') + '</div><div class="cover-title">' + coverTitle + '</div><div class="cover-sub">' + esc(t.mood || '自定义图片模板') + '</div><div class="cover-art">' + esc(t.glyph || '✦') + '</div></div></div>' +
          '<div class="template-gallery-body"><div class="template-gallery-title"><strong>' + esc(t.name) + '</strong>' + (isDefault?'<span class="badge badge-active">默认模板</span>':'<span class="badge badge-plain">' + bound + ' 个测试正在使用</span>') + '</div><p>' + esc(t.desc || '上传图片生成的自定义模板。') + '</p><div class="template-meta"><span class="tag">' + esc(t.mood || '图片背景') + '</span><span class="tag">移动端适配</span>' + (isCustom?'<span class="tag">可删除</span>':'') + '</div><div class="template-actions"><button class="btn btn-sm btn-secondary" data-action="preview-template" data-id="' + t.id + '">' + icon('eye') + '预览</button><button class="btn btn-sm btn-ghost" data-action="set-default-template" data-id="' + t.id + '" ' + (isDefault?'disabled':'') + '>' + (isDefault?'当前默认':'设为默认') + '</button>' + (isCustom?'<button class="btn btn-sm btn-danger" data-action="delete-template" data-id="' + t.id + '" title="删除模板">' + icon('trash') + '</button>':'') + '<div class="row" style="margin-left:auto"><label class="switch-label">启用 <span class="switch"><input type="checkbox" data-template-enabled="' + t.id + '" ' + (!(data.settings.disabledTemplates||[]).includes(t.id)?'checked':'') + '><span class="switch-slider"></span></span></label></div></div></div></article>';
      }).join('') + '</div>' +
      '<div class="panel" style="margin-top:18px"><div class="section-head"><h3>图片模板建议</h3><span class="muted" style="font-size:10px">本地生成 · 自动压缩</span></div><div class="panel-body" style="padding-top:0"><div class="grid-3"><div class="import-tips"><h3>图片尺寸</h3><p>建议上传 3:4 或 9:16 的竖版图片。系统会自动压缩并保存到本地，不会上传到服务器。</p></div><div class="import-tips"><h3>文字可读性</h3><p>系统会在图片上叠加轻微深色遮罩，建议选择主体居中、留白足够的图片。</p></div><div class="import-tips"><h3>使用方式</h3><p>保存后即可在测试编辑页选择新模板。停用或删除模板时，关联测试可切回默认模板。</p></div></div></div></div>' +
    '</div>';
    return renderShell(content, '模板库');
  }

  function renderImportPage() {
    const parsed = state.importParsed;
    const htmlData = state.importHtml;
    const isHtml = !!(htmlData && htmlData.questions && htmlData.questions.length);
    const sourceLabel = isHtml ? ({js:'HTML 数据',dom:'HTML 页面结构',text:'HTML 文本'}[htmlData.meta.source] || 'HTML') : '文本';
    const content = '<div class="page"><div class="page-head"><div class="page-title-wrap"><h1>批量导入</h1><p>拖入一个测试文件夹（含 HTML 与构建脚本）即可直接生成一个测试；也可上传单个 HTML 或粘贴文本，确认后再导入。</p></div><div class="page-actions"><button class="btn btn-secondary" data-action="import-help">' + icon('code') + '格式说明</button><button class="btn btn-primary" data-action="commit-import" ' + (!parsed.length?'disabled':'') + '>' + icon('upload') + '导入 ' + (parsed.length||'') + ' 道题</button></div></div>' +
      '<div class="import-layout"><div class="stack">' +
        '<section class="form-card"><div class="form-card-head"><div><h2>上传 HTML 或粘贴文本</h2><p>HTML 会提取题目 / 结果 / 配色；文本按题号与选项拆分</p></div><span class="badge badge-plain">STEP 01</span></div><div class="form-card-body">' +
          '<label class="dropzone" id="dropzone"><input type="file" id="import-file" accept=".html,.htm,.txt,.md,.csv,text/html,text/plain" class="sr-only"><span class="dropzone-icon">' + icon('upload') + '</span><strong>拖入测试文件夹，直接生成一个测试</strong><p>整个文件夹（HTML + 构建脚本）拖进来，自动找到主 HTML 并入库；拖单个 HTML 则进入预览确认</p><button type="button" class="btn btn-sm btn-secondary">选择文件</button><small>本地解析 · 文件不会上传到任何服务器</small></label>' +
          (isHtml ? '<div class="import-tips" style="margin-bottom:14px;border-left:3px solid #3f7562"><h3>已识别 HTML 测试</h3><p>来源：' + esc(sourceLabel) + ' · ' + htmlData.meta.questionCount + ' 道题 · ' + htmlData.meta.resultCount + ' 个结果类型 · ' + (htmlData.meta.styleFound ? '已提取模板配色' : '未发现内联配色') + '<br>标题与描述已自动填入下方，确认后可导入。</p></div>' : '') +
          '<div class="field"><label>题目文本</label><textarea class="textarea" id="import-textarea" rows="9" placeholder="上传 HTML 会自动填入；或直接粘贴：&#10;1. 面对陌生聚会，你会怎么做？&#10;A. 先观察现场&#10;B. 主动找人聊天&#10;C. 找个安静角落&#10;D. 顺其自然">' + esc(state.importText) + '</textarea></div>' +
          '<div class="grid-2"><div class="field"><label>测试名称</label><input class="input" id="import-name" value="' + esc(state.importName) + '"></div><div class="field"><label>使用模板</label><select class="select" id="import-template">' + templateCatalog().map(t => '<option value="' + t.id + '" ' + (state.importTemplate===t.id?'selected':'') + '>' + esc(t.name) + '</option>').join('') + '</select></div></div>' +
          '<div class="row" style="justify-content:flex-end"><button class="btn btn-secondary" data-action="load-import-example">填入示例</button><button class="btn btn-primary" data-action="parse-import">' + icon('sparkles') + '智能拆题</button></div>' +
        '</div></section>' +
        '<section class="form-card"><div class="form-card-head"><div><h2>拆题预览</h2><p>' + (parsed.length ? '已识别 ' + parsed.length + ' 道题，请在导入前检查内容。' : '拆题结果会显示在这里') + '</p></div><span class="badge ' + (parsed.length?'badge-active':'badge-plain') + '">STEP 02</span></div><div class="form-card-body">' +
          (parsed.length ? '<div class="import-result">' + parsed.map((q,i) => '<div class="import-item"><span class="import-item-num">' + (i+1) + '</span><div class="import-item-copy"><strong>' + esc(q.stem) + '</strong><span>' + q.options.length + ' 个选项 · ' + esc(q.options.map(o=>o.text).join(' / ').slice(0,65)) + '</span></div><span class="badge ' + (q.options.length>=2?'badge-active':'badge-draft') + '">' + (q.options.length>=2?'可导入':'待确认') + '</span></div>').join('') + '</div>' : '<div class="empty-state" style="padding:40px 10px"><div class="empty-icon">' + icon('inbox') + '</div><h3>等待解析</h3><p>上传 HTML 或粘贴题目后自动拆题。</p></div>') +
        '</div></section>' +
      '</div><aside class="stack"><div class="import-tips"><h3>HTML 导入</h3><p>上传完整测试网页（.html），系统自动识别标题、描述、题目与选项、结果类型，并提取页面主色作为样式。</p><code>&lt;title&gt;测试标题&lt;/title&gt;&#10;题目 + A/B/C/D 选项&#10;&lt;style&gt;...配色...&lt;/style&gt;</code></div><div class="import-tips"><h3>文本格式</h3><p>每道题以数字编号开始，选项使用 A. / B. / C. / D. 标识。</p><code>1. 你的题干？&#10;A. 选项内容&#10;B. 选项内容</code></div><div class="import-tips"><h3>自动处理</h3><p>· 自动去除题号等噪声<br>· 自动生成结果维度<br>· 自动生成链接与验证码<br>· 导入后仍可逐题编辑<br>· 结果可在编辑器中修改</p></div></aside></div>' +
    '</div>';
    return renderShell(content, '批量导入');
  }

  function renderStatsPage() {
    const tests = data.tests.slice().sort((a,b) => b.access - a.access).slice(0,6);
    const maxAccess = Math.max(...tests.map(t=>t.access),1);
    const totalAccess = data.tests.reduce((s,t)=>s+t.access,0);
    const totalComplete = data.tests.reduce((s,t)=>s+t.completions,0);
    const content = '<div class="page"><div class="page-head"><div class="page-title-wrap"><h1>数据统计</h1><p>查看访问、完成与结果分布，了解哪一类测试真正被完成。</p></div><div class="page-actions"><div class="chart-toolbar"><button class="chart-range ' + (state.statsDays===7?'active':'') + '" data-action="stats-range" data-days="7">近 7 天</button><button class="chart-range ' + (state.statsDays===30?'active':'') + '" data-action="stats-range" data-days="30">近 30 天</button></div><button class="btn btn-secondary" data-action="export-stats">' + icon('download') + '导出报表</button></div></div>' +
      '<div class="stat-grid">' + statCard('总访问量',fmt(totalAccess),'+18.6%','较上一周期','target','#eef1f7','#6982a4') + statCard('完成作答',fmt(totalComplete),'+12.4%','整体完成率 '+pct(totalComplete,data.tests.reduce((s,t)=>s+t.starts,0))+'%','checkSquare','#f8efe7','#b17150') + statCard('平均停留','3m 42s','+8.2%','用户更愿意读完结果','clock','#edf4ef','#4c7866') + statCard('分享率','11.8%','+2.1%','结果卡片被主动分享','arrowUpRight','#f3f0e3','#987b32') + '</div>' +
      '<div class="stats-grid"><section class="panel"><div class="panel-head"><div><div class="panel-title">测试访问排行</div><div class="panel-subtitle">按累计访问量排序</div></div><span class="badge badge-info">Top ' + tests.length + '</span></div><div class="panel-body"><div class="bar-chart">' + tests.map((t,i) => '<div class="bar-col"><div class="bar-inner"><i style="height:' + Math.max(8, t.access/maxAccess*100) + '%"></i></div><span title="' + esc(t.title) + '">' + esc(t.title.replace(/[，？]/g,'').slice(0,8)) + '</span></div>').join('') + '</div></div></section>' +
        '<section class="panel"><div class="panel-head"><div><div class="panel-title">整体完成率</div><div class="panel-subtitle">打开 → 完成作答</div></div></div><div class="panel-body"><div class="donut-wrap"><div class="donut" style="background:conic-gradient(#416d5d 0 ' + pct(totalComplete,data.tests.reduce((s,t)=>s+t.starts,0)) + '%, #e4e8e1 0 100%)"><div class="donut-center"><div><strong>' + pct(totalComplete,data.tests.reduce((s,t)=>s+t.starts,0)) + '%</strong><span>完成率</span></div></div></div></div><div class="donut-legend"><span><i style="background:#416d5d"></i>完成作答</span><span><i style="background:#e4e8e1"></i>中途离开</span></div><div class="import-tips" style="margin-top:20px"><h3>洞察</h3><p>完成率最高的测试通常题量在 5–7 题，且结果页提供了可分享的标签。</p></div></div></section></div>' +
      '<section class="panel"><div class="section-head"><h3>单题数据明细</h3><span class="muted" style="font-size:10px">最近更新 ' + dateCn(today()) + '</span></div><div class="table-wrap" style="border:0;border-radius:0"><table class="data-table"><thead><tr><th>测试</th><th>访问量</th><th>开始作答</th><th>完成数</th><th>完成率</th><th>今日访问</th><th>状态</th></tr></thead><tbody>' + data.tests.slice().sort((a,b)=>b.access-a.access).map(t => '<tr><td><div class="test-cell" style="min-width:220px">' + testThumbMarkup(t) + '<div class="test-cell-copy"><strong>' + esc(t.title) + '</strong><span>' + templateById(t.template).name + ' · ' + t.questions.length + ' 题</span></div></div></td><td class="mono">' + fmt(t.access) + '</td><td class="mono">' + fmt(t.starts) + '</td><td class="mono">' + fmt(t.completions) + '</td><td><span style="color:#3f8469;font-weight:700">' + pct(t.completions,t.starts) + '%</span></td><td class="mono">' + fmt(Math.round(t.access*0.12)) + '</td><td>' + statusBadge(t.status) + '</td></tr>').join('') + '</tbody></table></div></section>' +
    '</div>';
    return renderShell(content, '数据统计');
  }

  function sanitizeCss(css) {
    return String(css || '').replace(/<\/?\s*style[^>]*>/gi, '').replace(/@import[^;]+;?/gi, '').replace(/javascript\s*:/gi, '').replace(/expression\s*\(/gi, '').slice(0, 12000);
  }

  function publicBrandLine(test) {
    return '<div class="test-brand-line"><b>心屿 MIND ISLE</b><span>' + esc(templateById(test.template).en) + '</span></div>';
  }

  const computeResult = (test, answers) => window.MindIsleScoring.computeResult(test, answers);

  function publicUnavailable(title) {
    return '<div class="public-shell"><div class="public-stage"><div class="test-canvas test-theme-paper"><div class="test-content"><div class="test-brand-line"><b>心屿 MIND ISLE</b><span>PRIVATE LINK</span></div><div class="test-cover-state"><div class="test-cover-kicker">LINK UNAVAILABLE</div><div class="test-cover-title">这套测试<br>暂时无法访问</div><p class="test-cover-subtitle">「' + esc(title || '该测试') + '」当前未上架或已停止分发，请联系发给你链接的人。</p></div></div></div></div></div>';
  }
  function publicNotfound() {
    return '<div class="public-shell"><div class="public-stage"><div class="test-canvas test-theme-paper"><div class="test-content"><div class="test-brand-line"><b>心屿 MIND ISLE</b><span>404</span></div><div class="test-cover-state"><div class="test-cover-kicker">LINK NOT FOUND</div><div class="test-cover-title">这条链接<br>已经不在了</div><p class="test-cover-subtitle">请向发给你链接的人确认地址，或联系管理员重新获取。</p><button class="test-main-button" onclick="location.hash=\'/admin/tests\'">返回管理台</button></div></div></div></div></div>';
  }

  // 多维向量匹配结果页：尽量贴近原站「历史人物报告」
  function renderVectorResult(result) {
    const vm = result._vm || {};
    const fig = vm.figure || {};
    const round = n => Math.round(n);
    const radar = (you, ta, keys) => {
      const N = keys.length, S = 300, cx = S / 2, cy = S / 2, R = 108;
      if (!N) return '';
      const pt = (i, r) => { const a = -Math.PI / 2 + i * 2 * Math.PI / N; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
      const poly = arr => keys.map((k, i) => pt(i, R * Math.max(0, Math.min(100, arr[k] || 0)) / 100).map(n => n.toFixed(1)).join(',')).join(' ');
      let grid = '';
      [0.25, 0.5, 0.75, 1].forEach(f => { grid += '<polygon points="' + keys.map((k, i) => pt(i, R * f).map(n => n.toFixed(1)).join(',')).join(' ') + '" fill="none" stroke="rgba(160,140,200,.22)" stroke-width="1"/>'; });
      keys.forEach((k, i) => { const p = pt(i, R); grid += '<line x1="' + cx + '" y1="' + cy + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) + '" stroke="rgba(160,140,200,.18)" stroke-width="1"/>'; });
      return '<svg viewBox="0 0 ' + S + ' ' + S + '" style="width:100%;max-width:300px;display:block;margin:0 auto">' + grid +
        '<polygon points="' + poly(ta) + '" fill="rgba(192,132,252,.18)" stroke="#c084fc" stroke-width="2"/>' +
        '<polygon points="' + poly(you) + '" fill="rgba(142,231,218,.18)" stroke="#8ee7da" stroke-width="2"/></svg>';
    };
    return '<div class="vm-report">' +
        '<div class="vm-hero"><div class="result-reveal">' + esc(result.emoji || '🏛') + '</div>' +
          '<div class="result-overline">你的本命历史人物</div>' +
          '<div class="result-title">' + esc(result.title) + '</div>' +
          (fig.era ? '<div class="vm-era">' + esc(fig.era) + '</div>' : '') +
          '<div class="vm-pct"><b>' + (result.pct || 0) + '</b><span>%</span><em>匹配度</em></div>' +
          ((fig.tag || []).length ? '<div class="result-tags">' + fig.tag.map(t => '<span class="result-tag">' + esc(t) + '</span>').join('') + '</div>' : '') +
        '</div>' +
        (fig.self ? '<p class="vm-self">人物自画像 · ' + esc(fig.self) + '</p>' : '') +
        (fig.slogan ? '<div class="vm-slogan"><span>可以直接发出去的一句</span><p>「' + esc(fig.slogan) + '」</p></div>' : '') +
        (fig.why ? '<div class="vm-block"><h4>为什么是你</h4><p>' + esc(fig.why) + '</p></div>' : '') +
        (fig.egg ? '<div class="vm-block vm-egg"><h4>隐藏特质与小彩蛋</h4><p>' + esc(fig.egg) + '</p></div>' : '') +
        '<div class="vm-block"><h4>八维能力结构 <small>你 · ' + esc(result.title) + '</small></h4>' +
          radar(vm.userDims || {}, fig.dims || (result.dims || {}), vm.dimKeys || []) +
          ((vm.topDims || []).length ? '<div class="vm-topdims">' + vm.topDims.map(t => '<div class="vm-topdim"><b>' + esc(t.name) + '</b><i><span style="width:' + round(t.v) + '%"></span></i><em>' + round(t.v) + '</em></div>').join('') + '</div>' : '') +
        '</div>' +
        ((vm.sixNames || []).length ? '<div class="vm-block"><h4>六维特征对比</h4><div class="vm-six">' + vm.sixNames.map(n => '<div class="vm-six-row"><span>' + esc(n) + '</span><b>' + round((vm.sixYou || {})[n]) + ' <em>/ ' + round((vm.sixTa || {})[n]) + '</em></b></div>').join('') + '</div></div>' : '') +
        ((fig.mode || []).length ? '<div class="vm-block"><h4>行为模式</h4>' + fig.mode.map((t, i) => '<div class="vm-para"><b>' + ['共同的底色', '现实表现', '当前状态'][i] + '</b><p>' + esc(t) + '</p></div>').join('') + '</div>' : '') +
        ((fig.read || []).length ? '<div class="vm-block"><h4>结果解读</h4>' + fig.read.map((t, i) => '<div class="vm-para"><b>' + (i === 0 ? '性格盲点与风险' : '给你的建议') + '</b><p>' + esc(t) + '</p></div>').join('') + '</div>' : '') +
        ((fig.lines || []).length ? '<div class="vm-quotes">' + fig.lines.map(l => '<p>「' + esc(l) + '」</p>').join('') + '</div>' : '') +
        (vm.second ? '<div class="vm-second">你的第二顺位是 <b>' + esc(vm.second.title) + '</b>（' + vm.second.pct + '%）——和它比，你更像' + esc(result.title) + '一点。</div>' : '') +
        '<div class="result-actions"><button class="test-main-button" data-action="copy-result">复制我的结果</button><button class="result-secondary" data-action="public-restart">重新探索一次</button></div>' +
      '</div>';
  }

  function renderPublicPage(test) {
    if (!test) { root.innerHTML = publicNotfound(); return; }
    const ps = state.publicState;
    if (ps.testId !== test.id || ps.entryEpoch !== navigationEpoch) {
      state.publicState = { testId:test.id, entryEpoch:navigationEpoch, stage:'locked', unlocked:false, qIndex:0, answers:{}, selected:null, codeError:'', result:null, codeId:null, advancing:false, autoAdvanceToken:0 };
    }
    const ps2 = state.publicState;
    const template = availableTemplate(test.template);
    const theme = isImageTemplate(template) ? 'test-theme-custom' : 'test-theme-' + template.id;
    const themeStyle = templateImageStyle(template);
    let content = '';
    const brand = publicBrandLine(test);
    const minutes = Math.max(3, Math.round((test.questions?.length || 0) * 0.12));

    if (ps2.stage === 'locked') {
      content = '<div class="test-content">' + brand + '<div class="test-cover-state"><div class="test-unlock"><div class="test-cover-kicker">A PRIVATE QUESTION FOR YOU</div><h2 style="margin-top:18px">' + esc(test.title || '一份只属于你的测试') + '</h2><p>这是一份私密测试。请输入购买后获得的验证码，解锁属于你的题目与结果。</p><form data-form="unlock"><input type="hidden" name="slug" value="' + esc(test.slug) + '"><input class="test-code-input" name="code" placeholder="请输入验证码" autocomplete="off" spellcheck="false" value="' + esc(ps2.lastCode || '') + '"><div class="test-code-error">' + esc(ps2.codeError || '') + '</div><button class="test-main-button" type="submit">解锁测试 ' + icon('arrowUpRight') + '</button></form></div><div class="test-cover-meta"><span>' + test.questions.length + ' 道题</span><span>约 ' + minutes + ' 分钟</span><span>仅自己可见</span></div></div></div>';
    } else if (ps2.stage === 'start') {
      content = '<div class="test-content">' + brand + '<div class="test-cover-state"><div class="test-cover-kicker">心屿 · ' + esc(template.name) + '</div><div class="test-cover-title">' + esc(test.title || '一题，看见自己') + '</div><p class="test-cover-subtitle">' + esc(test.subtitle || test.description || '在小小的选择里，看见真实的自己。') + '</p><div class="test-cover-art">' + esc(test.coverEmoji || template.glyph) + '</div><div class="test-cover-meta"><span>' + test.questions.length + ' 道题</span><span>约 ' + minutes + ' 分钟</span></div><button class="test-main-button" data-action="public-start">开始测试 ' + icon('arrowUpRight') + '</button></div></div>';
    } else if (ps2.stage === 'question') {
      const q = test.questions[ps2.qIndex] || test.questions[0];
      const isEssay = q.type === 'essay';
      const options = q.options && q.options.length ? q.options : (q.type === 'judge' ? [{id:'yes',text:'是'},{id:'no',text:'否'}] : []);
      const footer = '<div class="test-question-footer"><div class="test-footer-left"><span class="test-entertainment-note">仅作娱乐，非心理测试</span><button class="test-text-button" data-action="public-back">' + icon('chevronLeft') + '上一题</button></div>' + (isEssay ? '<button class="test-main-button test-next" data-action="public-next" ' + (!ps2.selected ? 'disabled' : '') + '>查看结果 ' + icon('chevronRight') + '</button>' : '<span class="test-auto-hint">选择后自动进入下一题</span>') + '</div>';
      content = '<div class="test-content">' + brand + '<div class="test-question-state"><div><div class="test-progress-head"><span>QUESTION ' + String(ps2.qIndex+1).padStart(2,'0') + ' / ' + String(test.questions.length).padStart(2,'0') + '</span><span>' + pct(ps2.qIndex+1,test.questions.length) + '%</span></div><div class="test-progress-track"><i style="width:' + pct(ps2.qIndex+1,test.questions.length) + '%"></i></div></div><div class="test-q-number">Q' + String(ps2.qIndex+1).padStart(2,'0') + '</div><h2 class="test-q-title">' + esc(q.stem) + '</h2>' +
        (isEssay ? '<textarea class="test-code-input" id="public-essay" rows="5" placeholder="写下你的答案..." style="height:120px;text-align:left;font-family:var(--font);letter-spacing:0;text-transform:none;resize:none">' + esc(ps2.selected || '') + '</textarea>' : '<div class="test-options">' + options.map((o,i) => '<button class="test-option ' + (ps2.selected===o.id?'selected':'') + '" data-action="public-select" data-oid="' + o.id + '"><span class="option-bubble">' + esc(o.label || String.fromCharCode(65+i)) + '</span><span>' + esc(o.text) + '</span></button>').join('') + '</div>') +
        footer + '</div></div>';
    } else if (ps2.stage === 'result') {
      const result = ps2.result || computeResult(test, ps2.answers); ps2.result = result;
      const body = result._vm ? renderVectorResult(result) : '<div class="test-result-state"><div class="result-reveal ' + (result.image?'has-image':'') + '">' + (result.image ? '<img src="' + esc(result.image) + '" alt="' + esc(result.title) + '">' : esc(result.emoji)) + '</div><div class="result-overline">YOUR INNER ARCHETYPE</div><div class="result-title">' + esc(result.title) + '</div><div class="result-en">' + esc(result.en || '') + '</div>' + (result.meta ? '<div class="result-meta">' + esc(result.meta) + '</div>' : '') + '<p class="result-desc">' + esc(result.desc) + '</p><div class="result-tags">' + (result.tags||[]).map(t => '<span class="result-tag">' + esc(t) + '</span>').join('') + '</div><div class="result-actions"><button class="test-main-button" data-action="copy-result">复制我的结果</button><button class="result-secondary" data-action="public-restart">重新探索一次</button></div></div>';
      content = '<div class="test-content">' + brand + body + '</div>';
    }
    const custom = test.customCss ? '<style>' + sanitizeCss(test.customCss) + '</style>' : '';
    const exitButton = session ? '<button class="public-exit" data-nav="/admin/tests/' + test.id + '/edit">' + icon('back') + '退出预览</button>' : '';
    root.innerHTML = custom + '<div class="public-shell"><div class="public-stage">' + exitButton + '<div class="test-canvas ' + theme + (ps2.skipAnim ? ' no-enter' : '') + '"' + themeStyle + '>' + content + '</div></div></div>';
    ps2.skipAnim = false;
  }

  function openModal(html, cls = '') {
    modalRoot.innerHTML = '<div class="modal-backdrop" data-action="modal-backdrop"><div class="modal ' + cls + '" role="dialog" aria-modal="true">' + html + '</div></div>';
    document.body.style.overflow = 'hidden';
    const first = modalRoot.querySelector('input:not([type=hidden]),textarea,select,button');
    if (first) setTimeout(() => first.focus(), 60);
  }
  function closeModal() { modalRoot.innerHTML = ''; document.body.style.overflow = ''; }
  function confirmModal(title, desc, action, id = '', confirmText = '确认') {
    openModal('<div class="modal-head"><div><h2>' + esc(title) + '</h2><p>' + esc(desc) + '</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><div class="modal-footer"><button class="btn btn-secondary" data-action="close-modal">取消</button><button class="btn btn-danger" data-action="' + action + '" data-id="' + esc(id) + '">' + esc(confirmText) + '</button></div>', 'modal-sm');
  }
  function openCommand() {
    openModal('<div class="modal-head"><div><h2>快速跳转</h2><p>搜索测试或前往常用页面</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><div class="modal-body"><div class="search-box" style="position:relative;margin-bottom:12px">' + icon('search') + '<input class="input" id="command-input" placeholder="输入测试名称..." style="padding-left:34px"></div><div class="modal-choice-list">' + data.tests.slice(0,8).map(t => '<button class="modal-choice" data-nav="/admin/tests/' + t.id + '/edit">' + testThumbMarkup(t, 'span', 'width:27px;height:32px;font-size:12px;') + '<span>' + esc(t.title) + '</span><span class="muted" style="margin-left:auto;font-size:9px">/q/' + esc(t.slug) + '</span></button>').join('') + '<button class="modal-choice" data-nav="/admin/tests/new"><span class="empty-icon" style="width:27px;height:27px;margin:0;border-radius:7px">' + icon('plus') + '</span><span>新建测试</span></button><button class="modal-choice" data-nav="/admin/templates"><span class="empty-icon" style="width:27px;height:27px;margin:0;border-radius:7px">' + icon('layout') + '</span><span>打开模板库</span></button></div></div>', 'modal-lg');
    $('#command-input')?.focus();
  }
  function openCategoryModal(id = '') {
    const cat = data.categories.find(c => c.id === id) || { id:'', name:'', emoji:'✦', bg:'#eef3ef', desc:'' };
    openModal('<div class="modal-head"><div><h2>' + (id?'编辑分类':'新建分类') + '</h2><p>分类只用于后台管理，不会向用户展示。</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><form data-form="category"><div class="modal-body"><input type="hidden" name="id" value="' + esc(cat.id) + '"><div class="grid-2"><div class="field"><label>分类名称</label><input class="input" name="name" value="' + esc(cat.name) + '" placeholder="例如：性格探索" required></div><div class="field"><label>图标</label><input class="input" name="emoji" value="' + esc(cat.emoji) + '" maxlength="4"></div></div><div class="field" style="margin-top:15px"><label>一句描述</label><input class="input" name="desc" value="' + esc(cat.desc) + '" placeholder="这个分类收纳什么内容"></div><div class="grid-2" style="margin-top:15px"><div class="field"><label>背景色</label><input class="input" type="color" name="bg" value="' + (cat.bg || '#eef3ef') + '" style="padding:5px"></div><div class="field"><label>预览</label><div class="category-mark" style="margin-top:2px;width:100%;height:40px">' + esc(cat.emoji || '✦') + ' ' + esc(cat.name || '分类名称') + '</div></div></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-action="close-modal">取消</button><button type="submit" class="btn btn-primary">保存分类</button></div></form>');
  }
  function openCodeModal() {
    openModal('<div class="modal-head"><div><h2>生成验证码</h2><p>为测试创建新的独立访问凭证。</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><form data-form="generate-code"><div class="modal-body"><div class="field"><label>关联测试</label><select class="select" name="testId">' + data.tests.map(t => '<option value="' + t.id + '">' + esc(t.title) + '</option>').join('') + '</select></div><div class="grid-2" style="margin-top:15px"><div class="field"><label>最大使用次数</label><input class="input" name="max" type="number" min="1" value="100"></div><div class="field"><label>到期日</label><input class="input" name="expires" type="date" value="2027-12-31"></div></div><div class="field" style="margin-top:15px"><label>验证码前缀</label><input class="input" name="prefix" value="MIND" maxlength="8"><span class="field-hint">系统会自动追加 6 位随机字符。</span></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-action="close-modal">取消</button><button type="submit" class="btn btn-primary">' + icon('key') + '生成</button></div></form>');
  }
  function openAddTemplateModal() {
    state.pendingTemplateImage = '';
    openModal('<div class="modal-head"><div><h2>添加图片模板</h2><p>上传一张图片，系统会自动生成可用于所有测试的新模板。</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><form data-form="add-template"><div class="modal-body"><label class="template-upload-zone" id="template-upload-zone"><input type="file" class="sr-only" data-template-image-input accept="image/*"><div class="template-upload-preview" id="template-upload-preview"><span class="upload-plus">' + icon('image') + '</span><strong>点击上传模板图片</strong><small>建议 3:4 或 9:16 竖版，小于 15MB</small></div></label><div class="grid-2" style="margin-top:15px"><div class="field"><label>模板名称</label><input class="input" name="name" id="template-name-input" placeholder="例如：海盐蓝调" required></div><div class="field"><label>风格标签</label><input class="input" name="mood" placeholder="例如：海盐蓝 · 清透 · 呼吸感"></div></div><div class="field" style="margin-top:15px"><label>模板说明</label><textarea class="textarea" name="desc" placeholder="这套模板适合什么类型的测试？">上传图片生成的自定义模板。</textarea><span class="field-hint">图片会在浏览器本地压缩并保存，不会上传到服务器。</span></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-action="close-modal">取消</button><button type="submit" class="btn btn-primary">' + icon('plus') + '创建模板</button></div></form>', 'modal-lg');
  }
  function openTemplatePreview(id) {
    const t = templateById(id);
    const sample = data.tests.find(x => x.template === id) || data.tests[0] || blankTest();
    const c = sample.coverEmoji || t.glyph;
    const previewTheme = isImageTemplate(t) ? 'test-theme-custom' : 'test-theme-' + id;
    const previewStyle = ' style="min-height:540px;max-width:340px;margin:0 auto;' + templateBackgroundCss(t) + '"';
    openModal('<div class="modal-head"><div><h2>' + esc(t.name) + '</h2><p>' + esc(t.desc) + '</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><div class="modal-body"><div class="modal-preview"><div class="test-canvas ' + previewTheme + '"' + previewStyle + '><div class="test-content" style="min-height:540px;padding:35px 28px 27px"><div class="test-brand-line"><b>心屿 MIND ISLE</b><span>' + esc(t.en) + '</span></div><div class="test-cover-state"><div class="test-cover-kicker">' + esc(t.en) + '</div><div class="test-cover-title" style="font-size:34px">' + esc(sample.title || t.name) + '</div><p class="test-cover-subtitle">' + esc(sample.subtitle || t.mood) + '</p><div class="test-cover-art" style="width:150px;height:150px;font-size:62px">' + esc(c) + '</div><button class="test-main-button">开始测试 ' + icon('arrowUpRight') + '</button></div></div></div></div></div><div class="modal-footer"><button class="btn btn-secondary" data-action="close-modal">关闭</button><button class="btn btn-primary" data-nav="/admin/templates">选择此模板</button></div>', 'modal-lg');
  }
  function openTemplateHelp() {
    openModal('<div class="modal-head"><div><h2>模板使用说明</h2><p>一个做题页面，多套视觉方案。</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><div class="modal-body"><div class="import-tips" style="margin-bottom:10px"><h3>换风格不需要重新部署</h3><p>测试绑定 template_id，后台切换后对用户端立即生效。所有题目共用同一个 /q/{slug} 页面。</p></div><div class="import-tips" style="margin-bottom:10px"><h3>单题定制样式</h3><p>可在测试编辑页追加 custom_css，仅影响当前测试。提交时必须过滤脚本、javascript: 和外部 @import。</p></div><div class="import-tips"><h3>安全提醒</h3><p>验证码校验与题目内容必须由后端返回，前端不能预加载答案。当前版本为可交互演示，生产接入 Supabase Edge Functions 后即可形成完整闭环。</p></div></div><div class="modal-footer"><button class="btn btn-primary" data-action="close-modal">知道了</button></div>');
  }
  function openImportHelp() {
    openModal('<div class="modal-head"><div><h2>导入格式说明</h2><p>系统通过题号和选项标识自动拆题。</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><div class="modal-body"><div class="import-tips"><h3>示例</h3><code>1. 面对陌生聚会，你会怎么做？\nA. 先观察现场\nB. 主动找人聊天\nC. 找个安静角落\nD. 顺其自然\n\n2. 当计划被打乱时，你会？\nA. 重新判断局势\nB. 马上切换方案</code></div><p class="field-hint" style="margin-top:12px">拆题结果会先进入预览，管理员确认后才写入数据库。每道题会生成独立 slug 与验证码。</p></div><div class="modal-footer"><button class="btn btn-primary" data-action="close-modal">知道了</button></div>');
  }

  function parseQuestionText(text) {
    const rawLines = String(text || '').replace(/\r/g,'').split('\n');
    const lines = rawLines.map(x => x.trim());
    const qStart = /^(?:\d+[.、)）]|[一二三四五六七八九十]+[、.．])\s*/;
    const optStart = /^[A-Ha-h][.、:：)）]\s*/;
    const blocks = [];
    let current = null;
    lines.forEach(line => {
      if (!line) return;
      if (qStart.test(line)) {
        if (current && current.stem) blocks.push(current);
        current = { stem: line.replace(qStart,'').trim(), options: [] };
      } else if (optStart.test(line) && current) {
        current.options.push({ id:uid('opt'), text:line.replace(optStart,'').trim(), dimension:'', points:3 });
      } else if (current) {
        if (current.options.length) {
          const last = current.options[current.options.length-1];
          last.text += ' ' + line;
        } else current.stem += ' ' + line;
      } else {
        current = { stem: line, options: [] };
      }
    });
    if (current && current.stem) blocks.push(current);
    if (!blocks.length) {
      String(text || '').split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean).forEach(chunk => {
        const parts = chunk.split('\n').map(x=>x.trim()).filter(Boolean);
        const stem = parts.shift() || '';
        const options = parts.filter(l=>optStart.test(l)).map(l=>({ id:uid('opt'), text:l.replace(optStart,'').trim(), dimension:'', points:3 }));
        if (stem) blocks.push({ stem, options });
      });
    }
    return blocks.map(b => ({ id:uid('q'), type:b.options.length?'single_choice':'essay', stem:b.stem, options:b.options.length?b.options:[{id:uid('opt'),text:'是',dimension:'',points:3},{id:uid('opt'),text:'否',dimension:'',points:3}], analysis:'没有标准答案，选择更接近你第一反应的一项。' }));
  }

  function loadImportText(text) {
    state.importText = text;
    state.importParsed = parseQuestionText(text);
  }

  function csvValue(v) { return '"' + String(v ?? '').replace(/"/g, '""') + '"'; }
  function downloadText(filename, text, mime = 'text/csv;charset=utf-8') {
    const blob = new Blob([text], { type:mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = filename; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 100);
    toast('文件已导出');
  }
  function exportTests(selectedOnly = false) {
    const list = selectedOnly ? data.tests.filter(t => state.testsView.selected.has(t.id)) : data.tests;
    if (!list.length) { toast('请先选择要导出的测试', 'error'); return; }
    const rows = [['测试名称','验证码','访问链接','状态','模板','访问量','完成数']].concat(list.map(t => [t.title,t.code,publicUrl(t),statusInfo(t.status)[0],templateById(t.template).name,t.access,t.completions]));
    downloadText('心屿测试链接_' + today() + '.csv', '\ufeff' + rows.map(r=>r.map(csvValue).join(',')).join('\n'));
  }
  function exportCodes() {
    const rows = [['验证码','关联测试','最大次数','已使用','状态','有效期','创建时间']].concat(data.codes.map(c => [c.code,data.tests.find(t=>t.id===c.testId)?.title||'已删除',c.max,c.used,codeStatusInfo(c.status)[0],c.expires||'永久',c.createdAt]));
    downloadText('心屿验证码_' + today() + '.csv', '\ufeff' + rows.map(r=>r.map(csvValue).join(',')).join('\n'));
  }

  function saveEditor(statusOverride, goBack = true) {
    syncEditorFromDom();
    const d = state.editorDraft;
    if (!d.title.trim()) { toast('请先填写测试名称', 'error'); $('[name="title"]')?.focus(); return false; }
    if (!d.questions.length) { toast('至少需要一道题', 'error'); return false; }
    if (d.questions.some(q => !q.stem.trim())) { toast('请补全所有题干内容', 'error'); return false; }
    d.status = statusOverride || d.status;
    d.updatedAt = today();
    const idx = data.tests.findIndex(t => t.id === d.id);
    if (idx >= 0) data.tests[idx] = clone(d); else data.tests.unshift(clone(d));
    const primaryCode = data.codes.find(c => c.testId === d.id);
    if (primaryCode) { primaryCode.code = d.code; primaryCode.max = d.codeMax; primaryCode.used = Number(d.codeUsed || primaryCode.used || 0); primaryCode.status = primaryCode.used >= primaryCode.max ? 'used' : 'active'; }
    else data.codes.unshift({ id:uid('code'), testId:d.id, code:d.code, max:d.codeMax, used:Number(d.codeUsed||0), status:'active', expires:'2027-12-31', createdAt:today() });
    saveData();
    toast(d.status === 'active' ? '测试已保存并发布' : '测试已保存');
    if (goBack) setTimeout(() => { location.hash = '#/admin/tests'; }, 350);
    return true;
  }

  function advancePublicQuestion() {
    const t = data.tests.find(x => x.slug === routeSlug());
    if (!t || !state.publicState.selected) return false;
    state.publicState.skipAnim = true;
    const q = t.questions[state.publicState.qIndex];
    if (!q) return false;
    state.publicState.answers[q.id] = state.publicState.selected;
    if (state.publicState.qIndex >= t.questions.length - 1) {
      state.publicState.advancing = false;
      state.publicState.result = computeResult(t, state.publicState.answers);
      state.publicState.stage = 'result';
      t.completions = Number(t.completions || 0) + 1;
      const c = data.codes.find(x => x.id === state.publicState.codeId) || data.codes.find(x => x.testId === t.id && x.code === t.code) || data.codes.find(x => x.testId === t.id && x.status === 'active');
      if (c) { c.used = Number(c.used || 0) + 1; if (c.used >= c.max) c.status = 'used'; }
      saveData();
      rerender();
      return true;
    }
    state.publicState.qIndex += 1;
    state.publicState.selected = state.publicState.answers[t.questions[state.publicState.qIndex].id] || null;
    state.publicState.advancing = false;
    rerender();
    return true;
  }

  function refreshTestsTable() {
    const host = $('#tests-table-host'); if (host) host.innerHTML = testsTableMarkup();
    const bulk = $('#bulk-host'); if (bulk) bulk.innerHTML = bulkBarMarkup();
  }
  function rerender() { render(true); }

  document.addEventListener('click', e => {
    const nav = e.target.closest('[data-nav]');
    if (nav && !nav.disabled) {
      e.preventDefault(); closeModal();
      location.hash = '#' + nav.dataset.nav;
      return;
    }
    const target = e.target.closest('[data-action]');
    if (!target) return;
    const action = target.dataset.action;
    if (action === 'modal-backdrop') { if (e.target === target) closeModal(); return; }
    e.preventDefault();
    switch (action) {
      case 'close-modal': closeModal(); break;
      case 'toggle-sidebar': $('#sidebar')?.classList.toggle('open'); break;
      case 'logout':
        session = false; localStorage.removeItem(SESSION_KEY);
        if(CLOUD&&CLOUD.ready) CLOUD.signOut().catch(()=>{});
        location.hash = '#/login'; break;
      case 'notifications': toast('暂无新的系统通知'); break;
      case 'reset-demo': closeModal(); confirmModal('重置演示数据？','所有本地修改会恢复为初始示例内容，且无法撤销。','confirm-reset-demo','','确认重置'); break;
      case 'confirm-reset-demo': data=normalizeData(mergeQuestionBank(clone(seedData))); saveData(); state.testsView={tab:'all',search:'',category:'all',template:'all',sort:'updated',selected:new Set()}; state.codesView={search:'',status:'all'}; state.editorDraft=null; state.editorId=null; state.importParsed=[]; state.importText=''; closeModal(); toast('演示数据已重置'); location.hash='#/admin'; rerender(); break;
      case 'account': openModal('<div class="modal-head"><div><h2>管理员账户</h2><p>当前为本地演示环境</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><div class="modal-body"><div class="row" style="padding:6px 0 14px"><div class="avatar" style="width:48px;height:48px;border-radius:14px;font-size:18px">屿</div><div><strong style="display:block;font-size:14px">岛屿管理员</strong><span class="muted" style="font-size:10px">mlxx4235@cc.com</span></div></div><div class="import-tips"><h3>权限</h3><p>题库 CRUD、链接与验证码管理、模板配置、数据导出。生产环境建议通过 Supabase Auth 管理账号。</p></div></div><div class="modal-footer"><button class="btn btn-secondary" data-action="close-modal">关闭</button><button class="btn btn-secondary" data-action="reset-demo">重置演示数据</button><button class="btn btn-danger" data-action="logout">退出登录</button></div>', 'modal-sm'); break;
      case 'open-command': openCommand(); break;
      case 'open-template-help': case 'template-help': openTemplateHelp(); break;
      case 'import-help': openImportHelp(); break;
      case 'dashboard-range': state.dashboardDays = Number(target.dataset.days); rerender(); break;
      case 'stats-range': state.statsDays = Number(target.dataset.days); rerender(); break;
      case 'preview-test': { const t = data.tests.find(x=>x.id===target.dataset.id); if (t) { closeModal(); location.hash = '#/q/' + t.slug; } break; }
      case 'copy-link': { const t = data.tests.find(x=>x.id===target.dataset.id); if (t) copyText(publicUrl(t),'访问链接已复制'); break; }
      case 'copy-code': copyText(target.dataset.code || '','验证码已复制'); break;
      case 'delete-test': { const t = data.tests.find(x=>x.id===target.dataset.id); if (t) confirmModal('删除这套测试？','「' + t.title + '」及其验证码将从本地数据中移除，此操作不可撤销。','confirm-delete-test',t.id,'确认删除'); break; }
      case 'confirm-delete-test': {
        data.tests = data.tests.filter(t=>t.id!==target.dataset.id); data.codes = data.codes.filter(c=>c.testId!==target.dataset.id);
        state.testsView.selected.delete(target.dataset.id); saveData(); closeModal(); toast('测试已删除'); rerender(); break;
      }
      case 'tests-tab': state.testsView.tab = target.dataset.tab; state.testsView.selected.clear(); rerender(); break;
      case 'clear-test-filters': state.testsView = { tab:'all', search:'', category:'all', template:'all', sort:'updated', selected:new Set() }; rerender(); break;
      case 'copy-all-links': exportTests(false); break;
      case 'export-tests': exportTests(false); break;
      case 'export-codes': exportCodes(); break;
      case 'export-stats': downloadText('心屿数据报表_' + today() + '.csv','\ufeff' + [['指标','数值'],['测试总数',data.tests.length],['累计访问',data.tests.reduce((s,t)=>s+t.access,0)],['完成作答',data.tests.reduce((s,t)=>s+t.completions,0)]].map(r=>r.map(csvValue).join(',')).join('\n')); break;
      case 'bulk-status': {
        const ids = state.testsView.selected; data.tests.forEach(t=>{ if(ids.has(t.id)) t.status=target.dataset.status; }); saveData(); toast('已更新 ' + ids.size + ' 个测试状态'); rerender(); break;
      }
      case 'bulk-template': {
        openModal('<div class="modal-head"><div><h2>批量切换模板</h2><p>将已选的 ' + state.testsView.selected.size + ' 个测试切换到同一视觉模板。</p></div><button class="icon-btn" data-action="close-modal">' + icon('x') + '</button></div><form data-form="bulk-template"><div class="modal-body"><div class="template-picker" style="grid-template-columns:repeat(2,1fr)">' + templateCatalog().map((t,i)=>'<label class="template-option"><input type="radio" name="bulkTemplate" value="' + t.id + '" ' + (i===0?'checked':'') + '><div class="template-option-card" data-t="' + t.id + '"><span class="to-check">✓</span><span class="to-glyph">' + t.glyph + '</span><span class="to-name">' + t.name + '</span></div></label>').join('') + '</div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-action="close-modal">取消</button><button type="submit" class="btn btn-primary">应用模板</button></div></form>');
        break;
      }
      case 'bulk-export': exportTests(true); break;
      case 'bulk-delete': if (state.testsView.selected.size) confirmModal('批量删除测试？','已选测试及其验证码会被移除，此操作不可撤销。','confirm-bulk-delete','', '确认删除'); break;
      case 'confirm-bulk-delete': { const ids=state.testsView.selected; data.tests=data.tests.filter(t=>!ids.has(t.id)); data.codes=data.codes.filter(c=>!ids.has(c.testId)); state.testsView.selected.clear(); saveData(); closeModal(); toast('已批量删除'); rerender(); break; }
      case 'add-question': {
        syncEditorFromDom(); const d=state.editorDraft; const keys=d.results.map(r=>r.key);
        d.questions.push({ id:uid('q'), type:'single_choice', stem:'', analysis:'没有标准答案，选择更接近你第一反应的一项。', options:keys.slice(0,4).map((k,i)=>({id:uid('opt'),text:'选项 ' + String.fromCharCode(65+i),dimension:k,points:3})) });
        renderEditorRoute(); break;
      }
      case 'remove-question': { syncEditorFromDom(); if(state.editorDraft.questions.length<=1){toast('至少保留一道题','error');break;} state.editorDraft.questions=state.editorDraft.questions.filter(q=>q.id!==target.dataset.qid); renderEditorRoute(); break; }
      case 'duplicate-question': { syncEditorFromDom(); const q=state.editorDraft.questions.find(x=>x.id===target.dataset.qid); if(q){ const copy=clone(q); copy.id=uid('q'); copy.options=copy.options.map(o=>({...o,id:uid('opt')})); const idx=state.editorDraft.questions.indexOf(q); state.editorDraft.questions.splice(idx+1,0,copy); renderEditorRoute(); } break; }
      case 'move-question-up': { syncEditorFromDom(); const q=state.editorDraft.questions.find(x=>x.id===target.dataset.qid); const idx=state.editorDraft.questions.indexOf(q); if(idx>0){ state.editorDraft.questions.splice(idx,1); state.editorDraft.questions.splice(idx-1,0,q); renderEditorRoute(); } break; }
      case 'move-question-down': { syncEditorFromDom(); const q=state.editorDraft.questions.find(x=>x.id===target.dataset.qid); const idx=state.editorDraft.questions.indexOf(q); if(idx>=0 && idx<state.editorDraft.questions.length-1){ state.editorDraft.questions.splice(idx,1); state.editorDraft.questions.splice(idx+1,0,q); renderEditorRoute(); } break; }
      case 'add-option': { syncEditorFromDom(); const q=state.editorDraft.questions.find(x=>x.id===target.dataset.qid); if(q){ q.options=q.options||[]; q.options.push({id:uid('opt'),text:'新选项',dimension:'',points:3}); renderEditorRoute(); } break; }
      case 'remove-option': { syncEditorFromDom(); const q=state.editorDraft.questions.find(x=>x.id===target.dataset.qid); if(q){ if(q.options.length<=2){toast('选择题至少保留两个选项','error');break;} q.options=q.options.filter(o=>o.id!==target.dataset.oid); renderEditorRoute(); } break; }
      case 'add-result': { syncEditorFromDom(); const d=state.editorDraft; d.results.push({key:uid('result'),emoji:'✨',title:'新结果',en:'NEW RESULT',desc:'写一段温柔而具体的描述。',tags:['自我探索'],advice:''}); renderEditorRoute(); break; }
      case 'remove-result': { syncEditorFromDom(); const d=state.editorDraft; if(d.results.length<=1){toast('至少保留一个结果','error');break;} d.results=d.results.filter(r=>r.key!==target.dataset.rkey); d.questions.forEach(q=>q.options.forEach(o=>{if(o.dimension===target.dataset.rkey)o.dimension='';})); renderEditorRoute(); break; }
      case 'save-test': if(saveEditor(target.dataset.status,true)) break; break;
      case 'reset-slug': { syncEditorFromDom(); state.editorDraft.slug=randomSlug(); renderEditorRoute(); toast('访问链接已重置'); break; }
      case 'reset-code': { syncEditorFromDom(); state.editorDraft.code=randomCode('MIND'); renderEditorRoute(); toast('验证码已重置'); break; }
      case 'copy-editor-link': syncEditorFromDom(); copyText(publicUrl(state.editorDraft),'访问链接已复制'); break;
      case 'copy-editor-code': syncEditorFromDom(); copyText(state.editorDraft.code,'验证码已复制'); break;
      case 'open-editor-preview': { const ok=saveEditor(state.editorDraft.status,false); if(ok) location.hash='#/q/'+state.editorDraft.slug; break; }
      case 'add-template': openAddTemplateModal(); break;
      case 'delete-template': { const t=templateById(target.dataset.id); if(t&&isImageTemplate(t)) confirmModal('删除这个图片模板？','关联测试将自动切回默认模板，已上传的模板图片也会从本地移除。','confirm-delete-template',t.id,'确认删除'); break; }
      case 'confirm-delete-template': { const id=target.dataset.id; const fallback=data.settings.defaultTemplate===id?TEMPLATES[0].id:data.settings.defaultTemplate; data.settings.customTemplates=(data.settings.customTemplates||[]).filter(t=>t.id!==id); data.tests.forEach(t=>{if(t.template===id)t.template=fallback; }); data.settings.defaultTemplate=fallback; saveData(); closeModal(); toast('图片模板已删除'); rerender(); break; }
      case 'remove-result-image': { syncEditorFromDom(); const r=state.editorDraft.results.find(x=>x.key===target.dataset.rkey); if(r){delete r.image; renderEditorRoute(); toast('已恢复使用 Emoji 图标');} break; }
      case 'add-category': openCategoryModal(); break;
      case 'edit-category': openCategoryModal(target.dataset.id); break;
      case 'delete-category': { const cat=data.categories.find(c=>c.id===target.dataset.id); const count=data.tests.filter(t=>t.categoryId===target.dataset.id).length; if(count){toast('该分类下仍有 ' + count + ' 个测试，请先移动测试','error');} else confirmModal('删除分类？','「' + (cat?.name||'') + '」将从后台移除。','confirm-delete-category',target.dataset.id,'删除'); break; }
      case 'confirm-delete-category': { data.categories=data.categories.filter(c=>c.id!==target.dataset.id); saveData(); closeModal(); toast('分类已删除'); rerender(); break; }
      case 'generate-code': openCodeModal(); break;
      case 'revoke-code': { const c=data.codes.find(x=>x.id===target.dataset.id); if(c) confirmModal('作废这个验证码？','作废后「' + c.code + '」将无法再进入测试。','confirm-revoke-code',c.id,'确认作废'); break; }
      case 'confirm-revoke-code': { const c=data.codes.find(x=>x.id===target.dataset.id); if(c)c.status='revoked'; saveData(); closeModal(); toast('验证码已作废'); rerender(); break; }
      case 'regenerate-code': { const c=data.codes.find(x=>x.id===target.dataset.id); if(c){ const prefix=(c.code.split('-')[0]||'MIND').replace(/[^A-Z]/g,'').slice(0,8)||'MIND'; c.code=randomCode(prefix); c.status='active'; c.used=0; saveData(); toast('已生成新验证码'); rerender(); } break; }
      case 'copy-available-codes': { const codes=data.codes.filter(c=>c.status==='active').map(c=>c.code).join('\n'); if(codes)copyText(codes,'可用验证码已复制'); else toast('暂无可用验证码','error'); break; }
      case 'preview-template': openTemplatePreview(target.dataset.id); break;
      case 'set-default-template': data.settings.defaultTemplate=target.dataset.id; data.settings.disabledTemplates=(data.settings.disabledTemplates||[]).filter(x=>x!==target.dataset.id); saveData(); toast('默认模板已更新'); rerender(); break;
      case 'open-public-demo': { const t=data.tests.find(x=>x.status==='active')||data.tests[0]; if(t)location.hash='#/q/'+t.slug; break; }
      case 'load-import-example': { const example='1. 面对一个全是陌生人的聚会，你会怎么做？\nA. 先观察现场的关系和气氛\nB. 主动找一个有趣的人聊天\nC. 找个安静角落待一会儿\nD. 直接加入最热闹的一桌\n\n2. 当计划突然被打乱，你的第一反应是？\nA. 先停下来重新判断局势\nB. 立刻切换方案，边走边调整\nC. 拉开距离，找最关键的一步\nD. 不喜欢被控制，干脆按自己的节奏重来\n\n3. 你希望别人记住你的哪一面？\nA. 独立、清醒、有边界感\nB. 机敏、松弛、很会读空气\nC. 温柔、可靠、让人安心\nD. 自由、有生命力、不被定义'; loadImportText(example); rerender(); break; }
      case 'parse-import': { state.importText=$('#import-textarea')?.value||''; state.importName=$('#import-name')?.value||'批量导入测试'; state.importTemplate=$('#import-template')?.value||'paper'; state.importParsed=parseQuestionText(state.importText); if(state.importParsed.length)toast('已识别 ' + state.importParsed.length + ' 道题'); else toast('没有识别到题目，请检查格式','error'); rerender(); break; }
      case 'commit-import': { commitImport(); break; }
      case 'public-start': { const t=data.tests.find(x=>x.slug===routeSlug()); if(t){t.starts=Number(t.starts||0)+1;saveData();} state.publicState.stage='question'; state.publicState.qIndex=0; state.publicState.selected=null; state.publicState.advancing=false; state.publicState.autoAdvanceToken+=1; rerender(); break; }
      case 'public-select': {
        if (state.publicState.advancing) break;
        const token = state.publicState.autoAdvanceToken + 1;
        state.publicState.autoAdvanceToken = token;
        state.publicState.selected = target.dataset.oid;
        state.publicState.advancing = true;
        // 只切换选中样式，不重建整页 DOM，避免画布入场动画重播造成闪烁
        const box = target.closest('.test-options');
        if (box) box.querySelectorAll('.test-option').forEach(b => b.classList.toggle('selected', b === target));
        window.setTimeout(() => {
          if (state.publicState.autoAdvanceToken !== token || !state.publicState.advancing || state.publicState.stage !== 'question') return;
          advancePublicQuestion();
        }, 280);
        break;
      }
      case 'public-back': { const t=data.tests.find(x=>x.slug===routeSlug()); if(!t)break; state.publicState.autoAdvanceToken+=1; state.publicState.advancing=false; state.publicState.skipAnim=true; state.publicState.qIndex=Math.max(0,state.publicState.qIndex-1); state.publicState.selected=state.publicState.answers[t.questions[state.publicState.qIndex]?.id]||null; rerender(); break; }
      case 'public-next': { if(!state.publicState.selected){toast('请先选择一个选项','error');break;} state.publicState.autoAdvanceToken+=1; advancePublicQuestion(); break; }
      case 'public-restart': { state.publicState.stage='start'; state.publicState.qIndex=0; state.publicState.answers={}; state.publicState.selected=null; state.publicState.result=null; state.publicState.advancing=false; state.publicState.autoAdvanceToken+=1; rerender(); break; }
      case 'copy-result': { const r=state.publicState.result||{}; let txt; if(r._vm){const f=r._vm.figure||{};txt=['我测出来是「'+(r.title||'')+'」，匹配度 '+(r.pct||0)+'%',f.slogan||'',f.self?('人物自画像：'+f.self):'', (data.tests.find(x=>x.id===state.publicState.testId)||{}).title||'心理测试'].filter(Boolean).join('\n');}else{txt='我的心理测试结果是「' + (r.title||'') + '」——' + (r.desc||'');} copyText(txt,'结果已复制'); break; }
      default: break;
    }
  });

  // 将当前解析结果正式入库为测试（点击"导入"按钮与拖文件夹自动入库共用）
  function commitImport() {
    if (!state.importParsed.length) { toast('请先解析题目', 'error'); return false; }
    const t = blankTest();
    const h = state.importHtml;
    if (h && h.questions && h.questions.length) {
      t.title = state.importName || h.title || '导入的测试';
      t.subtitle = h.subtitle || '从 HTML 导入的测试';
      t.description = h.description || '从完整网页导入，题目、结果与样式已自动提取，导入后仍可逐题编辑。';
      t.customCss = sanitizeCss(h.customCss || '');
      if (h.scoringType) { t.scoringType = h.scoringType; t.scoringConfig = h.scoringConfig || null; }
      t.results = (h.results && h.results.length ? h.results : t.results).map(r => ({ ...r, key: r.key || uid('r'), tags: r.tags || ['自我探索'] }));
      const keys = t.results.map(r => r.key);
      let gIdx = 0;
      t.questions = state.importParsed.map((q, qi) => ({ ...q, id: q.id || uid('q'), options: q.options.map((o, oi) => ({ ...o, dimension: keys[(gIdx++) % keys.length] || '', points: o.points || 3 })) }));
    } else {
      t.title = state.importName || '批量导入测试';
      t.subtitle = '从文档导入的心理测试';
      t.description = '这些题目由批量导入生成，导入后仍可逐题编辑。';
      t.questions = state.importParsed.map((q, qi) => ({ ...q, options: q.options.map((o, oi) => ({ ...o, dimension: t.results[oi % t.results.length].key })) }));
    }
    t.template = state.importTemplate;
    t.status = 'draft'; t.coverEmoji = '新';
    data.tests.unshift(t);
    data.codes.unshift({ id: uid('code'), testId: t.id, code: t.code, max: t.codeMax, used: 0, status: 'active', expires: '2027-12-31', createdAt: today() });
    saveData(); state.editorId = t.id; state.editorDraft = clone(t);
    state.importParsed = []; state.importText = ''; state.importHtml = null;
    toast('已导入「' + t.title + '」并生成链接与验证码');
    location.hash = '#/admin/tests';
    return true;
  }

  // 统一的文件导入处理：点击选择与拖拽都走这里；autoCommit=true 时解析后直接入库（文件夹场景）
  function ingestImportFile(f, autoCommit) {
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || '');
      const isHtml = /\.html?$/i.test(f.name) || /<html[\s>]/i.test(text.slice(0, 3000));
      if (isHtml && window.MindIsleHtmlImport) {
        try {
          const parsed = window.MindIsleHtmlImport.parse(text, f.name);
          if (!parsed.questions.length) { toast('未识别到题目，请检查 HTML 内容', 'error'); return; }
          state.importHtml = parsed;
          state.importParsed = parsed.questions;
          state.importText = parsed.questions.map((q, i) => (i + 1) + '. ' + q.stem + '\n' + q.options.map((o, j) => String.fromCharCode(65 + j) + '. ' + o.text).join('\n')).join('\n\n');
          state.importName = parsed.title;
          if (autoCommit) { commitImport(); return; }
          toast('已识别 ' + parsed.questions.length + ' 道题、' + parsed.meta.resultCount + ' 个结果类型');
        } catch (e) { toast('HTML 解析失败：' + (e && e.message || '未知错误'), 'error'); return; }
      } else {
        state.importHtml = null; loadImportText(text);
        state.importName = f.name.replace(/\.[^.]+$/, '');
        if (autoCommit) { commitImport(); return; }
        toast('文件已在本地解析');
      }
      rerender();
    };
    reader.readAsText(f, 'utf-8');
  }

  // 从 DataTransfer 中挑出要导入的文件。返回 { file, fromFolder }
  // fromFolder=true 表示来源是文件夹（拖文件夹场景），调用方据此决定解析后直接入库。
  function pickImportFile(dataTransfer) {
    if (!dataTransfer) return null;
    const files = Array.from(dataTransfer.files || []);
    const items = Array.from(dataTransfer.items || []);

    // 先判断是否有目录条目：拖入文件夹时 items 里会有 isDirectory 的 entry
    for (const it of items) {
      const entry = it.webkitGetAsEntry && it.webkitGetAsEntry();
      if (entry && entry.isDirectory) {
        return { file: findFirstHtmlEntry(entry), fromFolder: true };
      }
    }
    // 单文件场景：优先 HTML
    const html = files.find(f => /\.html?$/i.test(f.name));
    if (html) return { file: html, fromFolder: false };
    const candidates = files.filter(f => /\.(html?|txt|md|csv)$/i.test(f.name));
    if (candidates.length) return { file: candidates[0], fromFolder: false };
    return { file: files[0] || null, fromFolder: false };
  }

  // 递归读取目录条目，找到第一个 HTML 文件（跳过 _build 等构建目录）
  function findFirstHtmlEntry(entry, depth) {
    depth = depth || 0;
    if (depth > 6) return null;
    if (entry.isFile) {
      if (/\.html?$/i.test(entry.name)) {
        return new Promise(resolve => entry.file(f => resolve(f), () => resolve(null)));
      }
      return null;
    }
    if (entry.isDirectory) {
      if (/^(_|\.)/.test(entry.name)) return null;
      return new Promise(resolve => {
        const reader = entry.createReader();
        const batch = () => reader.readEntries(entries => {
          for (const e of entries) {
            if (e.isFile && /\.html?$/i.test(e.name)) { e.file(f => resolve(f), () => {}); return; }
          }
          for (const e of entries) {
            if (e.isDirectory && !/^(_|\.)/.test(e.name)) {
              const r = findFirstHtmlEntry(e, depth + 1);
              if (r) { Promise.resolve(r).then(f => { if (f) resolve(f); else batch(); }); return; }
            }
          }
          if (entries.length === 100) batch(); else resolve(null);
        }, () => resolve(null));
        batch();
      });
    }
    return null;
  }

  // 拖拽上传：dropzone 是动态渲染的，用 document 事件委托
  document.addEventListener('dragover', e => {
    const dz = e.target && e.target.closest && e.target.closest('#dropzone');
    if (!dz) return;
    e.preventDefault();
    try { e.dataTransfer.dropEffect = 'copy'; } catch (err) {}
    dz.classList.add('dragover');
  });
  document.addEventListener('dragleave', e => {
    const dz = e.target && e.target.closest && e.target.closest('#dropzone');
    if (!dz) return;
    if (e.relatedTarget && dz.contains(e.relatedTarget)) return;
    dz.classList.remove('dragover');
  });
  document.addEventListener('drop', e => {
    const dz = e.target && e.target.closest && e.target.closest('#dropzone');
    if (!dz) return;
    e.preventDefault();
    dz.classList.remove('dragover');
    const picked = pickImportFile(e.dataTransfer);
    if (!picked || !picked.file) { toast('未读取到文件，请拖入 HTML 或测试文件夹', 'error'); return; }
    const handle = f => {
      if (!f) { toast('文件夹里没有找到 HTML 文件', 'error'); return; }
      if (picked.fromFolder) toast('已读取测试文件夹，正在导入到测试管理…');
      ingestImportFile(f, picked.fromFolder);
    };
    if (picked.file && typeof picked.file.then === 'function') picked.file.then(handle);
    else handle(picked.file);
  });

  document.addEventListener('change', async e => {
    const el = e.target;
    if (el.matches('[data-template-image-input]')) {
      const file = el.files && el.files[0]; if (!file) return;
      try {
        const dataUrl = await readImageFile(file, 1200, 1600, .82);
        state.pendingTemplateImage = dataUrl;
        const preview = $('#template-upload-preview');
        if (preview) preview.innerHTML = '<img src="' + esc(dataUrl) + '" alt="模板图片预览"><span class="template-upload-edit">更换图片</span>';
        $('#template-upload-zone')?.classList.add('has-image');
        const nameInput = $('#template-name-input');
        if (nameInput && !nameInput.value.trim()) nameInput.value = file.name.replace(/\.[^.]+$/, '');
        toast('模板图片已读取并压缩');
      } catch (err) { toast(err.message || '图片处理失败', 'error'); }
      return;
    }
    if (el.matches('[data-result-image]')) {
      const file = el.files && el.files[0]; if (!file) return;
      try {
        const dataUrl = await readImageFile(file, 512, 512, .88);
        syncEditorFromDom();
        const result = state.editorDraft.results.find(r => r.key === el.dataset.resultImage);
        if (result) { result.image = dataUrl; renderEditorRoute(); toast('结果图片已更新'); }
      } catch (err) { toast(err.message || '图片处理失败', 'error'); }
      return;
    }
    if (el.matches('[data-test-select]')) {
      if (el.checked) state.testsView.selected.add(el.dataset.testSelect); else state.testsView.selected.delete(el.dataset.testSelect);
      refreshTestsTable(); return;
    }
    if (el.matches('[data-action="select-all-tests"]')) {
      const rows = filteredTests(); if (el.checked) rows.forEach(t=>state.testsView.selected.add(t.id)); else rows.forEach(t=>state.testsView.selected.delete(t.id));
      refreshTestsTable(); return;
    }
    if (el.id==='test-category-filter') { state.testsView.category=el.value; state.testsView.selected.clear(); refreshTestsTable(); return; }
    if (el.id==='test-template-filter') { state.testsView.template=el.value; state.testsView.selected.clear(); refreshTestsTable(); return; }
    if (el.id==='test-sort') { state.testsView.sort=el.value; refreshTestsTable(); return; }
    if (el.id==='code-status-filter') { state.codesView.status=el.value; rerender(); return; }
    if (el.matches('[name="template"]') && el.closest('#test-editor-form')) { syncEditorFromDom(); updateEditorPreview(); return; }
    if (el.matches('[data-field="qtype"]') && el.closest('#test-editor-form')) { syncEditorFromDom(); renderEditorRoute(); return; }
    if (el.matches('[data-template-enabled]')) { const id=el.dataset.templateEnabled; data.settings.disabledTemplates=data.settings.disabledTemplates||[]; if(!el.checked){ if(data.settings.defaultTemplate===id){ el.checked=true; toast('默认模板不能停用','error'); return; } if(!data.settings.disabledTemplates.includes(id))data.settings.disabledTemplates.push(id); toast('模板已停用'); } else { data.settings.disabledTemplates=data.settings.disabledTemplates.filter(x=>x!==id); toast('模板已启用'); } saveData(); return; }
    if (el.id==='import-template') { state.importTemplate=el.value; return; }
    if (el.id==='import-name') { state.importName=el.value; return; }
    if (el.id==='import-file') { const f=el.files?.[0]; if(f) ingestImportFile(f); return; }
  });

  document.addEventListener('input', e => {
    const el = e.target;
    if (el.id==='test-search') { state.testsView.search=el.value; state.testsView.selected.clear(); refreshTestsTable(); return; }
    if (el.id==='code-search') { const val=el.value; state.codesView.search=val; const pos=el.selectionStart; rerender(); const n=$('#code-search'); if(n){n.focus();try{n.setSelectionRange(pos,pos);}catch(err){}} return; }
    if (el.closest('#test-editor-form')) { syncEditorFromDom(); updateEditorPreview(); return; }
    if (el.id==='import-textarea') { state.importText=el.value; return; }
    if (el.id==='public-essay') { state.publicState.selected=el.value; const btn=$('[data-action="public-next"]'); if(btn)btn.disabled=!el.value.trim(); return; }
    if (el.id==='command-input') { const q=el.value.toLowerCase(); $$('.modal-choice',modalRoot).forEach(x=>{x.style.display=x.textContent.toLowerCase().includes(q)?'':'none';}); }
  });

  document.addEventListener('submit', e => {
    const form = e.target.closest('form[data-form]'); if (!form) return;
    e.preventDefault();
    const kind=form.dataset.form;
    if(kind==='login') {
      const fd=new FormData(form); const email=String(fd.get('email')||'').trim(); const pass=String(fd.get('password')||'');
      const btn=form.querySelector('[type="submit"]'); const errBox=$('#login-error');
      if(errBox) errBox.innerHTML='';
      if(btn){btn.disabled=true;btn.dataset.orig=btn.innerHTML;btn.innerHTML='正在登录…';}
      const done=(ok,msg)=>{
        if(!ok){ if(errBox)errBox.innerHTML='<div class="login-error">'+esc(msg||'邮箱或密码不正确，请重新输入。')+'</div>'; if(btn){btn.disabled=false;if(btn.dataset.orig)btn.innerHTML=btn.dataset.orig;} return; }
        session=true; localStorage.setItem(SESSION_KEY,'1');
        location.hash='#/admin'; toast('登录成功');
        if(CLOUD&&CLOUD.ready){
          CLOUD.pullState().then(remote=>{
            if(remote&&applyCloudState(remote)){ cloudPulled=true; rerender(); toast('已从云端同步数据'); }
            else { cloudPush(); }
          }).catch(()=>{ cloudPush(); });
        }
      };
      if(CLOUD&&CLOUD.ready){
        CLOUD.signIn(email,pass).then(()=>done(true)).catch(e=>done(false,e&&e.status===401?'邮箱或密码不正确，请重新输入。':('登录失败：'+(e&&e.message||'网络错误'))));
      } else {
        if(email==='mlxx4235@cc.com'&&pass==='ysyqdzgnr666') done(true); else done(false);
      }
      return;
    }
    if(kind==='add-template') {
      const fd=new FormData(form); const name=String(fd.get('name')||'').trim(); const mood=String(fd.get('mood')||'').trim(); const desc=String(fd.get('desc')||'').trim();
      if(!state.pendingTemplateImage){toast('请先上传模板图片','error');return;}
      if(!name){toast('请填写模板名称','error');return;}
      const template={id:'custom_'+Date.now().toString(36),name,en:'CUSTOM IMAGE TEMPLATE',glyph:'✦',mark:'图',mood:mood||'图片背景 · 自定义风格',desc:desc||'上传图片生成的自定义模板。',color:'#d6b36a',image:state.pendingTemplateImage,isCustom:true};
      data.settings.customTemplates=data.settings.customTemplates||[]; data.settings.customTemplates.push(template); saveData(); state.pendingTemplateImage=''; closeModal(); toast('新模板已创建，可在测试编辑页选择'); rerender(); return;
    }
    if(kind==='category') {
      const fd=new FormData(form); const id=String(fd.get('id')||''); const cat={id:id||uid('cat'),name:String(fd.get('name')||'').trim(),emoji:String(fd.get('emoji')||'✦'),bg:String(fd.get('bg')||'#eef3ef'),desc:String(fd.get('desc')||'').trim()};
      if(!cat.name){toast('请填写分类名称','error');return;}
      const idx=data.categories.findIndex(c=>c.id===id); if(idx>=0)data.categories[idx]=cat; else data.categories.push(cat);
      saveData(); closeModal(); toast('分类已保存'); rerender(); return;
    }
    if(kind==='generate-code') {
      const fd=new FormData(form); const testId=String(fd.get('testId')); const prefix=String(fd.get('prefix')||'MIND').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8)||'MIND';
      const code=randomCode(prefix); data.codes.unshift({id:uid('code'),testId,code,max:Math.max(1,Number(fd.get('max')||1)),used:0,status:'active',expires:String(fd.get('expires')||''),createdAt:today()}); saveData(); closeModal(); toast('验证码 ' + code + ' 已生成'); rerender(); return;
    }
    if(kind==='bulk-template') {
      const fd=new FormData(form); const template=String(fd.get('bulkTemplate')); const ids=state.testsView.selected; data.tests.forEach(t=>{if(ids.has(t.id))t.template=template;}); saveData(); closeModal(); toast('已切换 ' + ids.size + ' 个测试的模板'); rerender(); return;
    }
    if(kind==='unlock') {
      const fd=new FormData(form); const slug=String(fd.get('slug')); const code=String(fd.get('code')||'').trim().toUpperCase(); const test=data.tests.find(t=>t.slug===slug);
      if(!test)return; state.publicState.lastCode=code;
      const matched=data.codes.find(c=>c.testId===test.id&&c.code.toUpperCase()===code);
      const fallbackPrimary=!matched&&code===test.code.toUpperCase();
      const notExpired=!matched?.expires||String(matched.expires)>=today();
      const valid=matched?(matched.status==='active'&&Number(matched.used||0)<Number(matched.max||1)&&notExpired):fallbackPrimary;
      if(valid){
        state.publicState.stage='start'; state.publicState.codeError=''; state.publicState.codeId=matched?.id||null;
        test.access=Number(test.access||0)+1; saveData(); toast('验证成功'); rerender();
      } else { state.publicState.codeError=matched&&!notExpired?'验证码已过期，请联系管理员。':(matched&&matched.status!=='active'?'验证码已失效或使用次数已用完。':'验证码不正确，请检查后再试。'); rerender(); }
      return;
    }
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey||e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); openCommand(); }
    if (e.key==='Escape') closeModal();
  });

  function routeSlug() { return (location.hash.replace(/^#/,'').match(/^\/q\/([^/?]+)/)||[])[1]||''; }
  function renderEditorRoute() { root.innerHTML=renderEditorPage(state.editorId); }
  function render(force=false) {
    const path = location.hash.replace(/^#/,'') || '/admin';
    if(path==='/login') { root.innerHTML=renderLogin(); return; }
    if(path.startsWith('/q/')) { const slug=decodeURIComponent(routeSlug()); const test=data.tests.find(t=>t.slug===slug); if(test && test.status!=='active' && !session) { root.innerHTML=publicUnavailable(test.title); return; } renderPublicPage(test); return; }
    if(!session) { location.hash='#/login'; return; }
    if(path==='/admin'||path==='') root.innerHTML=renderDashboard();
    else if(path==='/admin/tests') root.innerHTML=renderTestsPage();
    else if(path==='/admin/tests/new') root.innerHTML=renderEditorPage('new');
    else if(/^\/admin\/tests\/[^/]+\/edit$/.test(path)) { const id=path.split('/')[3]; root.innerHTML=renderEditorPage(id); }
    else if(path==='/admin/import') root.innerHTML=renderImportPage();
    else if(path==='/admin/categories') root.innerHTML=renderCategoriesPage();
    else if(path==='/admin/codes') root.innerHTML=renderCodesPage();
    else if(path==='/admin/templates') root.innerHTML=renderTemplatesPage();
    else if(path==='/admin/stats') root.innerHTML=renderStatsPage();
    else root.innerHTML=renderDashboard();
    closeModal();
  }

  window.addEventListener('hashchange', () => { navigationEpoch += 1; render(); });
  if(!location.hash) location.hash = session ? '#/admin' : '#/login';
  else render();
  // 启动同步：已登录拉取完整数据；未登录拉取只读快照，保证分享链接在任意设备可打开
  if(CLOUD && CLOUD.ready){
    if(CLOUD.isSignedIn()) cloudPull();
    else CLOUD.pullStateAnon().then(remote=>{
      if(remote && applyCloudState(remote) && location.hash.startsWith('#/q/')) rerender();
    }).catch(()=>{});
  }
})();
