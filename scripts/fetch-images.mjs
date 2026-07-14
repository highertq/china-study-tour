#!/usr/bin/env node
/**
 * =============================================================================
 * fetch-images.mjs —— 合法图片来源获取脚本（v2，使用 Wikimedia 搜索 API）
 *
 * 【法律说明】
 *  本脚本只从 Wikimedia Commons 下载「自由授权」(CC-BY-SA / CC-BY / 公有领域) 图片。
 *  这些是维基百科同款图片来源，商用合法。不属于盗图/爬同行网站。
 *
 * 【为什么不用硬编码 URL】
 *  Wikimedia 的文件名经常变、URL 偶尔失效。用搜索 API 动态查找更可靠。
 *
 * 【使用方法】
 *   node scripts/fetch-images.mjs           # 下载所有图片
 *   node scripts/fetch-images.mjs --list    # 只列出会搜什么，不下载
 * =============================================================================
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const IMAGES_DIR = join(ROOT, 'public', 'images', 'tours');

const UA = 'ChinaStudyTourBot/1.0 (https://chinastudytour.com; contact@chinastudytour.com)';

// =============================================================================
// 搜索清单：文件名 → 搜索关键词
// 关键词选高知名度地标，确保搜到高质量图片
// =============================================================================
const SEARCH_MAP = {
  'beijing-ancient-tech.jpg': 'Great Wall China Badaling',
  'shanghai-future-past.jpg': 'Shanghai Bund Pudong skyline',
  'shenzhen-china-speed.jpg': 'Shenzhen skyline city',
  'guangzhou-maritime-silk-road.jpg': 'Canton Tower Guangzhou',
  'chengdu-pandas-sanxingdui.jpg': 'giant panda Chengdu',
  'xian-ancient-capital.jpg': 'Terracotta Army Xian',
  'hangzhou-silk-alibaba.jpg': 'West Lake Hangzhou',
  'xiamen-tulou-island.jpg': 'Fujian Tulou',
  'haikou-hainan.jpg': 'Hainan tropical beach',
  'grand-tour-ancient-tech.jpg': 'Great Wall China Mutianyu',
  'south-china-tech-culture.jpg': 'Hong Kong skyline Victoria Harbour',
};

// 从 Wikimedia 搜索 API 拿一张缩略图 URL
async function searchImageUrl(keyword) {
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&generator=search' +
    '&gsrsearch=' + encodeURIComponent(keyword + ' filetype:bitmap') +
    '&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1280&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`search HTTP ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages;
  if (!pages) throw new Error('no results');
  // 取第一个有 thumburl 的结果
  for (const k of Object.keys(pages)) {
    const info = pages[k]?.imageinfo?.[0];
    if (info?.thumburl) {
      const license = info.extmetadata?.LicenseShortName?.value || 'unknown';
      return { thumbUrl: info.thumburl, license, desc: pages[k]?.title };
    }
  }
  throw new Error('no image found');
}

async function download(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(destPath, buf);
  return buf.length;
}

const listOnly = process.argv.includes('--list');

async function main() {
  mkdirSync(IMAGES_DIR, { recursive: true });

  console.log(`\n图片目录: ${IMAGES_DIR}`);
  console.log(`待获取: ${Object.keys(SEARCH_MAP).length} 张\n`);

  if (listOnly) {
    for (const [name, kw] of Object.entries(SEARCH_MAP)) {
      console.log(`  ${name}`);
      console.log(`    搜索: ${kw}`);
    }
    return;
  }

  const results = [];
  let ok = 0, fail = 0;

  for (const [name, kw] of Object.entries(SEARCH_MAP)) {
    const dest = join(IMAGES_DIR, name);
    process.stdout.write(`  ${name.padEnd(40)} `);
    try {
      const { thumbUrl, license, desc } = await searchImageUrl(kw);
      const size = await download(thumbUrl, dest);
      console.log(`✓ ${(size / 1024).toFixed(0)} KB  [${license}]`);
      results.push({ name, desc, license, ok: true });
      ok++;
    } catch (e) {
      console.log(`✗ ${e.message}`);
      results.push({ name, kw, ok: false });
      fail++;
    }
  }

  // 生成 credits.json，方便后续在页面底部补图片来源说明（法律合规）
  const credits = results.filter(r => r.ok).map(r => ({
    file: r.name,
    source: 'Wikimedia Commons',
    description: r.desc,
    license: r.license,
  }));
  writeFileSync(join(IMAGES_DIR, 'credits.json'), JSON.stringify(credits, null, 2));

  console.log(`\n完成: ${ok} 成功, ${fail} 失败`);
  console.log(`图片来源记录已写入: public/images/tours/credits.json`);
  console.log('\n⚠️  法律合规提醒:');
  console.log('   这些图片来自 Wikimedia Commons，多为 CC-BY-SA（需署名）或公有领域。');
  console.log('   上线前请在 footer 加一个 /credits 页面，按 credits.json 列出来源。');
}

main();
