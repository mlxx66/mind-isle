/* Mind Isle scoring engine · pure client-side rules */
(function(root){
  'use strict';
  const clone = obj => JSON.parse(JSON.stringify(obj));
  function answerOption(question, answers) {
    const id = answers[question.id];
    return (question.options || []).find(o => o.id === id);
  }
  function resultByKey(test, key) { return (test.results || []).find(r => r.key === key); }
  function decorateResult(test, key, meta, extraTags = []) {
    const base = clone(resultByKey(test, key) || (test.results || [])[0] || { key:'default', emoji:'✨', title:'独特的你', en:'UNIQUE YOU', desc:'你正在成为更完整的自己。', tags:['自我探索'] });
    base.meta = meta || '';
    base.tags = Array.from(new Set([...(base.tags || []), ...extraTags.filter(Boolean)]));
    return base;
  }
  function computeResult(test, answers) {
    const mode = test.scoringType || 'dimension_sum';
    if (mode === 'nine_types') {
      const scores = {};
      test.questions.forEach(q => { const o = answerOption(q, answers); if (o && Number(o.value) === 1 && q.dimension) scores[q.dimension] = (scores[q.dimension] || 0) + 1; });
      const ranked = test.results.map(r => ({ r, score:scores[r.key] || 0 })).sort((a,b)=>b.score-a.score);
      const top = ranked[0], second = ranked[1];
      if (!top || top.score === 0) return {key:'none',emoji:'🫧',title:'尚未形成主导型',en:'NO DOMINANT TYPE',desc:'你几乎没有勾选“基本符合”的描述。可能是当前状态与题目贴合度不高，也可能你更习惯在不同情境里切换。建议间隔一段时间后按真实状态重测。',tags:['自我探索','情境性'],meta:'命中 0 条'};
      const result = clone(top.r);
      if (second && top.score - second.score <= 2) {
        const short = name => name.replace(/^[一二三四五六七八九]号\s*/, '');
        result.title = short(top.r.title) + ' × ' + short(second.r.title);
        result.meta = '主导命中 ' + top.score + ' 条 · 并存命中 ' + second.score + ' 条';
        result.desc = top.r.desc + ' 与你并存的另一型是' + short(second.r.title) + '。' + second.r.desc;
        result.tags = Array.from(new Set([...(result.tags||[]), ...(second.r.tags||[]), '双型并存']));
      } else result.meta = '主导命中 ' + top.score + ' 条 · 次高 ' + (second?.score || 0) + ' 条';
      return result;
    }
    if (mode === 'aas') {
      const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
      const scores = {};
      test.questions.forEach(q => {
        const num = Number((q.id.match(/aas_q(\d+)/)||[])[1]);
        const o = answerOption(q, answers); const raw = Number(o?.value || 3);
        scores[num] = q.reverse ? 6 - raw : raw;
      });
      const avg = arr => arr.reduce((s,n)=>s+(scores[n]||3),0)/arr.length;
      const close = avg([1,6,8,12,13,17]);
      const depend = avg([2,5,7,14,16,18]);
      const anxiety = avg([3,4,9,10,11,15]);
      const cd = (close * 6 + depend * 6) / 12;
      let key = 'fearful';
      if (cd >= 3 && anxiety < 3) key = 'secure';
      else if (cd >= 3 && anxiety >= 3) key = 'anxious';
      else if (cd < 3 && anxiety < 3) key = 'avoidant';
      const boundary = Math.abs(cd - 3) < 0.001 || Math.abs(anxiety - 3) < 0.001;
      const result = decorateResult(test,key,'亲近 ' + close.toFixed(1) + ' · 依赖 ' + depend.toFixed(1) + ' · 焦虑 ' + anxiety.toFixed(1) + (boundary ? ' · 边界值，请按近两周主感受复核' : ''));
      if (boundary) result.tags = Array.from(new Set([...(result.tags || []), '边界复核']));
      return result;
    }
    if (mode === 'hsps') {
      const vals = test.questions.map(q => Number(answerOption(q,answers)?.value || 4));
      const avg = vals.reduce((s,n)=>s+n,0) / vals.length;
      const highCount = vals.filter(v=>v>=5).length;
      return decorateResult(test, avg >= 4.5 ? 'high' : (avg >= 3.5 ? 'medium' : 'low'), '平均分 ' + avg.toFixed(2) + ' · 5 分以上 ' + highCount + ' 题');
    }
    if (mode === 'seven_sins') {
      const counts = {};
      test.questions.forEach(q => { const o=answerOption(q,answers); if(o?.dimension) counts[o.dimension]=(counts[o.dimension]||0)+1; });
      const denom = test.scoringConfig?.denominators || {};
      const ranked = test.results.map(r=>({r,pct:(counts[r.key]||0)/(denom[r.key]||1)*100,count:counts[r.key]||0})).sort((a,b)=>b.pct-a.pct);
      const top=ranked[0], second=ranked[1];
      const base=clone(top.r);
      if(second && top.pct-second.pct<5){ base.title=top.r.title+' × '+second.r.title; base.desc=top.r.desc+' 另一个并列主导是'+second.r.title+'。'+second.r.desc; base.tags=Array.from(new Set([...(base.tags||[]),...(second.r.tags||[]),'双主导'])); }
      base.meta='主导 ' + top.pct.toFixed(1) + '% · 副导 ' + second.pct.toFixed(1) + '%';
      return base;
    }
    if (mode === 'mbti') {
      const counts={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
      test.questions.forEach(q=>{const o=answerOption(q,answers);if(o?.dimension)counts[o.dimension]=(counts[o.dimension]||0)+1;});
      const pick=(a,b)=>counts[a]>=counts[b]?a:b;
      const code=pick('E','I')+pick('S','N')+pick('T','F')+pick('J','P');
      return decorateResult(test,code,code+' · E'+counts.E+'/I'+counts.I+' · S'+counts.S+'/N'+counts.N+' · T'+counts.T+'/F'+counts.F+' · J'+counts.J+'/P'+counts.P);
    }
    if (mode === 'binary_pref' || mode === 'social_persona') {
      const counts={E:0,I:0,F:0,T:0};
      test.questions.forEach(q=>{const o=answerOption(q,answers);if(o?.dimension)counts[o.dimension]=(counts[o.dimension]||0)+1;});
      if(mode==='binary_pref'){const k=counts.E>=counts.I?'E':'I';return decorateResult(test,k,'E '+counts.E+' 票 · I '+counts.I+' 票');}
      const key=(counts.E>=counts.I?'E':'I')+(counts.F>=counts.T?'F':'T');
      return decorateResult(test,key,'E '+counts.E+' / I '+counts.I+' · F '+counts.F+' / T '+counts.T);
    }
    if (mode === 'ras') {
      let total=0;
      test.questions.forEach(q=>{const raw=Number(answerOption(q,answers)?.value||3);total+=q.reverse?6-raw:raw;});
      const key=total<=14?'low':(total<=21?'medium':'high');
      return decorateResult(test,key,'RAS 总分 '+total+' / 35');
    }
    if (mode === 'loneliness') {
      let max=0;
      test.questions.forEach(q=>{const o=answerOption(q,answers);if(o&&Number(o.value)===1&&q.level)max=Math.max(max,q.level);});
      if(!max)return {key:'none',emoji:'🌱',title:'还没进入清单',en:'NOT YET',desc:'这份清单里的十件事，你目前还没有一个人做过。它不说明你不够独立，只说明你还在熟悉“有人陪伴”的生活节奏。可以在准备好时，选一件低门槛的小事试着独自完成。',tags:['第 0 级','陪伴','准备中'],meta:'最高等级 0 / 10'};
      const key=max<=3?'light':(max<=6?'medium':(max<=8?'high':'very_high'));
      return decorateResult(test,key,'最高完成等级 '+max+' / 10');
    }
    if (mode === 'hogwarts') {
      const counts={gryffindor:0,ravenclaw:0,hufflepuff:0,slytherin:0,power:0,craft:0,heart:0,mind:0};
      test.questions.forEach(q=>{const o=answerOption(q,answers);if(o?.dimension)counts[o.dimension]=(counts[o.dimension]||0)+1;});
      const houses=['gryffindor','ravenclaw','hufflepuff','slytherin'];
      const house=houses.reduce((a,b)=>counts[a]>=counts[b]?a:b);
      const wand=counts.power>=counts.craft?'power':'craft';
      const role=counts.heart>=counts.mind?'heart':'mind';
      const wandName=wand==='power'?'力量型 · 橡木与龙心弦':'技巧型 · 榛木与凤凰尾羽';
      const roleName=role==='heart'?'守护者':'谋略者';
      const wandShort=wand==='power'?'橡木':'榛木';
      const r=decorateResult(test,house,'学院 '+counts[house]+'/20 · 魔杖 '+counts[wand]+'/20 · 角色 '+counts[role]+'/20',[wandName.split(' · ')[0],roleName]);
      r.title=r.title+' · '+wandShort+' · '+roleName;
      r.desc=r.desc+' 你的魔杖偏向'+wandName+'，在角色原型上更接近'+roleName+'。';
      return r;
    }
    if (mode === 'perfectionism' || mode === 'rpi') {
      const vals=test.questions.map(q=>Number(answerOption(q,answers)?.value||1));
      const avg=vals.reduce((a,b)=>a+b,0)/Math.max(1,vals.length);
      const max=mode==='rpi'?4:5;
      const key=avg>=max*.72?'high':(avg>=max*.48?'mid':'low');
      let meta='平均分 '+avg.toFixed(2)+' / '+max;
      if(mode==='rpi'){
        const f={};
        test.questions.forEach(q=>{const o=answerOption(q,answers);if(o?.dimension)f[o.dimension]=(f[o.dimension]||0)+Number(o.value||1);});
        meta+=' · '+['JE','AX','DE','AV'].map(k=>k+' '+((f[k]||0)/10).toFixed(1)).join(' / ');
      }
      return decorateResult(test,key,meta);
    }
    if (mode === 'psychic') {
      const score=test.questions.reduce((s,q)=>s+Number(answerOption(q,answers)?.value||0),0);
      const key=score>=21?'high':(score>=11?'mid':'low');
      return decorateResult(test,key,'超感倾向 '+score+' / '+test.questions.length);
    }
    if (mode === 'soul_animal') {
      const counts={};
      test.questions.forEach(q=>{const o=answerOption(q,answers);if(o?.dimension)counts[o.dimension]=(counts[o.dimension]||0)+1;});
      const ranked=test.results.map(r=>({r,score:counts[r.key]||0})).sort((a,b)=>b.score-a.score);
      if(!ranked.length||!ranked[0].score)return decorateResult(test,'cat','尚未形成主导动物',[]);
      const r=clone(ranked[0].r);
      const second=ranked[1];
      r.meta='主导 '+ranked[0].score+' / '+test.questions.length+(second?' · 副导 '+second.r.title+' '+second.score:'');
      if(second&&ranked[0].score-second.score<=2){r.title=ranked[0].r.title+' × '+second.r.title;r.desc=ranked[0].r.desc+' 你身上也带着'+second.r.title+'的影子。';}
      return r;
    }
    const scores = {};
    (test.questions || []).forEach(q => {
      const opt = answerOption(q, answers);
      if (opt && opt.dimension) scores[opt.dimension] = (scores[opt.dimension] || 0) + Number(opt.points || opt.value || 3);
    });
    let best = test.results?.[0] || { key:'default', emoji:'✨', title:'独特的你', en:'UNIQUE YOU', desc:'你正在成为更完整的自己。', tags:['自我探索'], advice:'' };
    let bestScore = -1;
    (test.results || []).forEach(r => { if ((scores[r.key]||0) > bestScore) { best = r; bestScore = scores[r.key]||0; } });
    return clone(best);
  }

  
  root.MindIsleScoring = { computeResult };
  if (typeof module !== 'undefined' && module.exports) module.exports = { computeResult };
})(typeof window !== 'undefined' ? window : globalThis);
