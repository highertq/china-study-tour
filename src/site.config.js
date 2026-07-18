// =============================================================================
// 全站配置：把你的公司信息集中放在这里，所有页面都从这里读取。
// 改公司名、联系方式、域名时，只需要改这一个文件。
// =============================================================================

export const SITE = {
  // --- 基础信息 ---
  // 品牌：China Crossroads（中国十字路口）—— 古老文明与未来科技的交汇点
  name: 'China Crossroads',
  // 一句话价值主张（首页 Hero 也会用到）。这是你所有 SEO 内容的「锚点」。
  tagline: 'China, where ancient and future meet',
  // 25-30 字内的副标题，解释你具体做什么
  subtitle:
    'Private China journeys where 5,000 years of civilization collide with tomorrow’s technology — designed for curious international travelers.',
  description:
    'China Crossroads designs private China journeys that pair ancient wonders with the technology of tomorrow. The Great Wall and robot factories, the Terracotta Army and driverless taxis, all in one trip. Hong Kong registered, English-speaking guides, transparent pricing.',

  // --- 域名（和 astro.config.mjs 保持一致）---
  url: 'https://china-study-tour.pages.dev',
  locale: 'en', // 目标客户是老外，整站英文

  // --- 联系方式（真实信息）---
  email: 'mantq@qq.com',
  phone: '+86 151 6815 9750',   // 中国手机（可加 WhatsApp/微信）
  phoneRaw: '+8615168159750',   // 用于 tel: 链接
  wechat: 'ChinaCrossroads',    // 微信号
  // 香港注册地址（上线前换成真实办公地址）
  address: {
    line1: 'Hong Kong SAR (office pending)',
    line2: 'China',
  },

  // 多联系渠道：覆盖老外的不同习惯（学竞品 Inside China）
  contactChannels: [
    { id: 'whatsapp', label: 'WhatsApp / Phone', handle: '+86 151 6815 9750', note: 'Quick questions, reply within hours' },
    { id: 'email', label: 'Email', handle: 'mantq@qq.com', note: 'Detailed inquiries & itineraries' },
    { id: 'wechat', label: 'WeChat', handle: 'ChinaCrossroads', note: 'For Chinese speakers & in-country travelers' },
  ],

  // --- 导航栏 ---
  // Tours 是带子菜单的下拉（hover 展开 4 个服务形态分类），其他是普通链接
  nav: [
    {
      label: 'Tours',
      href: '/tours',
      children: [
        { label: 'Private Journeys', href: '/tours/journeys', desc: 'Multi-day China, built around you' },
        { label: 'Local Experiences', href: '/tours/experiences', desc: 'Half-day & full-day city immersions' },
        { label: 'Business Visits', href: '/tours/business', desc: 'On-the-ground support for business' },
        { label: 'Special-Purpose Trips', href: '/tours/special', desc: 'Roots, creative shoots, milestones' },
      ],
    },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Travel Help', href: '/travel-help' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Why Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};
