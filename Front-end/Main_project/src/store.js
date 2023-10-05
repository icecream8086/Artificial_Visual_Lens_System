// store.js

import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      token: null,
      uid: null,
      is_admin: false
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUid(state, uid) {
      state.uid = uid
    },
    setIsAdmin(state, isAdmin) {
      state.is_admin = isAdmin
    }
  },
  actions: {
    updateToken({ commit }, token) {
      commit('setToken', token)
    },
    updateUid({ commit }, uid) {
      commit('setUid', uid)
    },
    updateIsAdmin({ commit }, isAdmin) {
      commit('setIsAdmin', isAdmin)
    }
  },
  getters: {
    getToken(state) {
      return state.token
    },
    getUid(state) {
      return state.uid
    },
    getIsAdmin(state) {
      return state.is_admin
    }
  }
})

export default store
