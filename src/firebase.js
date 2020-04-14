import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQwc4pNNnPdBlp6UwGq1z5V5m0v7HGNq0",
  authDomain: "moviedb-a9346.firebaseapp.com",
  databaseURL: "https://moviedb-a9346.firebaseio.com",
  projectId: "moviedb-a9346",
  storageBucket: "moviedb-a9346.appspot.com",
  messagingSenderId: "896856052054",
  appId: "1:896856052054:web:c6bfb62b08b390545606f7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};
export const firestore = firebase.firestore();

export default firebase;
