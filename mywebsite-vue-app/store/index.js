import Vuex from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import * as actions from "./actions";

export const state = () => ({
  uid: null,
  user: null,
  story: {},
  pages: [],
  users: null,
  userList: null,
  latestBlogPosts: null,
});

const createStore = () => {
  return new Vuex.Store({
    state: state,
    mutations: mutations,
    actions,
    getters: getters,
  });
};

export default createStore;
