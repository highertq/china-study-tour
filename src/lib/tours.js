// =============================================================================
// tours 数据访问层
// 把"读取路线列表"的逻辑集中在这里，页面里只调用，不重复写
// =============================================================================

import { getCollection } from 'astro:content';
import { CATEGORIES } from '../content.config.js';

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

// =============================================================================
// 分类查询（信息架构重构新增）
// =============================================================================

// 按分类 ID 取路线（一条路线可属于多个分类）
export async function getToursByCategory(categoryId) {
  const tours = await getAllTours();
  return tours.filter((t) => t.data.category.includes(categoryId));
}

// 取所有分类，附带每个分类的路线数和路线（用于分类页、导航、首页矩阵）
export async function getAllCategories() {
  const tours = await getAllTours();
  return CATEGORIES.map((cat) => ({
    ...cat,
    tours: tours.filter((t) => t.data.category.includes(cat.id)),
    count: tours.filter((t) => t.data.category.includes(cat.id)).length,
  }));
}

// 按 category 单个分类取（带分类元信息）
export async function getCategoryWithTours(categoryId) {
  const all = await getAllCategories();
  return all.find((c) => c.id === categoryId);
}
