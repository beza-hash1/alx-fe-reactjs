import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000
})

export async function searchUsers(query, per_page = 12) {
  if (!query) return []
  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY
    const headers = token ? { Authorization: `token ${token}` } : {}

    const res = await api.get('/search/users', {
      params: { q: query, per_page },
      headers
    })
    return res.data.items || []
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      throw new Error(err.response.data.message)
    }
    throw err
  }
}
