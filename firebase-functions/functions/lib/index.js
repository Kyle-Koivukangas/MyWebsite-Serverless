// import * as functions from "firebase-functions";
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
// export const helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();
exports.postListChange = functions.database
    .ref("/flamelink/environments/production/content/blogPosts/en-US/{id}")
    .onWrite((snapshot, context) => {
    // This function will listen for changes made to blog posts and update the postList accordingly.
    // If a blog post was created, it will create a record in the postList; it will delete that
    // record if the post is deleted; and it will update the postList record if any
    // of the information used in the postList entry was modified (slug or status).
    //NOTE: In future, to save on function calls you can split this up in to separate functions:
    //      one for creations, one for deletions, and then another one for each of the fields that 
    //      are important (slug and status).
    //      That way you won't call functions for every write. Instead, you'll only invoke a function
    //      if the slug or status fields were altered. Right now this will run even for minor changes
    //      like a change to the content or image etc, which isn't necessary, but on this small scale
    //      it doesn't matter at all. (current pricing = $0.40/million invocations, lol)
    //Important pre-write values:
    const beforeSlug = snapshot.before.child("slug").val();
    const beforeStatus = snapshot.before.child("status").val();
    const beforePostId = snapshot.before.child("id").val();
    //Important post-write values:
    const slug = snapshot.after.child("slug").val();
    const status = snapshot.after.child("status").val();
    const postId = snapshot.after.child("id").val();
    //Reference to the postList
    const postListRef = admin.database().ref("/flamelink/environments/production/content/blogPosts/postList");
    const createPostListRecord = function () {
        // Creates new object in postList from the new slug, status and postId information.
        postListRef
            .child(slug)
            .child(status)
            .set(postId);
    };
    const deleteOldPostListRecord = function () {
        // Deletes the postListRecord that matches the slug in the before snapshot.
        postListRef.child(beforeSlug).set(null);
    };
    // Debug Logging:
    // console.log("Before Snapshot:");
    // console.log(snapshot.before);
    // console.log("After Snapshot:");
    // console.log(snapshot.after);
    // console.log(`Slug (before:after): ${beforeSlug} : ${slug}`);
    // console.log(`Status (before:after): ${beforeStatus} : ${status}`);
    // console.log(`Post ID (before:after): ${beforePostId} : ${postId}`);
    if (beforePostId === null) {
        console.log("New Post Created, adding record to PostList...");
        createPostListRecord();
    }
    else if (postId === null) {
        console.log("Post was deleted, removing PostListRecord...");
        deleteOldPostListRecord();
    }
    else if (beforePostId === postId && (beforeSlug != slug || beforeStatus != status)) {
        // PostIds match, no new creations, just updating a post.
        // If before and after slug/status don't match, then delete old and create new record.
        console.log("Post updated, removing old PostListRecord and adding updated record.");
        deleteOldPostListRecord();
        createPostListRecord();
    }
    else {
        console.log("Post updated, PostListRecord unaffected");
    }
    return true;
});
//# sourceMappingURL=index.js.map