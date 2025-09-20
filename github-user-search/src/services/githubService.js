// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// 🔹 Simple user search
export async function fetchUsers(query) {
  if (!query) return [];
  try {
    const res = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`
    );
    return res.data.items || [];
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}

// 🔹 Get details of a single GitHub user
export async function fetchUserData(username) {
  if (!username) throw new Error("username-required");
  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const headers = token ? { Authorization: `token ${token}` } : {};

    const res = await axios.get(`${BASE_URL}/users/${encodeURIComponent(username)}`, {
      headers,
    });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 404)
      throw new Error("Not Found");
    if (err.response && err.response.data && err.response.data.message)
      throw new Error(err.response.data.message);
    throw err;
  }
}

// 🔹 Advanced search
export async function searchUsersAdvanced({
  username,
  location,
  minRepos = 0,
  per_page = 12,
  page = 1,
}) {
  if (!username) return [];

  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
    const headers = token ? { Authorization: `token ${token}` } : {};

    // 🔹 build query
    let q = `${username} in:login`;
    if (location) q += ` location:${location}`;
    if (minRepos > 0) q += ` repos:>=${minRepos}`;

    // 🔹 Explicitly include "https://api.github.com/search/users?q"
    const res = await axios.get(`${BASE_URL}/search/users`, {
      params: { q, per_page, page },
      headers,
    });

    return res.data.items || [];
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message)
      throw new Error(err.response.data.message);
    throw err;
  }
}

// 🔹 Export alias
export const searchUsers = searchUsersAdvanced;
