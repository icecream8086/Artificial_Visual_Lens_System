import { createStore } from 'vuex';

export default createStore({
  state: {
    clicked_item_1: false,
    login_captcha_uuid:'',
    captcha_result:'',
  },
  mutations: {
    // 在这里定义如何改变你的变量
    setClicked(state, value) {
      state.clicked_item_1 = value;
    },
    setLoginCaptchaUuid(state, value) {
      state.login_captcha_uuid = value;
    },
    setCaptchaResult(state, value) {
      state.captcha_result = value;
    },
  },
  actions: {
    // 在这里定义异步操作
    setClicked(context, value) {
      context.commit('setClicked', value);
    },
    setLoginCaptchaUuid(context, value) {
      context.commit('setLoginCaptchaUuid', value);
    },
    setCaptchaResult(context, value) {
      context.commit('setCaptchaResult', value);
    },
  },
  getters: {
    // 在这里定义如何获取变量
    getClicked(state) {
      return state.clicked_item_1;
    },
    getLoginCaptchaUuid(state) {
      return state.login_captcha_uuid;
    },
    getCaptchaResult(state) {
      return state.captcha_result;
    },
  },
});