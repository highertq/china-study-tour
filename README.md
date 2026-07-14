# China Study Tour — 展示引流站

针对想来中国旅游的老外，做 Google SEO 引流的研学路线展示网站。
技术栈：**Astro + Tailwind CSS v4**，部署目标是 Cloudflare Pages / Vercel。

---

## 🚀 5 分钟跑起来

```bash
cd study-tour-site
npm install        # 第一次要装依赖
npm run dev        # 启动开发服务器
```

浏览器打开 `http://localhost:4321` 就能看到网站。

---

## 📂 项目结构（只看你需要改的）

```
study-tour-site/
├── src/
│   ├── content/tours/          ⭐ 加路线在这里（新建 .md 文件）
│   │   ├── beijing-ancient-tech.md
│   │   └── shanghai-future-past.md
│   ├── pages/
│   │   ├── index.astro         首页
│   │   ├── about.astro         关于我们
│   │   ├── contact.astro       联系/询盘
│   │   └── tours/
│   │       ├── index.astro     路线列表页
│   │       └── [...slug].astro 路线详情页（自动生成）
│   ├── components/
│   │   ├── Header.astro        顶部导航
│   │   └── Footer.astro        页脚
│   ├── layouts/
│   │   └── BaseLayout.astro    页面骨架（SEO meta 在这里）
│   ├── styles/global.css       全局样式 + 主题色
│   └── site.config.js          ⭐ 公司信息全在这里改
├── public/
│   ├── robots.txt              给 Google 看的爬虫规则
│   └── favicon.svg
└── astro.config.mjs            站点域名配置
```

---

## ✏️ 你日常要做的事（不需要懂太多代码）

### 1. 改公司信息（一次性）
打开 `src/site.config.js`，把里面的邮箱、WhatsApp、香港地址、社交链接换成真实的。

### 2. 上线前改域名（一次性）
- `astro.config.mjs` 里的 `SITE`
- `src/site.config.js` 里的 `url`
- `public/robots.txt` 里的 sitemap 地址

### 3. 加一条新研学路线（最常做的事）⭐
在 `src/content/tours/` 里**新建一个 .md 文件**，文件名就是网址（比如 `xian-heritage.md` → `/tours/xian-heritage`）。
照着已有的 `beijing-ancient-tech.md` 抄一份，改内容即可。保存后网页自动更新。

**写 md 时 SEO 重点**：
- `seoTitle`：给 Google 看的标题，含关键词，比如 "7-Day Beijing Study Tour: Great Wall & AI Labs"
- `seoDescription`：150 字以内描述，自然包含 "China study tour" 等关键词
- `faqs`：常见问题，Google 会抓成搜索结果里的折叠问答（rich snippet），对排名很有帮助

### 4. 改主题色
打开 `src/styles/global.css`，改 `@theme` 里的颜色变量。当前：
- 朱红 `vermilion` —— 古文明，按钮/强调
- 墨青 `ink` —— 科技，文字/背景
- 铜金 `bronze` —— 点缀

### 5. 图片管理 ⭐

**重要：绝对不要从同行网站爬图！** 原因：
1. 法律风险：香港公司面向海外，DMCA 投诉会让整个站被下架
2. SEO 反效果：Google 能识别重复图片，排名不升反降
3. 毁信誉：被发现盗图，所有信誉建设归零

**合法图片来源（按推荐度排序）**：
| 来源 | 网址 | 说明 |
|------|------|------|
| Wikimedia Commons | commons.wikimedia.org | 中国地标图最全，CC-BY-SA/公有领域，商用合法 |
| Unsplash | unsplash.com | 现代城市/科技/人物图，免费商用 |
| Pexels | pexels.com | 同 Unsplash |
| 自己拍/请摄影师拍 | —— | **最理想**，原创图 SEO 加分最大 |

**当前项目的图片**：已经从 Wikimedia Commons 下载了 11 张城市地标图到 `public/images/tours/`，对应的版权信息记录在 `src/data/credits.json`（和 `public/images/tours/credits.json`），并在 `/credits` 页面署名展示（CC-BY-SA 合规要求）。

**替换某张图片**：
1. 把新图片放到 `public/images/tours/`，文件名保持不变（比如 `beijing-ancient-tech.jpg`）
2. 如果换了来源，更新 `src/data/credits.json` 里对应那一条
3. 建议尺寸：宽 1280px，比例 16:10（卡片）/ 21:9（详情页大图）

**下载更多合法图片**：
```bash
node scripts/fetch-images.mjs           # 重新下载所有图片
node scripts/fetch-images.mjs --list    # 只看搜索关键词，不下载
```
脚本会自动写入 credits 记录。如果要加新路线的新图片，在 `scripts/fetch-images.mjs` 的 `SEARCH_MAP` 里加一行即可。

---

## 📈 SEO 检查清单（上线前对照）

- [ ] `astro.config.mjs` 的 `site` 改成真实域名
- [ ] `public/robots.txt` 的 sitemap 地址改成真实域名
- [ ] 每个页面的 title / description 都含关键词（已默认配好，加新路线时注意）
- [ ] 提交 sitemap 到 [Google Search Console](https://search.google.com/search-console)
- [ ] 准备 og-default.jpg（1200×630）放到 public/ 用于社交分享
- [ ] 给每条路线配真实图片（16:10 比例）
- [ ] 装好 Google Analytics 4 / Microsoft Clarity（看流量来源）

---

## 🌐 部署（上线）

最简单：**Cloudflare Pages**（免费、全球 CDN、对海外老外访问快）
1. 把代码推到 GitHub
2. Cloudflare Pages → 连接 GitHub 仓库
3. 构建命令填 `npm run build`，输出目录填 `dist`
4. 绑定你的域名

---

## ❓ 常见问题

**Q: 为什么不用 WordPress？**
A: WordPress 对纯展示站来说太重，安全漏洞多，且对 SEO 速度评分不友好。Astro 输出纯静态 HTML，加载极快，Google 的 Core Web Vitals 评分天然高，这对 SEO 排名影响很大。

**Q: 以后要加"在线预订/支付"怎么办？**
A: 现在的询盘表单是第一步。等真有客户询盘了，再按需求加：可以用 Calendly 嵌入式预订、Stripe 支付链接，都不需要大改架构。

**Q: 中英双语怎么加？**
A: 当前是英文优先（目标客户是老外）。中文版可以等业务跑起来后，用 Astro 的 i18n 功能再加，不影响现在。
