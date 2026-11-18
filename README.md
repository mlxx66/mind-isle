# 心屿 Mind Isle · 心理测试网站管理台

一个无需构建、直接运行的静态心理测试管理台。所有演示数据保存在浏览器 `localStorage`，适合产品评审、交互验证和后续接入 Supabase。

## 打开方式

直接双击 `index.html`，或在目录内启动任意静态文件服务器。

登录信息（必须手动输入，无演示 bypass）：

- 邮箱：`mlxx4235@cc.com`
- 密码：`ysyqdzgnr666`

## 已导入题库

已从 `100个趣味心理测试-现成题库汇编.docx` 提炼并加入 9 个独立测试、249 道题目：

| 测试 | 题量 | 验证码 | 计分方式 |
| --- | ---: | --- | --- |
| 九型人格简易测试 | 108 | `ENNEA-73` | 九型命中条数 |
| 成人依恋量表 AAS | 18 | `AAS-42` | 亲近/依赖/焦虑三维判定 |
| 你是高敏感还是钝感人格 | 27 | `HSPS-65` | 27 题平均分 |
| 七宗罪属性测试 | 30 | `SIN-63` | 维度占比主导/副导 |
| 简易 MBTI 二十八题 | 28 | `MBTI-68` | 四维偏好计分 |
| 测你骨子里是 i 人还是 e 人 | 7 | `IE-77` | E/I 两维计分 |
| 你的社交人设测试 | 14 | `SOCIAL-77` | E/I + F/T 组合 |
| 情侣适配度测试 RAS | 7 | `RAS-51` | 反向题与总分分级 |
| 孤独等级自测 | 10 | `LONE-82` | 勾选项目最高等级 |

题库数据位于 `assets/question-bank.js`，计分规则位于 `assets/scoring.js`。系统启动时会自动将这些测试合并到旧版本地数据，不会覆盖已有测试，并会自动去除重复题目。

### 外部站点导入（2026-11-18）

新增 5 套测试，共 170 道题，来源为 senxince.com 与 licece.com。数据位于 `assets/web-tests.js`，加载时自动并入题库，已存在的本地数据也会自动补全。

| 测试 | 题量 | 验证码 | 来源 | 计分 |
| --- | ---: | --- | --- | --- |
| 霍格沃茨综合测试 | 60 | `WIZARD-65` | senxince.com/exam/65 | 学院 × 魔杖 × 角色 |
| 完美主义倾向量表 | 20 | `PERF-170` | licece.com/info/170 | 五级量表均分 |
| 测测你的超能力 | 30 | `PSY-158` | licece.com/info/158 | 超感倾向计数 |
| 测测你的灵魂动物是什么？ | 20 | `SOUL-21` | licece.com/info/21 | 四种动物维度主导/副导 |
| RPI 恋爱占有欲指数测试 | 40 | `RPI-37` | senxince.com/exam/37 | 四级量表均分 + 四因子 |

完整体验与计分测试结果见 `TEST_REPORT.md`。

## 已实现功能

- 数据仪表盘：测试数、访问量、完成率、趋势图、漏斗、最近编辑
- 测试管理：搜索、分类/模板筛选、状态筛选、批量上下架、批量切换模板、导出链接表
- 新增/编辑测试：基础信息、题目与选项、结果维度、实时手机预览、专属 CSS
- 单题链接：独立 slug、验证码、使用次数、链接与验证码重置
- 用户端：验证码解锁 → 点选答案自动跳题 → 最后一题自动提交结果页，完整移动端适配
- 每题均显示“仅作娱乐，非心理测试”提示
- 五套模板：午夜兽语、古籍花笺、奶油贴纸、星砂童话、魔法学院（深紫鎏金玻璃质感，来自 exam/65）
- 模板库：上传图片新增模板、预览、设为默认、启用/停用、默认模板降级
- 结果设置：每个结果可上传图片作为结果代表图标，也可恢复使用 Emoji
- 批量导入：TXT / Markdown 文本解析、拆题预览、导入为草稿
- 分类管理：新增、编辑、删除、关联数量
- 验证码管理：生成、复制、重生成、作废、导出、使用进度
- 数据统计：访问排行、完成率、单测试明细、报表导出
- 数据重置：右上角头像 → 重置演示数据

## 演示数据与安全说明

当前是纯前端演示版，题目内容与验证码存于浏览器，不具备生产环境安全性。正式上线时建议按产品文档接入 Supabase：

1. 管理员登录使用 Supabase Auth。
2. 题目、验证码、分类、模板与访问日志存入 PostgreSQL。
3. `/q/{slug}` 仅显示验证码输入页，验证码通过 Edge Function 校验后才返回题目、答案与解析。
4. 开启 RLS，前端不直接读取 questions 与 access_codes。
5. Word/PDF 自动拆题放到服务端任务处理，前端只上传文件并拉取拆分结果。
6. custom_css 在后端做白名单过滤，禁止 `<script>`、`javascript:`、外部 `@import`。

## 文件结构

```text
mind-isle-admin/
├── index.html
├── assets/
│   ├── app.js
│   ├── scoring.js
│   ├── question-bank.js
│   ├── web-tests.js
│   └── styles.css
├── TEST_REPORT.md
└── README.md
```

## 主要路由

- `#/login` 管理员登录
- `#/admin` 数据概览
- `#/admin/tests` 测试管理
- `#/admin/tests/new` 新建测试
- `#/admin/tests/{id}/edit` 编辑测试
- `#/admin/import` 批量导入
- `#/admin/categories` 分类管理
- `#/admin/codes` 验证码管理
- `#/admin/templates` 模板库
- `#/admin/stats` 数据统计
- `#/q/{slug}` 用户测试页

## 本地清理

浏览器控制台执行：

```js
localStorage.removeItem('mindisle_demo_v1');
localStorage.removeItem('mindisle_session_v1');
location.reload();
```
