# China Study Tour — 项目进度记录

> 每次更新都会维护这个文档。记录：做了什么、为什么这么做、待办什么、关键决策。

**项目仓库**：https://github.com/highertq/china-study-tour
**线上地址**：https://china-study-tour.pages.dev
**技术栈**：Astro + Tailwind CSS v4 + Cloudflare Pages
**最后更新**：2026-07-18（信息架构重构）

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

### 阶段 6：信息架构重构（已完成 ✅）
**背景**：对照竞品 goinsidechina.com，发现自家"信息不清晰"——13 条路线平铺、导航薄、无产品分类。
**关键决策**：不照搬竞品的"服务形态"4 分类（他们 Journeys/Experiences/Business/Special），因为我们的 13 条路线全是多日定制游，硬套会有 3 个空分类。改成**主题维度 4 分类**：Tech Deep Dives / Ancient Wonders / Family Tours / Custom Journeys。

- [x] 数据治理：schema 新增 `category` 字段（zod enum，4 选多），13 条 md 全部归类
- [x] 修复 tag 命名不一致（`adult` → `professional`）
- [x] lib/tours.js 新增 `getToursByCategory` / `getAllCategories` / `getCategoryWithTours`
- [x] 抽取 `TourCard.astro` 复用组件（消除首页和列表页的重复标记）
- [x] 新建 `[category].astro` 动态路由，生成 4 个分类页（/tours/tech 等）
- [x] **重命名 `[...slug].astro` → `[slug].astro` 避免 catch-all 与 `[category]` 路由冲突**
- [x] 改造 `/tours` 总览页：从平铺 13 卡 → 按 4 分类分组展示 + 锚点跳转
- [x] 重构 Header：Tours 改为 hover 下拉菜单（含 4 子分类 + 描述），手机端汉堡菜单也展开子分类
- [x] 首页加"产品矩阵 bar"（Hero 下方 4 张分类入口卡，学竞品 WHAT WE DO 结构）
- [x] 分类页底部加"也看看其他类型"横向引导（补竞品没做的弱点）
- [x] site.config.js nav 扩展为支持 `children` 子菜单结构
- [x] build 验证：23 页面全部通过（原 19 + 新增 4 分类页）

**路线分类分布**：tech 6+ / ancient 7 / family 9 / custom 4（路线可跨分类，无空分类）

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
