// src/config.js
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "" // for production (same domain)
    : "http://localhost:5000"; // for local development

export default API_BASE_URL;
