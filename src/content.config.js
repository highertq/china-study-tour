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
// 4 大产品分类定义（信息架构重构的核心）
// 这是全站唯一的分类定义来源，nav、分类页、首页都从这里读
// 路线通过 frontmatter 的 category 字段归属到一个或多个分类
// =============================================================================
export const CATEGORIES = [
  {
    id: 'tech',
    name: 'Tech Deep Dives',
    tagline: 'Where tomorrow is being built — today',
    description:
      'Robotaxis on public roads, the world’s largest automated port, drone capitals, megafactories, rocket launches. These tours go inside the China most travelers never see.',
    order: 1,
  },
  {
    id: 'ancient',
    name: 'Ancient Wonders',
    tagline: '5,000 years of civilization, up close',
    description:
      'The Great Wall, the Terracotta Army, the Forbidden City, ancient gardens and Silk Road ports. Walk through the civilization that shaped East Asia.',
    order: 2,
  },
  {
    id: 'family',
    name: 'Family Tours',
    tagline: 'Built for curious kids and their parents',
    description:
      'Pandas, the Great Wall toboggan, dim sum workshops, science museums. Tours paced for families, with child-friendly meals and shorter travel days.',
    order: 3,
  },
  {
    id: 'custom',
    name: 'Custom Journeys',
    tagline: 'Multi-city grand tours, designed around you',
    description:
      'Combine cities and themes into one seamless trip. Our Grand Tour, the South China Triangle, or a fully bespoke itinerary built from your idea.',
    order: 4,
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
      // ⭐ 主分类（信息架构核心）：路线归属到 4 大分类中的一个或多个
      // 值必须是 tech / ancient / family / custom 之一（来自上面 CATEGORIES）
      category: z.array(z.enum(['tech', 'ancient', 'family', 'custom'])).default([]),
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
