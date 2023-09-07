import axios from "axios";
import { SERVER_URL } from "../utils/constants";

const API = axios.create({ baseURL: SERVER_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const fetchBalanceSheet = (formData) =>
  API.post("/balance_sheet", formData);
export const fetchAccountingSoftwareList = () =>
  API.get("/balance_sheet/fetch-list");
export const submitApplication = (formData) => API.post("/outcome", formData);
