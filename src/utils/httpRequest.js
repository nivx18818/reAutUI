import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const request = async (method, url, data, config) => {
  try {
    const res = await httpRequest({ method, url, data, ...config });
    return res?.data;
  } catch (error) {
    console.error(error);
    return error?.response?.data;
  }
};

const get = async (url, config) => request("GET", url, null, config);
const post = async (url, data, config) => request("POST", url, data, config);
const put = async (url, data, config) => request("PUT", url, data, config);
const patch = async (url, data, config) => request("PATCH", url, data, config);
const del = async (url, config) => request("DELETE", url, null, config);

export default {
  get,
  post,
  put,
  patch,
  del,
};
