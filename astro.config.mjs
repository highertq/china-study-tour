// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ⚠️ SEO 关键：这里必须是你真实的部署域名。
// 它影响 sitemap、canonical 链接、Open Graph 分享卡片的绝对地址。
const SITE = 'https://china-study-tour.pages.dev';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
