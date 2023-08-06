// store.js

import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      token: null
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    updateToken({ commit }, token) {
      commit('setToken', token)
    }
  },
  getters: {
    getToken(state) {
      return state.token
    }
  }
})

export default store
