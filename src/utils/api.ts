import instance from "./request";

// 获取文章
export const articleData = () => {
  return instance({
    method: "GET",
    url: "/articleData",
  })
}

