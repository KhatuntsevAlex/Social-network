import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '8e7174e6-3e26-40bf-b6a9-6f67e90b89d0',
  },
})

const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },  

  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data)
  },

  follow(id) {
    return instance.post(`follow/${id}`).then(response => response.data)
  },
}

export default usersAPI

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then(response => response.data)
  },

  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(response => response.data)
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status}).then(response => response.data)
  },
}

export const authAPI = {
  me() {
    return instance.get('auth/me').then(response => response.data)
  },

  login(email, password, rememberMe) {
    return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data)
  },

  logout() {
    return instance.delete('auth/login').then(response => response.data)
  },
}
