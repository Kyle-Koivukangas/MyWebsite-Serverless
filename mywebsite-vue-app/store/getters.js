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

  // Blog post Getters:
  loadedBlogPosts: state => {
    return state.loadedBlogPosts.sort((postA, postB) => {
      // return blog posts custom sorted by date.
      return postA.date > postB.date;
    });
  },
  loadedBlogPost: state => {
    return postId => {
      return state.loadedBlogPosts.find(blogPost => {
        //custom search by post id.
        blogPost.id === postId;
      });
    };
  },
  latestBlogPosts: (state, getters) => {
    return getters.loadedBlogPosts.slice(0, 3);
  },

  // Projects getters:
  loadedProjects: state => {
    // return list projects, sorted chronologically
    return state.loadedProjects.sort((projectA, projectB) => {
      return projectA.date > projectB.date;
    });
  },
};
