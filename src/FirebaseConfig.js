import firebase from "firebase";
 
// https://firebase.google.com/docs/web/setup?authuser=0
 
// See firebase setup in above google firebase documentation url
export const config = {
  apiKey: "----",
  authDomain: "----",
  databaseURL: "----",
  projectId: "----",
  storageBucket: "----",
  messagingSenderId: "----"
};
 
firebase.initializeApp(config);
 
export default firebase;