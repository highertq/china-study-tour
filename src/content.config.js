// =============================================================================
// Content Collections 配置
//
// 【这是这个站 SEO 的核心机制】
// 每一条研学路线 = src/content/tours/ 下的一个 .md 文件。
// 你加一条路线，就新建一个 md 文件，自动生成 /tours/路线名 的页面，自动进 sitemap。
// 文件头部 frontmatter 里填 SEO 关键词，正文就是 Google 收录的内容。
// =============================================================================

import { defineCollection, z } from 'astro:content';

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
