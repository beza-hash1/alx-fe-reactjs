import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
})


export async function fetchUserData(username) {
  if (!username) throw new Error('username-required')
  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY
    const headers = token ? { Authorization: `token ${token}` } : {}

    const res = await api.get(`/users/${encodeURIComponent(username)}`, {
      headers,
    })
    return res.data
  } catch (err) {
    if (err.response && err.response.status === 404) throw new Error('Not Found')
    if (err.response && err.response.data && err.response.data.message)
      throw new Error(err.response.data.message)
    throw err
  }
}


 
export async function searchUsersAdvanced({ username, location, minRepos = 0, per_page = 12, page = 1 }) {
  if (!username) return []

  try {
    const token = import.meta.env.VITE_APP_GITHUB_API_KEY
    const headers = token ? { Authorization: `token ${token}` } : {}

    
    let q = `${username} in:login`
    if (location) q += ` location:${location}`
    if (minRepos > 0) q += ` repos:>=${minRepos}`

    const res = await api.get('/search/users', {
      params: { q, per_page, page },
      headers,
    })

    return res.data.items || []
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message)
      throw new Error(err.response.data.message)
    throw err
  }
}
