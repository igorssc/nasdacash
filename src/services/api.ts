import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer2.nasda.cash/api/",
});
