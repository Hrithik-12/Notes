import axios from "axios";

const API = axios.create({
//   baseURL: "http://127.0.0.1:8000", // Backend URL
baseURL: "https://notes-42li.onrender.com"

});

export default API;
