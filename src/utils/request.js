import axios from "axios";

export const request = (options) => {
  const instance = axios.create({
    baseURL: "/",
    timeout: 10000,
  });

  return instance(options);
};
