import firebase from 'firebase/app'
import 'firebase/firstore'

var firebaseConfig = {
    apiKey: "AIzaSyDMmCfC-c1E1_B2jxbMT_0It3Xa0nrxoRk",
    authDomain: "todos-vue-ahyoungkim.firebaseapp.com",
    databaseURL: "https://todos-vue-ahyoungkim.firebaseio.com",
    projectId: "todos-vue-ahyoungkim",
    storageBucket: "todos-vue-ahyoungkim.appspot.com",
    messagingSenderId: "502839753896",
    appId: "1:502839753896:web:3375512213194ac55fd69d",
    measurementId: "G-PMWBECWTRN"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default { db };