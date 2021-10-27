import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index";

export default {
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit("SET_LIST", data))
      .catch((error) => console.log(error));
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch((error) => console.log(error));
  },
  FETCH_ITEM({ commit }, item) {
    fetchItemInfo(item)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch((error) => console.log(error));
  },
};
