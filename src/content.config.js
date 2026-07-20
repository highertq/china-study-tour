// =============================================================================
// Content Collections 配置
//
// 【这是这个站 SEO 的核心机制】
// 每一条研学路线 = src/content/tours/ 下的一个 .md 文件。
// 你加一条路线，就新建一个 md 文件，自动生成 /tours/路线名 的页面，自动进 sitemap。
// 文件头部 frontmatter 里填 SEO 关键词，正文就是 Google 收录的内容。
// =============================================================================

import { defineCollection, z } from 'astro:content';

// =============================================================================
// 4 大产品分类（学竞品 goinsidechina.com 的服务形态维度）
// 这是全站唯一的分类定义来源，nav、分类页、首页都从这里读
//
// 分类逻辑（服务形态 / 客户来访目的，不是主题）：
//   journeys  — 多日定制游（含全部 13 条现有路线，内部用 tags 筛选主题）
//   experiences — 单日/半日城市体验（当前是询盘落地页，未来对接真实产品）
//   business  — 商务访问（询盘落地页）
//   special   — 特殊目的（寻根/拍摄/里程碑，询盘落地页）
// =============================================================================
export const CATEGORIES = [
  {
    id: 'journeys',
    name: 'Private Journeys',
    tagline: 'Multi-day China, built around you',
    description:
      'Multi-day private journeys across China — one city or several, family-paced or deep-dive. Designed by people who actually live here, with access to the factories, hidden neighborhoods, and local specialists most foreign travelers never reach. Start from one of our sample routes, or design your own from a rough idea.',
    order: 1,
    hasTours: true, // 有真实路线，直接展示
  },
  {
    id: 'experiences',
    name: 'Local Experiences',
    tagline: 'Half-day or full-day city experiences',
    description:
      'Lighter-touch, in-city experiences led by a local host — food walks, neighborhood discoveries, single-theme deep dives. Ideal if you\'re already in China for business or transit and want a few authentic hours in the city you\'re in.',
    order: 2,
    hasTours: false, // 询盘落地页（未来对接真实产品）
  },
  {
    id: 'business',
    name: 'Business Visits',
    tagline: 'On-the-ground support for business travelers',
    description:
      'For entrepreneurs, sourcing teams, trade-fair visitors, and delegations: we coordinate meetings, factory and showroom visits, interpretation, transport, and business meals — while you focus on the deal.',
    order: 3,
    hasTours: false,
  },
  {
    id: 'special',
    name: 'Special-Purpose Trips',
    tagline: 'Trips with a personal reason',
    description:
      'Not every China trip is a vacation. Family roots and hometown visits, creative and portrait shoots, anniversaries and personal milestones. We shape the logistics around your reason for coming.',
    order: 4,
    hasTours: false,
  },
];

// 定义 tours 集合的字段约束（zod schema）
// 这样你写 md 时填错字段，构建时会报错提醒你
const tours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),                    // 路线名，会作为 <h1> 和 SEO title
    seoTitle: z.string().optional(),      // 给 Google 看的标题（可选，默认用 title）
    seoDescription: z.string(),           // 给 Google 看的描述，150 字以内，含关键词
    shortDescription: z.string(),         // 卡片上的简短介绍（一两句）
    duration: z.number(),                 // 天数
    cities: z.string(),                   // 经过城市，例如 "Beijing · Shanghai"
    priceFrom: z.number(),                // 起步价（美元）
      bestFor: z.string().optional(),       // 适合人群：Families / Students / Adults
      tags: z.array(z.string()).default([]), // 标签：tech, ancient, family 等，用于筛选
      // ⭐ 主分类（信息架构核心）：路线归属到 4 大服务形态分类中的一个或多个
      // 当前所有 13 条路线都属于 journeys（多日定制游）
      // 值必须是 journeys / experiences / business / special 之一
      category: z.array(z.enum(['journeys', 'experiences', 'business', 'special'])).default(['journeys']),
      featured: z.boolean().default(false), // 是否在首页推荐
    // 图片路径：指向 public 目录下的文件，例如 /images/tours/beijing.jpg
    // 不填则用占位图。SEO 提示：图片文件名建议用英文关键词，如 beijing-great-wall.jpg
    heroImage: z.string().optional(),
    cardImage: z.string().optional(),     // 列表/首页卡片图（可选，默认用 heroImage）
      itinerary: z.array(
        z.object({
          day: z.number(),
          title: z.string(),
          details: z.string(),
        })
      ).default([]),                         // 行程表
      // FAQ：FAQ 对 SEO 非常重要，常被 Google 抓成 rich snippet
      faqs: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
    }),
});

export const collections = { tours };
