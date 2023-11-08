// store.js

import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      token: null,
      uid: null,
      is_admin: false,
      pub_key:null,
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
    },
    setPubKey(state, pub_key) {
      state.pub_key = pub_key
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
    },
    updatePubKey({ commit }, pub_key) {
      commit('setPubKey', pub_key)
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
    },
    getPubKey(state) {
      return state.pub_key
    }
  }
})

export default store
