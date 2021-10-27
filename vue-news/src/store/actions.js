import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index";

export default {
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = fetchUserInfo(name);
    commit("SET_USER", response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, item) {
    const response = fetchItemInfo(item);
    commit("SET_ITEM", response.data);
    return response;
  },
};
