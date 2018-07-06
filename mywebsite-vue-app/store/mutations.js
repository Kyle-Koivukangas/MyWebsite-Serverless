// Mutations are used to update the state, a level of abraction from the store data.
// Mutations are synchronous, so they only update their specific value, no more.

// ***************************************************************************
// NOTE: Don't forget to add new mutation types when creating new mutations!!!
// ***************************************************************************

/* If adding a new property to the state object that isn't declared in actions.state then to get it to be reactive
   you need to import Vue from 'vue' and then use Vue.set. See: https://vuejs.org/v2/api/#Vue-set and https://vuex.vuejs.org/en/mutations.html */
import * as types from "./mutation-types";

export const mutations = {
  [types.SAVE_UID](state, uidPayload) {
    state.uid = uidPayload;
  },

  [types.SAVE_USER](state, userPayload) {
    state.user = userPayload;
  },

  [types.SAVE_STORY](state, storyPayload) {
    state.story = storyPayload;
  },

  [types.SAVE_PAGES](state, pagesPayload) {
    state.pages = pagesPayload;
  },

  // My additions to mutations
  [types.SAVE_USERS](state, usersPayload) {
    state.users = usersPayload;
  },
  [types.SAVE_USERLIST](state, userListPayload) {
    state.userList = userListPayload;
  },

  // Blog mutations
  [types.SAVE_LATESTPOSTS](state, latestPostsPayload) {
    state.latestBlogPosts = latestPostsPayload;
  },
  [types.SAVE_LOADEDBLOGPOSTS](state, blogPostsPayload) {
    state.loadedBlogPosts = blogPostsPayload;
  },

  // Projects Mutations
  [types.SAVE_LOADEDPROJECTS](state, projectsPayload) {
    state.loadedProjects = projectsPayload;
  },
};
