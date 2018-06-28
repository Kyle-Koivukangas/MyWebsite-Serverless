import firebaseApp from "@/plugins/firebase";

const DB = firebaseApp.firestore();
const RDB = firebaseApp.database();

export function findUserByOid(userOid) {
  console.log(`[User Service] - Finding user by oid:[${userOid}]`);
  let usersRef = DB.collection("users").doc(userOid);
  return usersRef.get();
}

export function updateUserDoc(userOid, user) {
  console.log(`[user Service] - Updating user:[${userOid} with:[${user}]`);
  return DB.collection("users")
    .doc(userOid)
    .set(user, { merge: true });
}

export function addUser(user) {
  console.log(`[User Service] - Adding user:[${user}]`);
  return DB.collection("users")
    .doc(user.uid)
    .set(user.data);
}

export async function fetchUserList() {
  console.log(`[User Service] - Getting list of Users..`);
  //   console.log(DB.collection("users"));

  //   var users = DB.collection("users").get().then(function(querySnapshot) {;
  //   const vm = this;
  //   var users = {};
  //   var collection = DB.collection("users")
  //     .get()
  //     .then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //         users[doc.id] = doc.data();
  //         console.log(`users: ${users}`);
  //       });
  //       console.log("\n\nUSERS:   ");
  //       console.log(users);
  //       return users;
  //     });

  let userList = {};
  await DB.collection("users")
    .get()
    .then(function(querySnapshot) {
      var users = {};

      querySnapshot.forEach(function(doc) {
        users[doc.id] = doc.data();
      });
      userList = users;
      console.log("[User Service] - fetchUserList: Logging fetched userList:");
      console.log(userList);
    });
  return userList;
  //   console.log(userList);

  //   return userList.get();
}
