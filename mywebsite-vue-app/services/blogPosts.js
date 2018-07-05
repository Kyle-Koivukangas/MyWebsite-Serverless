import firebaseApp from "@/plugins/firebase";

// Blog posts are saved under realtime database (firebase's older DB architecture)
const RealtimeDB = firebaseApp.database();
const blogPostReference = "flamelink/environments/production/content/blogPosts/en-US";
const postListReference = "flamelink/environments/production/content/blogPosts/";

export function getLatestBlogPosts() {
  var blogPosts = RealtimeDB.ref("flamelink/environments/production/content/blogPosts/en-US").limitToLast(10);
  // .once("value");
  console.log(blogPosts);
}
