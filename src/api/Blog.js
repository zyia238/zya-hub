import { request } from "../utils/request";

export const getBlogData = () => {
  return request({
    url: "/BlogsData/BlogsData.json",
  });
};
