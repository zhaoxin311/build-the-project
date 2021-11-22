//app.js
// 标签栏
const state = {
  visitedViews: [],
};
const mutations = {
  // 添加tab
  ADD_VISITED_VIEWS: (state, view) => {
    // 判断添加的tab如果路径已经存在则return
    if (state.visitedViews.some((v) => v.path === view.path)) return;
    // 否则添加
    state.visitedViews.push({ name: view.name, path: view.path });
  },
  // 删除tab
  DEL_VISITED_VIEWS: (state, view) => {
    // entries()方法返回数组中的每一项键值对
    // splice()方法添加或删除，格式splice(i,i,obj,obj···),前两个是两个数字，后面是元素，第一个数字代表从第几个删除或添加，第二个数字代表删除几个元素
    // 两个数字后面的元素代表添加这些元素，返回值是被删除掉的元素
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        // 返回被删掉的数组元素
        state.visitedViews.splice(i, 1);
        break;
      }
    }
  },
};
const actions = {
  addVisitedViews: ({ commit }, view) => {
    commit("ADD_VISITED_VIEWS", view);
  },
  delVisitedViews: ({ commit }, view) => {
    commit("DEL_VISITED_VIEWS", view);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
