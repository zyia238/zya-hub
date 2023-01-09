import { IBlog } from "types";
import { request } from "../utils/request";

export const getBlogData : () => Promise<{data:IBlog[]}> = () => {
  return request({
    url: "/BlogsData/BlogsData.json",
  });
};
