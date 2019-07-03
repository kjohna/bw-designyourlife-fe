import axios from "axios";

const apiURL = process.env.API_URL;

const instance = axios.create({
  baseURL: apiURL
});

export default instance;
