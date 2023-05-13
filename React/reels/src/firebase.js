// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'



import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCywJNIkRO57auz8VYw56fmEtCRHVxuuug",
  authDomain: "reel-de971.firebaseapp.com",
  projectId: "reel-de971",
  storageBucket: "reel-de971.appspot.com",
  messagingSenderId: "546558208111",
  appId: "1:546558208111:web:a3c07629d3c9c4a3aac59a"
};


//Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

const firestore = firebase.firestore()

export const database = {
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimestamp : firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage()


