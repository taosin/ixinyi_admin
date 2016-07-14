const state = {
  addResult: [],
  result:[]
};
// mutations
const mutations = {
  // 添加分类
  addCate (allState, result) {
    allState.addResult = result;
  },
  queryCates (allState, result) {
    allState.result = result;
  },
};

export default {
  state,
  mutations
};
