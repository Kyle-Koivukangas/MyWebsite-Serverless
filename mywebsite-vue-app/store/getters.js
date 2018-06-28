// Getters just relay information in the current store state.

export const getters = {
  uid: state => {
    return state.uid;
  },
  user: state => {
    return state.user;
  },
  story: state => {
    return state.story;
  },
  pages: state => {
    return state.pages;
  },
  isAuthenticated(state) {
    console.log(`[STORE.GETTERS] - in isAuthenticated, uid:[${state.uid}] user:[${JSON.stringify(state.user)}]`);
    return !!state.uid || !!state.user;
  },
  loggedUser(state) {
    return state.user;
  },

  users: state => {
    return state.users;
  },
  userList: state => {
    return state.userList;
  },

  //blog post Getters:
  latestBlogPosts: state => {
    return state.latestBlogPosts;
  },
};
