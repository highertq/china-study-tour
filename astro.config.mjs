// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ SEO 关键：把这里改成你的真实域名。
// 上线前必须改！它影响 sitemap、canonical 链接、Open Graph 分享卡片的绝对地址。
const SITE = 'https://www.chinastudytour.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
