import firebase from "firebase";

require("firebase/firestore");

// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

const config = {
  apiKey: "AIzaSyD7urYuc78SsGwyGsRkhrgT9r7SUADPX8M",
  authDomain: "my-website-f1d12.firebaseapp.com",
  databaseURL: "https://my-website-f1d12.firebaseio.com",
  // https://my-website-f1d12.firebaseio.com/flamelink/environments/production   <-- realtime production DB url.
  projectId: "my-website-f1d12",
  storageBucket: "my-website-f1d12.appspot.com",
  messagingSenderId: "1094025781119",
  timestampsInSnapshots: true,
};

export default (!firebase.apps.length ? firebase.initializeApp(config) : firebase.app());

// import Vue from "vue";
// import firebase from "firebase";

// Vue.use(Firebase);
// var firebaseConfig = {
//   apiKey: "AIzaSyD7urYuc78SsGwyGsRkhrgT9r7SUADPX8M",
//   authDomain: "my-website-f1d12.firebaseapp.com",
//   databaseURL: "https://my-website-f1d12.firebaseio.com",
//   projectId: "my-website-f1d12",
//   storageBucket: "my-website-f1d12.appspot.com",
//   messagingSenderId: "1094025781119",
// };
// Vue.firebase.initializeApp(firebaseConfig);
