// =============================================================================
// tours 数据访问层
// 把"读取路线列表"的逻辑集中在这里，页面里只调用，不重复写
// =============================================================================

import { getCollection } from 'astro:content';

// 取所有路线，按价格排序
export async function getAllTours() {
  const tours = await getCollection('tours');
  return tours.sort((a, b) => a.data.priceFrom - b.data.priceFrom);
}

// 取前 N 条"推荐"路线（首页用）
export async function getFeaturedTours(limit = 3) {
  const tours = await getCollection('tours');
  const featured = tours.filter((t) => t.data.featured);
  // 如果设置了 featured 的不够，就用其他路线补齐
  const result = featured.length >= limit ? featured.slice(0, limit) : [...featured, ...tours.filter((t) => !t.data.featured)].slice(0, limit);
  return result;
}
