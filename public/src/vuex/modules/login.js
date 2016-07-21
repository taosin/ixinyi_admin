const state = {
  loginResult: []
};
// mutations
const mutations = {
  // 登录
  doLogin (allState, result) {
    allState.loginResult = result;
  }
};
export default {
  state,
  mutations
};
