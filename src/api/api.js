import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "8e7174e6-3e26-40bf-b6a9-6f67e90b89d0"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  me() {
    return instance.get(`auth/me`).then(response => response.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },

  getUserProfile(id) {
    return instance.get(`profile/` + id).then(response => response.data);
  },
};
