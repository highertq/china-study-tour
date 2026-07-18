# China Study Tour — 项目进度记录

> 每次更新都会维护这个文档。记录：做了什么、为什么这么做、待办什么、关键决策。

**项目仓库**：https://github.com/highertq/china-study-tour
**线上地址**：https://china-study-tour.pages.dev
**品牌名**：China Crossroads（中国十字路口）
**技术栈**：Astro + Tailwind CSS v4 + Cloudflare Pages
**最后更新**：2026-07-18（内容扩充：8 城市目的地页 + Business/Experiences 落地页丰富）

---

## 📋 项目概述

面向想来中国旅游的海外老外的研学路线展示站。
**核心差异化**：古文明 × 科技冲击（带老外看小米工厂、坐 Robotaxi、看火箭发射）。
**香港注册公司**主体，给海外客户信誉度。

---

## ✅ 已完成

### 阶段 1：网站搭建（已完成）
- [x] Astro 项目骨架（BaseLayout / Header / Footer）
- [x] 5 个核心页面：首页 / 路线列表 / 路线详情 / 关于 / 联系
- [x] Content Collections 系统（加路线 = 新建 md 文件）
- [x] SEO 基础：sitemap / robots.txt / Open Graph / canonical
- [x] 移动响应式 + 液态玻璃 UI + Instrument Serif 衬线体

### 阶段 2：内容填充（已完成）
- [x] 13 条研学路线（北京/上海/深圳/广州/成都/西安/杭州/厦门/海南 + 2 跨城 + 2 硬核科技）
- [x] 11+5 张合法图片（Wikimedia Commons，CC-BY-SA/CC0）
- [x] 图片 credits 页（法律合规）
- [x] 按钮组件 Button.astro（WCAG AA 对比度）

### 阶段 3：科技差异化（已完成）
- [x] 首页「Things you can only see in China」科技冲击专区（6 个具体项目）
- [x] 改写北京/上海/深圳路线（加入小米工厂/Apollo/Robotaxi/DJI/洋山港）
- [x] 新增 2 条硬核科技路线：贵州天眼 + 文昌火箭发射

### 阶段 4：信任体系建设（已完成）
- [x] /how-it-works 页（透明 4 步流程 + $150 设计费机制）
- [x] 服务边界声明（不是法律/投资机构）
- [x] 多联系渠道（WhatsApp/Email/WeChat）
- [x] 客户评价占位区

### 阶段 5：部署上线（已完成）
- [x] GitHub 仓库：highertq/china-study-tour
- [x] Cloudflare Pages 自动部署
- [x] 域名配置：china-study-tour.pages.dev
- [x] SEO 域名修复（astro.config / robots / site.config 三处同步）

### 阶段 7：品牌 + 分类体系重构（已完成 ✅）
**背景**：用户决定照抄竞品 goinsidechina.com 的 4 大服务形态分类（因为自家路线是 AI 占位，后期对接真实旅行社），并启用正式品牌名。

**品牌决策**：China Study Tour → **China Crossroads**（中国十字路口）
- tagline："China, where ancient and future meet"
- 语义最丰富：呼应"古老×科技交汇"核心定位
- 跟竞品"Inside China"完全区分开

**分类决策**：放弃上一版的"主题 4 分类"（tech/ancient/family/custom），改成竞品验证过的"服务形态 4 分类"：
- **Private Journeys**（/tours/journeys）：13 条现有路线全部归入，内部用 tags 做主题筛选 chip
- **Local Experiences**（/tours/experiences）：询盘落地页（未来对接真实产品）
- **Business Visits**（/tours/business）：询盘落地页
- **Special-Purpose Trips**（/tours/special）：询盘落地页

**关键设计**：无路线的 3 个分类不用空网格（会伤信任），而是做成内容详实的询盘落地页（学竞品做法：讲清楚能做什么+服务边界+CTA）。

- [x] 品牌全站替换：China Study Tour → China Crossroads
- [x] CATEGORIES 重定义为服务形态 4 分类（带 hasTours 标志区分渲染模式）
- [x] 13 条 md category 全部批量改为 ["journeys"]
- [x] [category].astro 重写：支持双模式渲染（有路线=网格+筛选 chip / 无路线=询盘落地页）
- [x] build 验证：23 页面全部通过

### 阶段 8：内容补全（对标竞品缺口，已完成 ✅）
**背景**：深度分析竞品 goinsidechina.com 后，发现 4 大内容缺口：Travel Help / Destinations / FAQ / 轻量表单。本阶段全部补齐。

- [x] **联系方式更新**：真实电话 +86 151 6815 9750 + 邮箱 mantq@qq.com（之前是占位）
- [x] **SiteNotice 全局公告条**：所有页面顶部显示"网站搭建中"友好提示，降低"信息不完整=不可信"印象
- [x] **CategoryTabs sticky 分类切换条**：放在 /tours 和 4 个分类页顶部，永远可见（解决"分类藏在 hover 下拉里看不见"的问题）
- [x] **Contact 页两段式表单**：顶部轻量表单（Name/Email/一句话）降低门槛 + 折叠详细表单
- [x] **/travel-help 实用指南页**：6 大主题（Payments/Apps/Visa/Transport/Connectivity/Safety），解决老外来中国最大信息焦虑 + SEO 长尾入口
- [x] **/destinations 目的地板块**：总览页 + 3 个核心城市详情页（北京/上海/深圳），学竞品结构（定位→亮点→实用信息→相关路线→周边城市）
- [x] **首页 FAQ 板块**：7 个高频问题（签证/安全/语言/工厂参观/价格等），询盘转化临门一脚
- [x] **导航加 Destinations + Travel Help 入口**
- [x] **README 加待办事项清单**（域名注册/公司注册/真实联系/合作条款等用户自己要做的）
- [x] build 验证：28 页面全部通过

**架构亮点**：destinations 和 tours 都是数据驱动的，加新城市/路线只需往数据文件加一项，自动生成页面 + sitemap。

### 阶段 9：内容扩充（已完成 ✅）
**背景**：补齐剩余目的地城市 + 丰富询盘落地页。

- [x] **新增 5 个目的地城市页**：成都 / 西安 / 杭州 / 广州 / 厦门（加上之前的北京/上海/深圳 = 8 城）
- [x] **新增香港页**：作为公司注册地和南中国路线的入口城市，6 个亮点 + 简化为"home base"定位
- [x] **各城市相互关联**：更新 nearby 引用，让北京↔西安↔成都、广州↔深圳↔香港形成地理网络
- [x] **Experiences 询盘页丰富**：从 3 节扩到 5 节（加咖啡馆创意街区 + 夜市），每节带 emoji 图标，改用卡片网格布局
- [x] **Business 询盘页丰富**：从 4 节扩到 6 节（加多城调度 + 服务边界独立强调），每节带 emoji 图标
- [x] **Special 询盘页**：3 节都加图标保持一致
- [x] **询盘 CTA 升级**：从浅灰方块改成墨黑渐变 + "Ready when you are" 文案
- [x] destinations 总览页去掉"coming soon"，改为"还去海南/贵州/文昌等地"
- [x] 修复 JS 单引号转义 bug（`Shenzhen's` / `Chengdu's` 等破坏字符串，改用弯引号）
- [x] build 验证：34 页面全部通过

**数据状态**：8 个城市页全覆盖现有 13 条路线的目的地，每条路线都能从城市页反向关联到。

---

## 🔄 进行中

（暂无）

---

## 📌 待办（按优先级）

### 🔴 高优先级
- [ ] **信息架构重构**（用户当前需求）
- [ ] **合伙人条款**：跟那位老外谈股权/分工/退出机制（头号商业风险，与技术无关）

### 🟡 中优先级
- [ ] 接 Formspree 让询盘表单真能收邮件
- [ ] 把科创背景（媒体报道、奖项）做成 About 页"科技权威背书"
- [ ] 城市深度页（北京/上海/深圳独立页，吃 SEO 长尾词）

### 🟢 低优先级
- [ ] 接 Google Analytics 4 + Microsoft Clarity
- [ ] 提交 sitemap 到 Google Search Console（SEO 计时器）
- [ ] 注册正式 .com 域名替换 pages.dev

---

## 🎯 关键决策记录

### 决策 1：技术栈选 Astro，不用 WordPress / React
**原因**：Astro 输出纯静态 HTML，加载快，Google Core Web Vitals 评分高，对 SEO 至关重要。React SPA 会扣 SEO 分。

### 决策 2：图片只用合法来源（Wikimedia Commons），不爬同行网站
**原因**：香港公司面向海外，DMCA 投诉会让站下架 + Google 惩罚重复图片 + 毁信誉。

### 决策 3：科技差异化是核心壁垒，不和竞品拼"深度文化游"
**原因**：调研竞品 goinsidechina.com 发现，他们的科技内容是 hedging（含糊）的，明说 DJI 只是"零售级接触"。我们做"真·科技深入"是蓝海。

### 决策 4：先写科技内容，后谈企业合作
**原因**：先用震撼内容吸引询盘，有了客户再拿着需求去谈合作，比空手谈容易十倍。

---

## 📊 竞品对标

| 维度 | 我们 | Inside China（竞品） | 状态 |
|------|------|---------------------|------|
| 科技差异化 | ✅ 13 路线含硬核科技 | ❌ 只做零售级 | **我们领先** |
| 信任体系 | ✅ 已补 how-it-works | ✅ 完整 | 已追平 |
| 信息架构 | ⚠️ 导航薄、产品无分类 | ✅ 4 大产品分类清晰 | **需重构** |
| 内容深度 | ✅ 具体数据+项目名 | ⚠️ hedging 含糊 | 我们领先 |
| 城市覆盖 | 11 城广但浅 | 6 城深 | 各有优劣 |
