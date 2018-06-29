// Actions are asynchronous, so they allow us to dispatch/carry out multiple (possibly asynchrous) operations,
// Then they commit the actual changes to the state via mutation.

//mutation types
import * as mutation from "./mutation-types.js";

// import { EventBus } from "~/utils/event-bus.js";
import firebase from "@/plugins/firebase";
import { findUserByOid, updateUserDoc, fetchUserList } from "~/services/user";
import { getLatestBlogPosts } from "~/services/blogPosts";

const blogPostDB = firebase.database().ref("/flamelink/environments/production/content/blogPosts");

export async function nuxtServerInit({ dispatch, commit }, { app, req }) {
  console.log("[STORE ACTION]- in nuxServerInit");

  if (req.session && req.session.user) {
    console.log(`[STORE ACTION] found user in session:${JSON.stringify(req.session.user)}`);
    await dispatch("saveUser", req.session.user);
  }
}

export async function saveUserList({ commit }, userListPayload) {
  console.log("[STORE ACTIONS] - saveUserList");
  commit(mutation.SAVE_USERLIST, userListPayload);
}
export async function loadUserList({ dispatch, state }) {
  console.log("[STORE ACTIONS] - loadUserList");

  if (state.userList != null) {
    console.log("[STORE ACTIONS] - loadUserList: State already contains userList, returning userList.");
    return state.userList;
  } else {
    console.log("[STORE ACTIONS] - loadUserList: No userList present, initializing new List.");
    await dispatch("initialiseUserList");
    console.log(`[STORE ACTIONS] - loadUserList: Userlist Initialized...`);
    console.log(state.userList);

    return state.userList;
  }
}
export async function initialiseUserList({ dispatch }) {
  console.log("[STORE ACTIONS] - initialiseUserList");

  const userList = await fetchUserList();
  if (typeof userList !== "undefined") {
    console.log("[STORE ACTIONS] - initializeUserList: got user list:");
    console.log(userList);
    await dispatch("saveUserList", userList);
  } else {
    throw new Error("could not retrieve user list from API.");
  }
}

//*******************************************
//              Blog Actions:
//*******************************************
export async function saveLatestBlogPosts({ commit }, latestBlogPostsPayload) {
  console.log("[STORE ACTIONS] - Saving Latest Blog posts");
  commit(mutation.SAVE_LATESTPOSTS, latestBlogPostsPayload);
}
export async function loadLatestBlogPosts({ dispatch, state }) {
  console.log("[STORE ACTIONS] - Load latest blog posts..");

  if (state.latestBlogPosts != null) {
    console.log("[STORE ACTIONS] - LoadLatestBlogPosts: posts already loaded.");
    return state.latestBlogPosts;
  } else {
    console.log("[STORE ACTIONS] - LoadLatestBlogPosts: no blog posts, fetching...");
    await dispatch("initialiseLatestBlogPosts");
    console.log("[STORE ACTIONS] - LoadLatestBlogPosts: PostList Initialised:");
    console.log(state.latestBlogPosts);
    return state.latestBlogPosts;
  }
}
export async function initialiseLatestBlogPosts({ dispatch }) {
  console.log("[STORE ACTIONS] - initialiseLatestBlogPosts");

  const latestBlogPosts = await getLatestBlogPosts();
  if (typeof latestBlogPosts !== null) {
    console.log("[STORE ACTIONS] - initializeLatestBlogPosts: got latest Posts:");
    console.log(latestBlogPosts);
    await dispatch("saveLatestBlogPosts", latestBlogPosts);
  } else {
    throw new Error("could not retrieve blog posts from API.");
  }
}

export async function loadBlogPosts({ commit }) {
  blogPostDB
    .child("en-US")
    .once("value")
    .then(data => {
      const blogPosts = [];
      const obj = data.val();
      for (let key in obj) {
        blogPosts.push({
          id: key,
          title: obj[key].title,
          author: obj[key].author,
          date: obj[key].date,
          slug: obj[key].slug,
          status: obj[key].status,
          summary: obj[key].summary,
          content: obj[key].content,
          tags: obj[key].tags,
        });
      }
      commit("SET_LOADEDBLOGPOSTS", blogPosts);
    })
    .catch(error => {
      console.log(error);
    });
}
