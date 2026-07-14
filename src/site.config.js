// =============================================================================
// 全站配置：把你的公司信息集中放在这里，所有页面都从这里读取。
// 改公司名、联系方式、域名时，只需要改这一个文件。
// =============================================================================

export const SITE = {
  // --- 基础信息 ---
  name: 'China Study Tour',
  // 一句话价值主张（首页 Hero 也会用到）。这是你所有 SEO 内容的「锚点」。
  tagline:
    'Travel China where ancient civilization meets cutting-edge technology',
  // 25-30 字内的副标题，解释你具体做什么
  subtitle:
    'Small-group study tours for international travelers — from ancient wonders to futuristic cities, with a pre-trip Chinese starter course.',
  description:
    'Join small-group study tours to China. Experience the collision of 5,000 years of civilization and tomorrow’s technology — the Great Wall, Terracotta Warriors, plus robotic factories, AI labs and smart cities. Hong Kong registered company for your peace of mind.',

  // --- 域名（上线前改成真实域名，和 astro.config.mjs 保持一致）---
  url: 'https://www.chinastudytour.com',
  locale: 'en', // 目标客户是老外，整站英文

  // --- 联系方式（占位，换成真实的）---
  email: 'hello@chinastudytour.com',
  whatsapp: '+852-0000-0000', // 香港号码更可信
  // 香港注册地址（给老外信誉度用的，上线前换成真实办公地址）
  address: {
    line1: 'Room 1205, Cyberport',
    line2: 'Hong Kong SAR, China',
  },

  // --- 社交媒体（没有就留空，模板会自动隐藏）---
  social: {
    youtube: '', // 视频对旅游 SEO 很重要，建议后续做
    instagram: '',
    facebook: '',
  },

  // --- 导航栏 ---
  nav: [
    { label: 'Tours', href: '/tours' },
    { label: 'Why Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
