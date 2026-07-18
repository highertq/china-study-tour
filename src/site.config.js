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

  // --- 域名（和 astro.config.mjs 保持一致）---
  url: 'https://china-study-tour.pages.dev',
  locale: 'en', // 目标客户是老外，整站英文

  // --- 联系方式（占位，上线前换成真实的）---
  email: 'hello@chinastudytour.com',
  whatsapp: '+852-0000-0000',   // 香港号码更可信
  wechat: 'ChinaStudyTour',     // 微信号
  // 香港注册地址（给老外信誉度用的，上线前换成真实办公地址）
  address: {
    line1: 'Room 1205, Cyberport',
    line2: 'Hong Kong SAR, China',
  },

  // 多联系渠道：覆盖老外的不同习惯（学竞品 Inside China）
  // WhatsApp：欧美老外最常用，快速问询
  // Email：正式询盘 / 详细行程
  // WeChat：华人客户 / 已在华老外
  contactChannels: [
    { id: 'whatsapp', label: 'WhatsApp', handle: '+852-0000-0000', note: 'Quick questions, reply within hours' },
    { id: 'email', label: 'Email', handle: 'hello@chinastudytour.com', note: 'Detailed inquiries & itineraries' },
    { id: 'wechat', label: 'WeChat', handle: 'ChinaStudyTour', note: 'For Chinese speakers & in-country travelers' },
  ],

  // --- 导航栏 ---
  nav: [
    { label: 'Tours', href: '/tours' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Why Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
