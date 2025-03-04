import httpInstance from "@/utils/http";

// 获取首页分类头部数据的API函数
export function getCategory() {
  // 使用http实例发起请求
  return httpInstance({
    // 请求的API路径
    url: 'home/category/head'
  })
}
