/* 外部站点题库导入 · 2026-11-18 · senxince.com / licece.com */
(function () {
  var bank = window.MIND_ISLE_BANK || (window.MIND_ISLE_BANK = { version: 1, tests: [], codes: [] });
  bank.tests = bank.tests || [];
  bank.codes = bank.codes || [];
  var imported = {
  "tests": [
    {
      "id": "web_hogwarts",
      "title": "霍格沃茨综合测试",
      "subtitle": "60 题 · 一次测出学院、魔杖与角色",
      "description": "来自 senxince.com 的魔法主题综合测试。三部分共 60 题，分别判断你的霍格沃茨学院、专属魔杖与角色原型。仅作娱乐，非心理测试。",
      "categoryId": "cat_fun",
      "template": "hogwarts",
      "status": "active",
      "featured": true,
      "slug": "q_hogwarts_65",
      "code": "WIZARD-65",
      "codeMax": 999,
      "codeUsed": 0,
      "createdAt": "2026-11-18",
      "updatedAt": "2026-11-18",
      "access": 0,
      "completions": 0,
      "starts": 0,
      "coverEmoji": "⚡",
      "scoringType": "hogwarts",
      "scoringNote": "第一部分判学院，第二部分判魔杖（力量/技巧），第三部分判角色（守护/谋略）。",
      "sourceUrl": "https://www.senxince.com/exam/65.html",
      "questions": [
        {
          "id": "hw_q1",
          "type": "single_choice",
          "stem": "深夜禁林传来奇怪的声响，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q1_o1",
              "text": "独自前去探查究竟",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q1_o2",
              "text": "先告诉教授再做打算",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q2",
          "type": "single_choice",
          "stem": "你更渴望拥有？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q2_o1",
              "text": "直面一切的勇气",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q2_o2",
              "text": "洞察人心的智慧",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q3",
          "type": "single_choice",
          "stem": "朋友被冤枉，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q3_o1",
              "text": "当场站出来辩护",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q3_o2",
              "text": "收集证据帮他洗清",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q4",
          "type": "single_choice",
          "stem": "你更欣赏哪种人？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q4_o1",
              "text": "不畏强权的反抗者",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q4_o2",
              "text": "运筹帷幄的谋略家",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q5",
          "type": "single_choice",
          "stem": "面对规则，你倾向？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q5_o1",
              "text": "规则可以为正义打破",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q5_o2",
              "text": "规则是秩序的基石",
              "value": 1,
              "label": "B",
              "dimension": "hufflepuff"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q6",
          "type": "single_choice",
          "stem": "你更看重？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q6_o1",
              "text": "当下的感受与正义",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q6_o2",
              "text": "长远的目标与成就",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q7",
          "type": "single_choice",
          "stem": "学习新知识，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q7_o1",
              "text": "边实践边摸索",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q7_o2",
              "text": "先读完所有相关书籍",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q8",
          "type": "single_choice",
          "stem": "团队任务中，你希望？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q8_o1",
              "text": "冲在最前面执行",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q8_o2",
              "text": "制定方案指挥全局",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q9",
          "type": "single_choice",
          "stem": "你认为成功更多靠？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q9_o1",
              "text": "胆识与行动力",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q9_o2",
              "text": "人脉与资源",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q10",
          "type": "single_choice",
          "stem": "别人评价你时，常说你？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q10_o1",
              "text": "讲义气、够朋友",
              "value": 1,
              "label": "A",
              "dimension": "hufflepuff"
            },
            {
              "id": "hw_q10_o2",
              "text": "聪明、有想法",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q11",
          "type": "single_choice",
          "stem": "面对强敌，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q11_o1",
              "text": "哪怕打不过也要亮剑",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q11_o2",
              "text": "智取而非力敌",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q12",
          "type": "single_choice",
          "stem": "你更愿意花时间？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q12_o1",
              "text": "和朋友在一起",
              "value": 1,
              "label": "A",
              "dimension": "hufflepuff"
            },
            {
              "id": "hw_q12_o2",
              "text": "独处思考与阅读",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q13",
          "type": "single_choice",
          "stem": "做错事被发现，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q13_o1",
              "text": "坦白承认，承担后果",
              "value": 1,
              "label": "A",
              "dimension": "hufflepuff"
            },
            {
              "id": "hw_q13_o2",
              "text": "想办法化解危机",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q14",
          "type": "single_choice",
          "stem": "你更相信？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q14_o1",
              "text": "真心与善意",
              "value": 1,
              "label": "A",
              "dimension": "hufflepuff"
            },
            {
              "id": "hw_q14_o2",
              "text": "实力与地位",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q15",
          "type": "single_choice",
          "stem": "选择选修课，你会选？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q15_o1",
              "text": "战斗类、实践类",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q15_o2",
              "text": "理论类、研究类",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q16",
          "type": "single_choice",
          "stem": "你对财富的态度？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q16_o1",
              "text": "够用就行，开心最重要",
              "value": 1,
              "label": "A",
              "dimension": "hufflepuff"
            },
            {
              "id": "hw_q16_o2",
              "text": "财富是实现野心的工具",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q17",
          "type": "single_choice",
          "stem": "紧急情况下，你靠什么决策？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q17_o1",
              "text": "直觉与本能",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q17_o2",
              "text": "冷静分析与推理",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q18",
          "type": "single_choice",
          "stem": "你更害怕？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q18_o1",
              "text": "被人认为懦弱",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q18_o2",
              "text": "被人超越与轻视",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q19",
          "type": "single_choice",
          "stem": "对待承诺，你？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q19_o1",
              "text": "一诺千金，绝不食言",
              "value": 1,
              "label": "A",
              "dimension": "hufflepuff"
            },
            {
              "id": "hw_q19_o2",
              "text": "视情况灵活调整",
              "value": 1,
              "label": "B",
              "dimension": "slytherin"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q20",
          "type": "single_choice",
          "stem": "如果可以选择，你希望成为？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q20_o1",
              "text": "受人尊敬的英雄",
              "value": 1,
              "label": "A",
              "dimension": "gryffindor"
            },
            {
              "id": "hw_q20_o2",
              "text": "影响世界的智者",
              "value": 1,
              "label": "B",
              "dimension": "ravenclaw"
            }
          ],
          "basis": "第 1 部分 · 分院测试"
        },
        {
          "id": "hw_q21",
          "type": "single_choice",
          "stem": "你更欣赏哪种施法风格？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q21_o1",
              "text": "气势磅礴，一击制胜",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q21_o2",
              "text": "行云流水，变幻莫测",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q22",
          "type": "single_choice",
          "stem": "面对复杂咒语，你倾向？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q22_o1",
              "text": "用强大魔力强行驱动",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q22_o2",
              "text": "用技巧巧妙绕过难点",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q23",
          "type": "single_choice",
          "stem": "你认为魔杖最重要的是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q23_o1",
              "text": "输出的威力",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q23_o2",
              "text": "操控的精准度",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q24",
          "type": "single_choice",
          "stem": "战斗中，你更喜欢？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q24_o1",
              "text": "正面硬刚，压制对手",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q24_o2",
              "text": "灵活走位，寻找破绽",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q25",
          "type": "single_choice",
          "stem": "你做事的风格是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q25_o1",
              "text": "稳扎稳打，步步为营",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q25_o2",
              "text": "随机应变，见招拆招",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q26",
          "type": "single_choice",
          "stem": "你更认同？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q26_o1",
              "text": "力量是解决问题的根本",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q26_o2",
              "text": "智慧比力量更重要",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q27",
          "type": "single_choice",
          "stem": "学习新技能，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q27_o1",
              "text": "反复练习直到完全掌握",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q27_o2",
              "text": "快速上手后自由发挥",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q28",
          "type": "single_choice",
          "stem": "你更喜欢的环境是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q28_o1",
              "text": "稳定、可预测的环境",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q28_o2",
              "text": "充满变化与未知的环境",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q29",
          "type": "single_choice",
          "stem": "面对压力，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q29_o1",
              "text": "沉住气，按部就班",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q29_o2",
              "text": "激发潜能，超水平发挥",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q30",
          "type": "single_choice",
          "stem": "你认为自己是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q30_o1",
              "text": "力量型选手",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q30_o2",
              "text": "技巧型选手",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q31",
          "type": "single_choice",
          "stem": "你更看重魔杖的？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q31_o1",
              "text": "材质稀有，魔力强大",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q31_o2",
              "text": "手感舒适，易于操控",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q32",
          "type": "single_choice",
          "stem": "遇到难题，你倾向？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q32_o1",
              "text": "用最直接的方式解决",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q32_o2",
              "text": "尝试各种创新的方法",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q33",
          "type": "single_choice",
          "stem": "你对传统的态度？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q33_o1",
              "text": "尊重传统，遵循经典",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q33_o2",
              "text": "敢于突破，开创新路",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q34",
          "type": "single_choice",
          "stem": "你更欣赏？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q34_o1",
              "text": "厚积薄发的沉稳",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q34_o2",
              "text": "灵光乍现的天赋",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q35",
          "type": "single_choice",
          "stem": "团队中你更像？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q35_o1",
              "text": "坚不可摧的后盾",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q35_o2",
              "text": "出其不意的奇兵",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q36",
          "type": "single_choice",
          "stem": "你认为强大的魔力来自？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q36_o1",
              "text": "深厚的积累与修炼",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q36_o2",
              "text": "强烈的意志与情感",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q37",
          "type": "single_choice",
          "stem": "你更喜欢的运动是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q37_o1",
              "text": "力量对抗型",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q37_o2",
              "text": "技巧灵活型",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q38",
          "type": "single_choice",
          "stem": "面对失败，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q38_o1",
              "text": "总结经验，稳步改进",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q38_o2",
              "text": "换个思路，重新尝试",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q39",
          "type": "single_choice",
          "stem": "你认为自己的优势是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q39_o1",
              "text": "意志坚定，不可动摇",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q39_o2",
              "text": "思维活跃，足智多谋",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q40",
          "type": "single_choice",
          "stem": "如果魔杖有性格，你希望它？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q40_o1",
              "text": "霸气外露，力量惊人",
              "value": 1,
              "label": "A",
              "dimension": "power"
            },
            {
              "id": "hw_q40_o2",
              "text": "灵动飘逸，变化无穷",
              "value": 1,
              "label": "B",
              "dimension": "craft"
            }
          ],
          "basis": "第 2 部分 · 魔杖测试"
        },
        {
          "id": "hw_q41",
          "type": "single_choice",
          "stem": "面对命运的不公，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q41_o1",
              "text": "奋起反抗，绝不低头",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q41_o2",
              "text": "隐忍等待时机成熟",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q42",
          "type": "single_choice",
          "stem": "你更看重？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q42_o1",
              "text": "友情与爱",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q42_o2",
              "text": "真理与正义",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q43",
          "type": "single_choice",
          "stem": "你认为自己最大的优点是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q43_o1",
              "text": "勇敢无畏",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q43_o2",
              "text": "聪明过人",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q44",
          "type": "single_choice",
          "stem": "对待敌人，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q44_o1",
              "text": "光明正大地对决",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q44_o2",
              "text": "用计谋智取",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q45",
          "type": "single_choice",
          "stem": "你更像哪种人？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q45_o1",
              "text": "热血冲动的行动派",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q45_o2",
              "text": "冷静理性的思考者",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q46",
          "type": "single_choice",
          "stem": "面对所爱之人的危险，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q46_o1",
              "text": "不惜一切代价保护",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q46_o2",
              "text": "冷静寻找最佳救援方案",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q47",
          "type": "single_choice",
          "stem": "你对权力的态度？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q47_o1",
              "text": "权力是责任，不是目的",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q47_o2",
              "text": "权力是实现理想的工具",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q48",
          "type": "single_choice",
          "stem": "你更害怕？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q48_o1",
              "text": "失去所爱之人",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q48_o2",
              "text": "被人误解与孤立",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q49",
          "type": "single_choice",
          "stem": "你认为英雄应该？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q49_o1",
              "text": "挺身而出，保护弱者",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q49_o2",
              "text": "牺牲自我，成就大义",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q50",
          "type": "single_choice",
          "stem": "你更欣赏哪种智慧？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q50_o1",
              "text": "书本上学到的知识",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q50_o2",
              "text": "生活中磨练出的阅历",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q51",
          "type": "single_choice",
          "stem": "面对选择，你倾向？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q51_o1",
              "text": "跟随内心的声音",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q51_o2",
              "text": "理性权衡利弊",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q52",
          "type": "single_choice",
          "stem": "你对死亡的看法？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q52_o1",
              "text": "是另一场伟大的冒险",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q52_o2",
              "text": "是需要敬畏的终结",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q53",
          "type": "single_choice",
          "stem": "你更愿意成为？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q53_o1",
              "text": "聚光灯下的领袖",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q53_o2",
              "text": "幕后默默付出的人",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q54",
          "type": "single_choice",
          "stem": "你认为真正的强大是？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q54_o1",
              "text": "有能力保护所爱之人",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q54_o2",
              "text": "有勇气面对真实的自己",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q55",
          "type": "single_choice",
          "stem": "面对误解，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q55_o1",
              "text": "急于解释证明自己",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q55_o2",
              "text": "时间会证明一切",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q56",
          "type": "single_choice",
          "stem": "你更看重？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q56_o1",
              "text": "当下的幸福与快乐",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q56_o2",
              "text": "长远的使命与目标",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q57",
          "type": "single_choice",
          "stem": "你认为自己？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q57_o1",
              "text": "情感丰富，容易共情",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q57_o2",
              "text": "理性克制，深藏不露",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q58",
          "type": "single_choice",
          "stem": "面对背叛，你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q58_o1",
              "text": "愤怒地当面质问",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q58_o2",
              "text": "默默远离，不再信任",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q59",
          "type": "single_choice",
          "stem": "你更相信？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q59_o1",
              "text": "爱能战胜一切",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q59_o2",
              "text": "知识就是力量",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        },
        {
          "id": "hw_q60",
          "type": "single_choice",
          "stem": "如果用一个词形容自己，你选？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "hw_q60_o1",
              "text": "勇敢",
              "value": 1,
              "label": "A",
              "dimension": "heart"
            },
            {
              "id": "hw_q60_o2",
              "text": "坚定",
              "value": 1,
              "label": "B",
              "dimension": "mind"
            }
          ],
          "basis": "第 3 部分 · 角色测试"
        }
      ],
      "results": [
        {
          "key": "gryffindor",
          "emoji": "🦁",
          "title": "格兰芬多",
          "en": "GRYFFINDOR",
          "desc": "你身上最鲜明的是勇气与行动力。你愿意为相信的事站出来，比起完美的结果，更在意是否忠于自己的判断。",
          "tags": "勇气",
          "advice": "把勇气留给真正重要的时刻，也需要耐心听完不同的声音。"
        },
        {
          "key": "ravenclaw",
          "emoji": "🦅",
          "title": "拉文克劳",
          "en": "RAVENCLAW",
          "desc": "你习惯先看清全貌再出手。知识、洞察与独立的判断是你的底色，你总能在复杂信息里找到那条最清晰的线。",
          "tags": "智慧",
          "advice": "别让思考变成停顿，偶尔先迈出一步，答案会在路上出现。"
        },
        {
          "key": "hufflepuff",
          "emoji": "🦡",
          "title": "赫奇帕奇",
          "en": "HUFFLEPUFF",
          "desc": "你重视关系里的真诚与耐心。你不一定最爱站在聚光灯下，却往往是那个让团队稳稳落地的人。",
          "tags": "忠诚",
          "advice": "温柔不等于没有边界，记得也把自己的需求放在清单上。"
        },
        {
          "key": "slytherin",
          "emoji": "🐍",
          "title": "斯莱特林",
          "en": "SLYTHERIN",
          "desc": "你有清晰的目标感和资源意识。你擅长在规则里找到通路，也愿意为想要的结果承担相应的代价。",
          "tags": "野心",
          "advice": "野心走得远，也需要可以信任的同路人一起分享风景。"
        }
      ]
    },
    {
      "id": "web_perfectionism",
      "title": "完美主义倾向量表",
      "subtitle": "20 题，看见你对“完美”的依赖程度",
      "description": "来自 licece.com 的完美主义倾向量表。20 个条目、五级作答，评估你对瑕疵、错误、评价与拖延的敏感程度。仅作娱乐，非心理测试。",
      "categoryId": "cat_growth",
      "template": "paper",
      "status": "active",
      "featured": false,
      "slug": "q_perfectionism_170",
      "code": "PERF-170",
      "codeMax": 999,
      "codeUsed": 0,
      "createdAt": "2026-11-18",
      "updatedAt": "2026-11-18",
      "access": 0,
      "completions": 0,
      "starts": 0,
      "coverEmoji": "完",
      "scoringType": "perfectionism",
      "scoringNote": "按 1–5 级计分取平均分，≥3.6 为高度完美，≥2.4 为有度追求。",
      "sourceUrl": "https://www.licece.com/info/170.html",
      "questions": [
        {
          "id": "pf_q1",
          "type": "single_choice",
          "stem": "做事追求完美",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q1_o1",
              "text": "偶尔",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q1_o2",
              "text": "较少",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q1_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q1_o4",
              "text": "较多",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q1_o5",
              "text": "总是",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "量表核心条目"
        },
        {
          "id": "pf_q2",
          "type": "single_choice",
          "stem": "不愿接受瑕疵",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q2_o1",
              "text": "不介意",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q2_o2",
              "text": "有点介意",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q2_o3",
              "text": "较在意",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q2_o4",
              "text": "很在意",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q2_o5",
              "text": "极度在意",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "完美主义特征"
        },
        {
          "id": "pf_q3",
          "type": "single_choice",
          "stem": "反复检查细节",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q3_o1",
              "text": "从不",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q3_o2",
              "text": "很少",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q3_o3",
              "text": "有时",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q3_o4",
              "text": "经常",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q3_o5",
              "text": "总在",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "行为表现指标"
        },
        {
          "id": "pf_q4",
          "type": "single_choice",
          "stem": "害怕出错",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q4_o1",
              "text": "不怕",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q4_o2",
              "text": "稍怕",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q4_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q4_o4",
              "text": "较怕",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q4_o5",
              "text": "非常怕",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "情绪反应维度"
        },
        {
          "id": "pf_q5",
          "type": "single_choice",
          "stem": "设定过高标准",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q5_o1",
              "text": "不高",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q5_o2",
              "text": "稍高",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q5_o3",
              "text": "一般高",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q5_o4",
              "text": "很高",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q5_o5",
              "text": "极高",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "目标设定倾向"
        },
        {
          "id": "pf_q6",
          "type": "single_choice",
          "stem": "完成任务才安心",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q6_o1",
              "text": "不需",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q6_o2",
              "text": "较少",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q6_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q6_o4",
              "text": "较需",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q6_o5",
              "text": "必须",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "完成依赖心理"
        },
        {
          "id": "pf_q7",
          "type": "single_choice",
          "stem": "担心别人评价",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q7_o1",
              "text": "不担心",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q7_o2",
              "text": "有点",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q7_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q7_o4",
              "text": "较担心",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q7_o5",
              "text": "非常担心",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "社会比较倾向"
        },
        {
          "id": "pf_q8",
          "type": "single_choice",
          "stem": "拖延以求完美",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q8_o1",
              "text": "不拖延",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q8_o2",
              "text": "偶尔",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q8_o3",
              "text": "有时",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q8_o4",
              "text": "经常",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q8_o5",
              "text": "总是",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "行为延迟机制"
        },
        {
          "id": "pf_q9",
          "type": "single_choice",
          "stem": "对错误过度自责",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q9_o1",
              "text": "不自责",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q9_o2",
              "text": "轻微",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q9_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q9_o4",
              "text": "较重",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q9_o5",
              "text": "严重",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "自我批评倾向"
        },
        {
          "id": "pf_q10",
          "type": "single_choice",
          "stem": "要求他人也完美",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q10_o1",
              "text": "不求",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q10_o2",
              "text": "较少",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q10_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q10_o4",
              "text": "较求",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q10_o5",
              "text": "非常求",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "外化标准表现"
        },
        {
          "id": "pf_q11",
          "type": "single_choice",
          "stem": "工作后仍反思",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q11_o1",
              "text": "不反思",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q11_o2",
              "text": "很少",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q11_o3",
              "text": "有时",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q11_o4",
              "text": "经常",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q11_o5",
              "text": "总在",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "事后反刍行为"
        },
        {
          "id": "pf_q12",
          "type": "single_choice",
          "stem": "无法容忍失败",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q12_o1",
              "text": "能接受",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q12_o2",
              "text": "勉强",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q12_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q12_o4",
              "text": "较难",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q12_o5",
              "text": "完全不能",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "失败容忍度低"
        },
        {
          "id": "pf_q13",
          "type": "single_choice",
          "stem": "追求极致细节",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q13_o1",
              "text": "忽略",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q13_o2",
              "text": "注意少",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q13_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q13_o4",
              "text": "很注意",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q13_o5",
              "text": "极度注意",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "细节关注程度"
        },
        {
          "id": "pf_q14",
          "type": "single_choice",
          "stem": "任务未完成焦虑",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q14_o1",
              "text": "无焦虑",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q14_o2",
              "text": "轻微",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q14_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q14_o4",
              "text": "较重",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q14_o5",
              "text": "严重",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "未完成焦虑反应"
        },
        {
          "id": "pf_q15",
          "type": "single_choice",
          "stem": "害怕开始新任务",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q15_o1",
              "text": "不怕",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q15_o2",
              "text": "稍怕",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q15_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q15_o4",
              "text": "较怕",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q15_o5",
              "text": "非常怕",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "启动障碍表现"
        },
        {
          "id": "pf_q16",
          "type": "single_choice",
          "stem": "认为自己不够好",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q16_o1",
              "text": "很好",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q16_o2",
              "text": "较好",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q16_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q16_o4",
              "text": "较差",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q16_o5",
              "text": "很差",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "自我评价偏低"
        },
        {
          "id": "pf_q17",
          "type": "single_choice",
          "stem": "不愿接受帮助",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q17_o1",
              "text": "愿接受",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q17_o2",
              "text": "偶尔",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q17_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q17_o4",
              "text": "较拒",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q17_o5",
              "text": "拒绝",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "独立性过强"
        },
        {
          "id": "pf_q18",
          "type": "single_choice",
          "stem": "结果不如预期沮丧",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q18_o1",
              "text": "不沮丧",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q18_o2",
              "text": "轻微",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q18_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q18_o4",
              "text": "较重",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q18_o5",
              "text": "严重",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "结果落差反应"
        },
        {
          "id": "pf_q19",
          "type": "single_choice",
          "stem": "对时间安排苛刻",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q19_o1",
              "text": "不苛刻",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q19_o2",
              "text": "稍严",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q19_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q19_o4",
              "text": "较严",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q19_o5",
              "text": "非常严",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "时间控制倾向"
        },
        {
          "id": "pf_q20",
          "type": "single_choice",
          "stem": "追求完美导致疲惫",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "pf_q20_o1",
              "text": "不疲惫",
              "value": 1,
              "label": "A"
            },
            {
              "id": "pf_q20_o2",
              "text": "轻微",
              "value": 2,
              "label": "B"
            },
            {
              "id": "pf_q20_o3",
              "text": "一般",
              "value": 3,
              "label": "C"
            },
            {
              "id": "pf_q20_o4",
              "text": "较重",
              "value": 4,
              "label": "D"
            },
            {
              "id": "pf_q20_o5",
              "text": "非常重",
              "value": 5,
              "label": "E"
            }
          ],
          "basis": "心理耗竭表现"
        }
      ],
      "results": [
        {
          "key": "low",
          "emoji": "🌿",
          "title": "弹性从容",
          "en": "FLEXIBLE",
          "desc": "你对结果有要求，但不会被“必须完美”绑架。你能接受过程中的不完美，也更容易从尝试本身获得满足。",
          "tags": "自我接纳",
          "advice": "保持这份松弛，它本身就是一种效率。"
        },
        {
          "key": "mid",
          "emoji": "⚖️",
          "title": "有度追求",
          "en": "BALANCED",
          "desc": "你追求品质，也懂得在代价过高时停下来。你会在关键处认真，在次要处放过自己。",
          "tags": "平衡",
          "advice": "继续分辨哪些事值得做到极致，哪些事完成就好。"
        },
        {
          "key": "high",
          "emoji": "🔥",
          "title": "高度完美",
          "en": "HIGH STRIVING",
          "desc": "你对标准有很强的坚持，细节、评价与结果都容易牵动你的情绪。这份认真带来高质量，也可能带来疲惫。",
          "tags": "高标准",
          "advice": "试着给“足够好”留一个明确的位置，休息不是退步。"
        }
      ]
    },
    {
      "id": "web_psychic",
      "title": "测测你的超能力",
      "subtitle": "30 题，评估你的第六感与超常感知倾向",
      "description": "来自 licece.com 的超能力趣味测试。30 道二选一题目，统计你在直觉、预感、共情与感知类题目上的倾向。仅作娱乐，非心理测试。",
      "categoryId": "cat_fun",
      "template": "fairy",
      "status": "active",
      "featured": false,
      "slug": "q_psychic_158",
      "code": "PSY-158",
      "codeMax": 999,
      "codeUsed": 0,
      "createdAt": "2026-11-18",
      "updatedAt": "2026-11-18",
      "access": 0,
      "completions": 0,
      "starts": 0,
      "coverEmoji": "🔮",
      "scoringType": "psychic",
      "scoringNote": "统计“肯定/敏感”选项数量：≥21 高感，≥11 敏感雷达，其余为现实感应。",
      "sourceUrl": "https://www.licece.com/info/158.html",
      "questions": [
        {
          "id": "ps_q1",
          "type": "single_choice",
          "stem": "你常梦见什么？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q1_o1",
              "text": "飞行",
              "value": 1,
              "label": "A"
            },
            {
              "id": "ps_q1_o2",
              "text": "坠落",
              "value": 0,
              "label": "B"
            }
          ],
          "basis": "梦境预示能力"
        },
        {
          "id": "ps_q2",
          "type": "single_choice",
          "stem": "你最怕什么声音？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q2_o1",
              "text": "尖叫",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q2_o2",
              "text": "低语",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "听觉敏感度"
        },
        {
          "id": "ps_q3",
          "type": "single_choice",
          "stem": "你常感觉有人在看？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q3_o1",
              "text": "是",
              "value": 1,
              "label": "A"
            },
            {
              "id": "ps_q3_o2",
              "text": "否",
              "value": 0,
              "label": "B"
            }
          ],
          "basis": "直觉感知力"
        },
        {
          "id": "ps_q4",
          "type": "single_choice",
          "stem": "你能预知未来吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q4_o1",
              "text": "偶尔",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q4_o2",
              "text": "经常",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "预知能力测试"
        },
        {
          "id": "ps_q5",
          "type": "single_choice",
          "stem": "你擅长读心吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q5_o1",
              "text": "不擅长",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q5_o2",
              "text": "很擅长",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "心灵感应倾向"
        },
        {
          "id": "ps_q6",
          "type": "single_choice",
          "stem": "你能控制物体吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q6_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q6_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "心灵移动能力"
        },
        {
          "id": "ps_q7",
          "type": "single_choice",
          "stem": "你常有幻觉吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q7_o1",
              "text": "无",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q7_o2",
              "text": "有",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "感知异常表现"
        },
        {
          "id": "ps_q8",
          "type": "single_choice",
          "stem": "你怕黑暗吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q8_o1",
              "text": "不怕",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q8_o2",
              "text": "怕",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "恐惧与超感关联"
        },
        {
          "id": "ps_q9",
          "type": "single_choice",
          "stem": "你能看见灵体吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q9_o1",
              "text": "看不见",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q9_o2",
              "text": "能看见",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "灵视能力评估"
        },
        {
          "id": "ps_q10",
          "type": "single_choice",
          "stem": "你常有第六感吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q10_o1",
              "text": "无",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q10_o2",
              "text": "有",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "直觉判断力"
        },
        {
          "id": "ps_q11",
          "type": "single_choice",
          "stem": "你能瞬间移动吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q11_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q11_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "空间操控潜力"
        },
        {
          "id": "ps_q12",
          "type": "single_choice",
          "stem": "你常被梦魇困扰？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q12_o1",
              "text": "不常",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q12_o2",
              "text": "常",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "潜意识影响"
        },
        {
          "id": "ps_q13",
          "type": "single_choice",
          "stem": "你能感知他人情绪？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q13_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q13_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "情绪共鸣能力"
        },
        {
          "id": "ps_q14",
          "type": "single_choice",
          "stem": "你相信平行世界？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q14_o1",
              "text": "不信",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q14_o2",
              "text": "信",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "多维思维倾向"
        },
        {
          "id": "ps_q15",
          "type": "single_choice",
          "stem": "你能听见灵魂低语？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q15_o1",
              "text": "听不到",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q15_o2",
              "text": "能听见",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "灵性感知能力"
        },
        {
          "id": "ps_q16",
          "type": "single_choice",
          "stem": "你常感到被注视？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q16_o1",
              "text": "无",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q16_o2",
              "text": "有",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "空间感知异常"
        },
        {
          "id": "ps_q17",
          "type": "single_choice",
          "stem": "你能预知危险吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q17_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q17_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "危险预警能力"
        },
        {
          "id": "ps_q18",
          "type": "single_choice",
          "stem": "你常看到闪光？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q18_o1",
              "text": "无",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q18_o2",
              "text": "有",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "视觉异常现象"
        },
        {
          "id": "ps_q19",
          "type": "single_choice",
          "stem": "你能控制天气吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q19_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q19_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "自然操控潜能"
        },
        {
          "id": "ps_q20",
          "type": "single_choice",
          "stem": "你常被幻象迷惑？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q20_o1",
              "text": "不",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q20_o2",
              "text": "是",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "现实感知偏差"
        },
        {
          "id": "ps_q21",
          "type": "single_choice",
          "stem": "你能穿越时间吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q21_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q21_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "时间感知能力"
        },
        {
          "id": "ps_q22",
          "type": "single_choice",
          "stem": "你能读取记忆吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q22_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q22_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "记忆读取潜力"
        },
        {
          "id": "ps_q23",
          "type": "single_choice",
          "stem": "你能隐身吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q23_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q23_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "形态隐藏能力"
        },
        {
          "id": "ps_q24",
          "type": "single_choice",
          "stem": "你常感到被干扰？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q24_o1",
              "text": "不",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q24_o2",
              "text": "是",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "精神干扰敏感"
        },
        {
          "id": "ps_q25",
          "type": "single_choice",
          "stem": "你能感知能量场？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q25_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q25_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "能量感知能力"
        },
        {
          "id": "ps_q26",
          "type": "single_choice",
          "stem": "你能瞬间修复物品？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q26_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q26_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "物质修复能力"
        },
        {
          "id": "ps_q27",
          "type": "single_choice",
          "stem": "你能与动物交流？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q27_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q27_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "动物沟通能力"
        },
        {
          "id": "ps_q28",
          "type": "single_choice",
          "stem": "你能操控火焰吗？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q28_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q28_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "元素控制能力"
        },
        {
          "id": "ps_q29",
          "type": "single_choice",
          "stem": "你能预知他人想法？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q29_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q29_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "思维读取倾向"
        },
        {
          "id": "ps_q30",
          "type": "single_choice",
          "stem": "你能感知未来事件？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "ps_q30_o1",
              "text": "不能",
              "value": 0,
              "label": "A"
            },
            {
              "id": "ps_q30_o2",
              "text": "能",
              "value": 1,
              "label": "B"
            }
          ],
          "basis": "未来预见能力"
        }
      ],
      "results": [
        {
          "key": "low",
          "emoji": "🌱",
          "title": "现实感应者",
          "en": "GROUND PERCEPTION",
          "desc": "你对超常体验保持清醒与好奇，更愿意相信可验证的因果。你的稳定感来自脚踩地面的生活方式。",
          "tags": "理性",
          "advice": "保持开放的怀疑，也是一种很好的直觉。"
        },
        {
          "key": "mid",
          "emoji": "🔮",
          "title": "敏感雷达",
          "en": "SENSITIVE RADAR",
          "desc": "你常常捕捉到别人忽略的细微信号，梦境、气氛与情绪都会在你心里留下回响。",
          "tags": "直觉",
          "advice": "给别人一点解释的机会，也给你的感受留一点验证空间。"
        },
        {
          "key": "high",
          "emoji": "✨",
          "title": "高感通透者",
          "en": "HIGHLY ATTUNED",
          "desc": "你在直觉、共感与预感题上得分很高。你对世界的感觉比多数人更敏锐，也更容易被信息淹没。",
          "tags": "共感",
          "advice": "敏锐是礼物，记得用规律作息和边界感为它充电。"
        }
      ]
    },
    {
      "id": "web_soul_animal",
      "title": "测测你的灵魂动物是什么？",
      "subtitle": "20 题，找到与你最像的那只动物",
      "description": "来自 licece.com 的灵魂动物测试。20 道四选一题目，从性格倾向、社交风格到潜意识偏好，找到与你最契合的动物原型。仅作娱乐，非心理测试。",
      "categoryId": "cat_personality",
      "template": "fairy",
      "status": "active",
      "featured": false,
      "slug": "q_soul_animal_21",
      "code": "SOUL-21",
      "codeMax": 999,
      "codeUsed": 0,
      "createdAt": "2026-11-18",
      "updatedAt": "2026-11-18",
      "access": 0,
      "completions": 0,
      "starts": 0,
      "coverEmoji": "🦊",
      "scoringType": "soul_animal",
      "scoringNote": "按选项归属统计四种动物维度，取最高为主导，次高为副导。",
      "sourceUrl": "https://www.licece.com/info/21.html",
      "questions": [
        {
          "id": "sa_q1",
          "type": "single_choice",
          "stem": "你更喜欢哪种天气？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q1_o1",
              "text": "阴天",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q1_o2",
              "text": "小雨",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q1_o3",
              "text": "晴天",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q1_o4",
              "text": "雷暴",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "性格倾向"
        },
        {
          "id": "sa_q2",
          "type": "single_choice",
          "stem": "独处时你在做什么？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q2_o1",
              "text": "发呆",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q2_o2",
              "text": "看书",
              "value": 1,
              "label": "B",
              "dimension": "wolf"
            },
            {
              "id": "sa_q2_o3",
              "text": "画画",
              "value": 1,
              "label": "C",
              "dimension": "deer"
            },
            {
              "id": "sa_q2_o4",
              "text": "写歌",
              "value": 1,
              "label": "D",
              "dimension": "fox"
            }
          ],
          "basis": "内心世界"
        },
        {
          "id": "sa_q3",
          "type": "single_choice",
          "stem": "朋友遇到困难你会？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q3_o1",
              "text": "安慰",
              "value": 1,
              "label": "A",
              "dimension": "deer"
            },
            {
              "id": "sa_q3_o2",
              "text": "倾听",
              "value": 1,
              "label": "B",
              "dimension": "cat"
            },
            {
              "id": "sa_q3_o3",
              "text": "出主意",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q3_o4",
              "text": "直接帮",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "社交风格"
        },
        {
          "id": "sa_q4",
          "type": "single_choice",
          "stem": "你最看重什么？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q4_o1",
              "text": "安稳",
              "value": 1,
              "label": "A",
              "dimension": "deer"
            },
            {
              "id": "sa_q4_o2",
              "text": "自由",
              "value": 1,
              "label": "B",
              "dimension": "wolf"
            },
            {
              "id": "sa_q4_o3",
              "text": "成就",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q4_o4",
              "text": "激情",
              "value": 1,
              "label": "D",
              "dimension": "cat"
            }
          ],
          "basis": "价值观"
        },
        {
          "id": "sa_q5",
          "type": "single_choice",
          "stem": "面对挑战你如何？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q5_o1",
              "text": "回避",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q5_o2",
              "text": "观察",
              "value": 1,
              "label": "B",
              "dimension": "wolf"
            },
            {
              "id": "sa_q5_o3",
              "text": "尝试",
              "value": 1,
              "label": "C",
              "dimension": "deer"
            },
            {
              "id": "sa_q5_o4",
              "text": "迎战",
              "value": 1,
              "label": "D",
              "dimension": "fox"
            }
          ],
          "basis": "应对方式"
        },
        {
          "id": "sa_q6",
          "type": "single_choice",
          "stem": "你理想的生活节奏？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q6_o1",
              "text": "慢",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q6_o2",
              "text": "平稳",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q6_o3",
              "text": "充实",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q6_o4",
              "text": "快节奏",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "生活态度"
        },
        {
          "id": "sa_q7",
          "type": "single_choice",
          "stem": "你更倾向哪种颜色？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q7_o1",
              "text": "灰",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q7_o2",
              "text": "蓝",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q7_o3",
              "text": "绿",
              "value": 1,
              "label": "C",
              "dimension": "wolf"
            },
            {
              "id": "sa_q7_o4",
              "text": "红",
              "value": 1,
              "label": "D",
              "dimension": "fox"
            }
          ],
          "basis": "心理偏好"
        },
        {
          "id": "sa_q8",
          "type": "single_choice",
          "stem": "你如何做决定？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q8_o1",
              "text": "凭感觉",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q8_o2",
              "text": "听建议",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q8_o3",
              "text": "列利弊",
              "value": 1,
              "label": "C",
              "dimension": "wolf"
            },
            {
              "id": "sa_q8_o4",
              "text": "果断选",
              "value": 1,
              "label": "D",
              "dimension": "fox"
            }
          ],
          "basis": "决策风格"
        },
        {
          "id": "sa_q9",
          "type": "single_choice",
          "stem": "你最讨厌什么？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q9_o1",
              "text": "吵闹",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q9_o2",
              "text": "虚伪",
              "value": 1,
              "label": "B",
              "dimension": "wolf"
            },
            {
              "id": "sa_q9_o3",
              "text": "拖延",
              "value": 1,
              "label": "C",
              "dimension": "deer"
            },
            {
              "id": "sa_q9_o4",
              "text": "束缚",
              "value": 1,
              "label": "D",
              "dimension": "fox"
            }
          ],
          "basis": "情绪触发点"
        },
        {
          "id": "sa_q10",
          "type": "single_choice",
          "stem": "你如何表达爱意？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q10_o1",
              "text": "默默",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q10_o2",
              "text": "言语",
              "value": 1,
              "label": "B",
              "dimension": "fox"
            },
            {
              "id": "sa_q10_o3",
              "text": "行动",
              "value": 1,
              "label": "C",
              "dimension": "deer"
            },
            {
              "id": "sa_q10_o4",
              "text": "热烈",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "情感表达"
        },
        {
          "id": "sa_q11",
          "type": "single_choice",
          "stem": "你更喜欢哪种旅行？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q11_o1",
              "text": "宅家",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q11_o2",
              "text": "小镇",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q11_o3",
              "text": "城市",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q11_o4",
              "text": "荒野",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "探索倾向"
        },
        {
          "id": "sa_q12",
          "type": "single_choice",
          "stem": "你如何看待规则？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q12_o1",
              "text": "遵守",
              "value": 1,
              "label": "A",
              "dimension": "deer"
            },
            {
              "id": "sa_q12_o2",
              "text": "理解",
              "value": 1,
              "label": "B",
              "dimension": "cat"
            },
            {
              "id": "sa_q12_o3",
              "text": "优化",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q12_o4",
              "text": "打破",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "行为准则"
        },
        {
          "id": "sa_q13",
          "type": "single_choice",
          "stem": "你最常被夸什么？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q13_o1",
              "text": "温柔",
              "value": 1,
              "label": "A",
              "dimension": "deer"
            },
            {
              "id": "sa_q13_o2",
              "text": "可靠",
              "value": 1,
              "label": "B",
              "dimension": "cat"
            },
            {
              "id": "sa_q13_o3",
              "text": "聪明",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q13_o4",
              "text": "勇敢",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "他人评价"
        },
        {
          "id": "sa_q14",
          "type": "single_choice",
          "stem": "你如何面对失败？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q14_o1",
              "text": "沮丧",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q14_o2",
              "text": "反思",
              "value": 1,
              "label": "B",
              "dimension": "wolf"
            },
            {
              "id": "sa_q14_o3",
              "text": "调整",
              "value": 1,
              "label": "C",
              "dimension": "deer"
            },
            {
              "id": "sa_q14_o4",
              "text": "再战",
              "value": 1,
              "label": "D",
              "dimension": "fox"
            }
          ],
          "basis": "抗压能力"
        },
        {
          "id": "sa_q15",
          "type": "single_choice",
          "stem": "你更喜欢哪种音乐？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q15_o1",
              "text": "轻柔",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q15_o2",
              "text": "民谣",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q15_o3",
              "text": "流行",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q15_o4",
              "text": "摇滚",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "审美偏好"
        },
        {
          "id": "sa_q16",
          "type": "single_choice",
          "stem": "你如何处理冲突？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q16_o1",
              "text": "退让",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q16_o2",
              "text": "沟通",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q16_o3",
              "text": "讲理",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q16_o4",
              "text": "对抗",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "人际策略"
        },
        {
          "id": "sa_q17",
          "type": "single_choice",
          "stem": "你最重视哪种关系？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q17_o1",
              "text": "亲情",
              "value": 1,
              "label": "A",
              "dimension": "deer"
            },
            {
              "id": "sa_q17_o2",
              "text": "友情",
              "value": 1,
              "label": "B",
              "dimension": "fox"
            },
            {
              "id": "sa_q17_o3",
              "text": "爱情",
              "value": 1,
              "label": "C",
              "dimension": "cat"
            },
            {
              "id": "sa_q17_o4",
              "text": "自我",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "情感重心"
        },
        {
          "id": "sa_q18",
          "type": "single_choice",
          "stem": "你如何看待变化？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q18_o1",
              "text": "抗拒",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q18_o2",
              "text": "接受",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q18_o3",
              "text": "适应",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q18_o4",
              "text": "拥抱",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "适应能力"
        },
        {
          "id": "sa_q19",
          "type": "single_choice",
          "stem": "你最常做什么梦？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q19_o1",
              "text": "坠落",
              "value": 1,
              "label": "A",
              "dimension": "cat"
            },
            {
              "id": "sa_q19_o2",
              "text": "迷路",
              "value": 1,
              "label": "B",
              "dimension": "deer"
            },
            {
              "id": "sa_q19_o3",
              "text": "飞翔",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q19_o4",
              "text": "战斗",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "潜意识倾向"
        },
        {
          "id": "sa_q20",
          "type": "single_choice",
          "stem": "你希望被记住为？",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "sa_q20_o1",
              "text": "善良",
              "value": 1,
              "label": "A",
              "dimension": "deer"
            },
            {
              "id": "sa_q20_o2",
              "text": "真诚",
              "value": 1,
              "label": "B",
              "dimension": "cat"
            },
            {
              "id": "sa_q20_o3",
              "text": "成功",
              "value": 1,
              "label": "C",
              "dimension": "fox"
            },
            {
              "id": "sa_q20_o4",
              "text": "传奇",
              "value": 1,
              "label": "D",
              "dimension": "wolf"
            }
          ],
          "basis": "人生追求"
        }
      ],
      "results": [
        {
          "key": "fox",
          "emoji": "🦊",
          "title": "灵狐",
          "en": "THE FOX",
          "desc": "你机敏、好奇，擅长从细节里抓住机会。你不喜欢一成不变，总能在新环境里迅速找到自己的位置。",
          "tags": "机敏",
          "advice": "偶尔慢一点，让身边的人跟上你的思路。"
        },
        {
          "key": "wolf",
          "emoji": "🐺",
          "title": "孤狼",
          "en": "THE WOLF",
          "desc": "你独立、清醒，有很强的边界感。你愿意独自承担，也不轻易把判断交给别人。",
          "tags": "独立",
          "advice": "强大的前提不是永远不需要人，而是懂得选择谁可以靠近。"
        },
        {
          "key": "deer",
          "emoji": "🦌",
          "title": "小鹿",
          "en": "THE DEER",
          "desc": "你温柔、警觉，很在意关系里的安全感。你擅长照顾别人的感受，也容易被细微的动静影响。",
          "tags": "共情",
          "advice": "先照顾好自己的边界，温柔才不会变成消耗。"
        },
        {
          "key": "cat",
          "emoji": "🐈",
          "title": "黑猫",
          "en": "THE CAT",
          "desc": "你慢热、自由，有一套只属于自己的秩序。你不急着解释自己，却对真正信任的人很柔软。",
          "tags": "慢热",
          "advice": "你不是难接近，只是值得被认真靠近。"
        }
      ]
    },
    {
      "id": "web_rpi",
      "title": "RPI 恋爱占有欲指数测试",
      "subtitle": "共 40 题，测量你在亲密关系中的占有倾向",
      "description": "来自 senxince.com 的 RPI 恋爱占有欲指数测试（共 40 题）。四级作答，覆盖嫉妒偏执、焦虑依恋、情感依附与回避依恋四个维度。仅作娱乐，非心理测试。",
      "categoryId": "cat_relationship",
      "template": "midnight",
      "status": "active",
      "featured": false,
      "slug": "q_rpi_37",
      "code": "RPI-37",
      "codeMax": 999,
      "codeUsed": 0,
      "createdAt": "2026-11-18",
      "updatedAt": "2026-11-18",
      "access": 0,
      "completions": 0,
      "starts": 0,
      "coverEmoji": "💞",
      "scoringType": "rpi",
      "scoringNote": "40 题四级计分，取平均分划为从容/在意/强烈三档；同时展示四个分量表均分。",
      "sourceUrl": "https://senxince.com/exam/37.html",
      "questions": [
        {
          "id": "rpi_q1",
          "type": "single_choice",
          "stem": "你很在意伴侣过去的感情经历细节",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q1_o1",
              "text": "完全不在意",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q1_o2",
              "text": "浅度好奇",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q1_o3",
              "text": "十分在意",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q1_o4",
              "text": "反复纠结",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q2",
          "type": "single_choice",
          "stem": "伴侣提起异性朋友你会刻意追问细节",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q2_o1",
              "text": "不会追问",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q2_o2",
              "text": "简单问问",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q2_o3",
              "text": "详细盘问",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q2_o4",
              "text": "反复逼问",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q3",
          "type": "single_choice",
          "stem": "得知伴侣还有前任联系方式会不舒服",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q3_o1",
              "text": "完全无所谓",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q3_o2",
              "text": "稍有介意",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q3_o3",
              "text": "介意不满",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q3_o4",
              "text": "无法接受",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q4",
          "type": "single_choice",
          "stem": "你认为感情很脆弱随时会破裂",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q4_o1",
              "text": "心态安稳",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q4_o2",
              "text": "略有顾虑",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q4_o3",
              "text": "时常担忧",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q4_o4",
              "text": "极度悲观",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q5",
          "type": "single_choice",
          "stem": "失去对方关心时会陷入低落内耗",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q5_o1",
              "text": "心态平稳",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q5_o2",
              "text": "短暂低落",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q5_o3",
              "text": "长期难过",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q5_o4",
              "text": "无法自愈",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q6",
          "type": "single_choice",
          "stem": "看到伴侣对别人温柔会产生落差感",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q6_o1",
              "text": "没有落差",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q6_o2",
              "text": "轻微失落",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q6_o3",
              "text": "强烈难受",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q6_o4",
              "text": "情绪崩溃",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q7",
          "type": "single_choice",
          "stem": "你希望伴侣减少不必要的社交应酬",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q7_o1",
              "text": "无所谓",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q7_o2",
              "text": "委婉提醒",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q7_o3",
              "text": "明确要求减少",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q7_o4",
              "text": "全面限制社交",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q8",
          "type": "single_choice",
          "stem": "睡前、日常都需要对方的陪伴安抚",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q8_o1",
              "text": "无需陪伴",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q8_o2",
              "text": "偶尔需要",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q8_o3",
              "text": "经常需要",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q8_o4",
              "text": "缺一不可",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q9",
          "type": "single_choice",
          "stem": "害怕新鲜感褪去后被对方抛弃",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q9_o1",
              "text": "毫无顾虑",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q9_o2",
              "text": "轻微担心",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q9_o3",
              "text": "时常焦虑",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q9_o4",
              "text": "极度恐惧",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q10",
          "type": "single_choice",
          "stem": "伴侣和异性正常工作交流你也会多想",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q10_o1",
              "text": "不会多想",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q10_o2",
              "text": "偶尔多想",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q10_o3",
              "text": "频繁猜忌",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q10_o4",
              "text": "过度敏感",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q11",
          "type": "single_choice",
          "stem": "吵架后你会用冷战、拉黑约束对方妥协",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q11_o1",
              "text": "不会",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q11_o2",
              "text": "极少",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q11_o3",
              "text": "时常这样",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q11_o4",
              "text": "常态手段",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q12",
          "type": "single_choice",
          "stem": "害怕对方冷淡，不断主动讨好迎合",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q12_o1",
              "text": "平等相处",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q12_o2",
              "text": "适度迁就",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q12_o3",
              "text": "刻意讨好",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q12_o4",
              "text": "卑微迎合",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q13",
          "type": "single_choice",
          "stem": "你反感伴侣隐瞒小事、私人情绪与想法",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q13_o1",
              "text": "完全包容",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q13_o2",
              "text": "轻微在意",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q13_o3",
              "text": "难以接受",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q13_o4",
              "text": "零容忍",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q14",
          "type": "single_choice",
          "stem": "看到伴侣夸赞异性会莫名心生不悦",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q14_o1",
              "text": "毫无感觉",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q14_o2",
              "text": "淡淡在意",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q14_o3",
              "text": "明显吃醋",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q14_o4",
              "text": "极度生气",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q15",
          "type": "single_choice",
          "stem": "很难长久信任伴侣，容易胡思乱想",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q15_o1",
              "text": "信任充足",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q15_o2",
              "text": "基础信任",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q15_o3",
              "text": "信任薄弱",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q15_o4",
              "text": "完全不信任",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q16",
          "type": "single_choice",
          "stem": "你习惯事事征求伴侣意见无法独立",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q16_o1",
              "text": "完全独立",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q16_o2",
              "text": "偶尔参考",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q16_o3",
              "text": "习惯依赖",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q16_o4",
              "text": "完全依附",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q17",
          "type": "single_choice",
          "stem": "你会限制伴侣单独和异性外出活动",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q17_o1",
              "text": "从不限制",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q17_o2",
              "text": "适当提醒",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q17_o3",
              "text": "尽量阻止",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q17_o4",
              "text": "绝对禁止",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q18",
          "type": "single_choice",
          "stem": "独处时没有对方陪伴就会感到空虚",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q18_o1",
              "text": "不会空虚",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q18_o2",
              "text": "偶尔空虚",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q18_o3",
              "text": "时常空虚",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q18_o4",
              "text": "极度空虚",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q19",
          "type": "single_choice",
          "stem": "你反感伴侣在社交平台点赞异性动态",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q19_o1",
              "text": "完全不介意",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q19_o2",
              "text": "略有不适",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q19_o3",
              "text": "心生不满",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q19_o4",
              "text": "明令禁止",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q20",
          "type": "single_choice",
          "stem": "发现伴侣隐瞒异性接触会瞬间暴怒",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q20_o1",
              "text": "不会生气",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q20_o2",
              "text": "有点难过",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q20_o3",
              "text": "生气冷战",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q20_o4",
              "text": "激烈争吵",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q21",
          "type": "single_choice",
          "stem": "总担心有第三者介入破坏感情",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q21_o1",
              "text": "从不担心",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q21_o2",
              "text": "偶尔顾虑",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q21_o3",
              "text": "频繁担心",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q21_o4",
              "text": "草木皆兵",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q22",
          "type": "single_choice",
          "stem": "恋爱后会主动放弃个人社交圈迁就对方",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q22_o1",
              "text": "绝不放弃",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q22_o2",
              "text": "小幅让步",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q22_o3",
              "text": "主动缩减",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q22_o4",
              "text": "彻底舍弃",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q23",
          "type": "single_choice",
          "stem": "你很难独自面对压力，需要对方治愈",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q23_o1",
              "text": "独立抗压",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q23_o2",
              "text": "偶尔求助",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q23_o3",
              "text": "高度需要",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q23_o4",
              "text": "完全依赖",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q24",
          "type": "single_choice",
          "stem": "你会偷偷翻看对方手机、社交软件记录",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q24_o1",
              "text": "从不",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q24_o2",
              "text": "好奇但不看",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q24_o3",
              "text": "偶尔查看",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q24_o4",
              "text": "习惯性检查",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q25",
          "type": "single_choice",
          "stem": "总觉得自己不够好配不上对方",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q25_o1",
              "text": "自信稳定",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q25_o2",
              "text": "偶尔自卑",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q25_o3",
              "text": "时常怀疑",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q25_o4",
              "text": "极度自卑",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q26",
          "type": "single_choice",
          "stem": "你会干涉对方穿搭、娱乐爱好等个人选择",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q26_o1",
              "text": "从不干涉",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q26_o2",
              "text": "随口建议",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q26_o3",
              "text": "刻意纠正",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q26_o4",
              "text": "强制改造",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q27",
          "type": "single_choice",
          "stem": "恋爱中你喜欢主导对方的日常安排",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q27_o1",
              "text": "完全不",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q27_o2",
              "text": "偶尔建议",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q27_o3",
              "text": "强势干预",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q27_o4",
              "text": "全盘掌控",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q28",
          "type": "single_choice",
          "stem": "你会主动要求伴侣实时报备行程",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q28_o1",
              "text": "完全不会",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q28_o2",
              "text": "偶尔会",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q28_o3",
              "text": "经常要求",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q28_o4",
              "text": "强制必须报备",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q29",
          "type": "single_choice",
          "stem": "经常怀疑对方没有那么喜欢自己",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q29_o1",
              "text": "从不怀疑",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q29_o2",
              "text": "偶尔乱想",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q29_o3",
              "text": "频繁怀疑",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q29_o4",
              "text": "持续否定",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q30",
          "type": "single_choice",
          "stem": "过往感情伤害让你对新恋情不安",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q30_o1",
              "text": "毫无影响",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q30_o2",
              "text": "轻微影响",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q30_o3",
              "text": "影响很深",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q30_o4",
              "text": "阴影缠身",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q31",
          "type": "single_choice",
          "stem": "你介意伴侣保留异性好友且频繁聊天",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q31_o1",
              "text": "完全不介意",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q31_o2",
              "text": "轻微介意",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q31_o3",
              "text": "明显反感",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q31_o4",
              "text": "坚决禁止",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q32",
          "type": "single_choice",
          "stem": "分开太久会产生强烈的孤单不安感",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q32_o1",
              "text": "毫无感觉",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q32_o2",
              "text": "轻微孤单",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q32_o3",
              "text": "明显不安",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q32_o4",
              "text": "严重焦虑",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q33",
          "type": "single_choice",
          "stem": "你要求伴侣所有社交动态对你公开透明",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q33_o1",
              "text": "无要求",
              "value": 1,
              "label": "A",
              "dimension": "AV"
            },
            {
              "id": "rpi_q33_o2",
              "text": "简单公开",
              "value": 2,
              "label": "B",
              "dimension": "AV"
            },
            {
              "id": "rpi_q33_o3",
              "text": "全部可见",
              "value": 3,
              "label": "C",
              "dimension": "AV"
            },
            {
              "id": "rpi_q33_o4",
              "text": "实时同步",
              "value": 4,
              "label": "D",
              "dimension": "AV"
            }
          ],
          "basis": "回避依恋"
        },
        {
          "id": "rpi_q34",
          "type": "single_choice",
          "stem": "需要对方反复说爱你、证明爱意",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q34_o1",
              "text": "无需证明",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q34_o2",
              "text": "偶尔需要",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q34_o3",
              "text": "经常索要",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q34_o4",
              "text": "时刻确认",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q35",
          "type": "single_choice",
          "stem": "害怕伴侣被优秀的异性吸引而离开",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q35_o1",
              "text": "毫无担忧",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q35_o2",
              "text": "轻微担心",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q35_o3",
              "text": "时常焦虑",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q35_o4",
              "text": "极度恐慌",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q36",
          "type": "single_choice",
          "stem": "你会对比自己和伴侣身边异性的优劣",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q36_o1",
              "text": "从不对比",
              "value": 1,
              "label": "A",
              "dimension": "JE"
            },
            {
              "id": "rpi_q36_o2",
              "text": "偶尔对比",
              "value": 2,
              "label": "B",
              "dimension": "JE"
            },
            {
              "id": "rpi_q36_o3",
              "text": "经常比较",
              "value": 3,
              "label": "C",
              "dimension": "JE"
            },
            {
              "id": "rpi_q36_o4",
              "text": "极度内耗",
              "value": 4,
              "label": "D",
              "dimension": "JE"
            }
          ],
          "basis": "嫉妒偏执"
        },
        {
          "id": "rpi_q37",
          "type": "single_choice",
          "stem": "一旦恋爱就会把对方当作生活全部",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q37_o1",
              "text": "保持自我",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q37_o2",
              "text": "部分依赖",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q37_o3",
              "text": "高度依赖",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q37_o4",
              "text": "完全依附",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q38",
          "type": "single_choice",
          "stem": "你需要伴侣高频回复消息、秒回信息",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q38_o1",
              "text": "无需求",
              "value": 1,
              "label": "A",
              "dimension": "DE"
            },
            {
              "id": "rpi_q38_o2",
              "text": "偶尔期待",
              "value": 2,
              "label": "B",
              "dimension": "DE"
            },
            {
              "id": "rpi_q38_o3",
              "text": "强烈需要",
              "value": 3,
              "label": "C",
              "dimension": "DE"
            },
            {
              "id": "rpi_q38_o4",
              "text": "必须秒回",
              "value": 4,
              "label": "D",
              "dimension": "DE"
            }
          ],
          "basis": "情感依附"
        },
        {
          "id": "rpi_q39",
          "type": "single_choice",
          "stem": "对方态度冷淡就认定感情变质",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q39_o1",
              "text": "理性看待",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q39_o2",
              "text": "短暂多想",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q39_o3",
              "text": "立刻焦虑",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q39_o4",
              "text": "彻底绝望",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        },
        {
          "id": "rpi_q40",
          "type": "single_choice",
          "stem": "一点小事就会脑补对方要离开自己",
          "analysis": "选择最接近你第一反应的一项。没有标准答案。",
          "options": [
            {
              "id": "rpi_q40_o1",
              "text": "不会脑补",
              "value": 1,
              "label": "A",
              "dimension": "AX"
            },
            {
              "id": "rpi_q40_o2",
              "text": "偶尔多想",
              "value": 2,
              "label": "B",
              "dimension": "AX"
            },
            {
              "id": "rpi_q40_o3",
              "text": "经常脑补",
              "value": 3,
              "label": "C",
              "dimension": "AX"
            },
            {
              "id": "rpi_q40_o4",
              "text": "灾难化乱想",
              "value": 4,
              "label": "D",
              "dimension": "AX"
            }
          ],
          "basis": "焦虑依恋"
        }
      ],
      "results": [
        {
          "key": "low",
          "emoji": "🕊",
          "title": "从容型占有欲",
          "en": "SECURE",
          "desc": "你在关系里保有清晰的空间感。你关心对方，但不把在意变成控制，信任是你默认的底色。",
          "tags": "信任",
          "advice": "继续尊重彼此的边界，这是关系最稳的地基。"
        },
        {
          "key": "mid",
          "emoji": "💞",
          "title": "在意型占有欲",
          "en": "ATTACHED",
          "desc": "你会因为喜欢而多想，也会在意对方与他人的距离。你的占有欲大多来自珍视，而非控制。",
          "tags": "依恋",
          "advice": "把不安说出口，往往比反复确认更有效。"
        },
        {
          "key": "high",
          "emoji": "🔥",
          "title": "强烈型占有欲",
          "en": "INTENSE",
          "desc": "你对亲密关系投入很深，也很怕失去。线索敏感、反复联想与强烈情绪会交替出现。",
          "tags": "强烈",
          "advice": "觉察情绪的源头，给彼此留出可以呼吸的空间。"
        }
      ]
    }
  ],
  "codes": [
    {
      "id": "web_code_web_hogwarts",
      "testId": "web_hogwarts",
      "code": "WIZARD-65",
      "max": 999,
      "used": 0,
      "status": "active",
      "expires": "2027-12-31",
      "createdAt": "2026-11-18"
    },
    {
      "id": "web_code_web_perfectionism",
      "testId": "web_perfectionism",
      "code": "PERF-170",
      "max": 999,
      "used": 0,
      "status": "active",
      "expires": "2027-12-31",
      "createdAt": "2026-11-18"
    },
    {
      "id": "web_code_web_psychic",
      "testId": "web_psychic",
      "code": "PSY-158",
      "max": 999,
      "used": 0,
      "status": "active",
      "expires": "2027-12-31",
      "createdAt": "2026-11-18"
    },
    {
      "id": "web_code_web_soul_animal",
      "testId": "web_soul_animal",
      "code": "SOUL-21",
      "max": 999,
      "used": 0,
      "status": "active",
      "expires": "2027-12-31",
      "createdAt": "2026-11-18"
    },
    {
      "id": "web_code_web_rpi",
      "testId": "web_rpi",
      "code": "RPI-37",
      "max": 999,
      "used": 0,
      "status": "active",
      "expires": "2027-12-31",
      "createdAt": "2026-11-18"
    }
  ]
};
  imported.tests.forEach(function (t) {
    if (!bank.tests.some(function (x) { return x.id === t.id; })) bank.tests.push(t);
  });
  imported.codes.forEach(function (c) {
    if (!bank.codes.some(function (x) { return x.id === c.id; })) bank.codes.push(c);
  });
  bank.version = 3;
})();
