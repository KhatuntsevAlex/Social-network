import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '8e7174e6-3e26-40bf-b6a9-6f67e90b89d0',
  },
})

const usersAPI = {
  
  async getUsers(currentPage = 1, pageSize = 5) {
    return (await instance.get(`users?page=${currentPage}&count=${pageSize}`)).data
  },  

  async unfollow(id) {
    return (await instance.delete(`follow/${id}`)).data
  },

  async follow(id) {
    return (await instance.post(`follow/${id}`)).data
  },
}

export default usersAPI

export const profileAPI = {
  
  async getUserProfile(id) {
    return (await instance.get(`profile/${id}`)).data
  },

  async getStatus(id) {
    return (await instance.get(`profile/status/${id}`)).data
  },

  async updateStatus(status) {
    const response = await instance.put('profile/status', {status})
    return response
  },

  async updatePhoto(photoFile) {
    const form = new FormData()
    form.append("image", photoFile)
    return (await instance.put('profile/photo', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })).data
  },

  async updateInfo(data) {
    return (await instance.put('profile', data)).data
  },
}

export const authAPI = {
  
  async me() {
    return (await instance.get('auth/me')).data
  },

    async login(email, password, rememberMe) {
    return (await instance.post('auth/login', {email, password, rememberMe})).data
  },

  async logout() {
    return (await instance.delete('auth/login')).data
  },
}
