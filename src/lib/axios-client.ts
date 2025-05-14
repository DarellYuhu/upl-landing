import axios from "axios";
export const AxiosClient = axios.create({
  baseURL: process.env.STRAPI_BASE_API,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  },
});
