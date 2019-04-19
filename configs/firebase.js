//@FLOW
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyDirLDizuGOmlVC1seCmaMPAbjdrUeTZqM",
  authDomain: "book-karo-50af3.firebaseapp.com",
  databaseURL: "https://book-karo-50af3.firebaseio.com",
  projectId: "book-karo-50af3",
  storageBucket: "book-karo-50af3.appspot.com",
  messagingSenderId: "264387576029"
};
firebase.initializeApp(config);

export default firebase;
