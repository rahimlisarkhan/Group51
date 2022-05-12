// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBMcTcr3fQezv74-2SSKavd6sDWnzKVang",
  authDomain: "booktable-4e59c.firebaseapp.com",
  databaseURL:"https://booktable-4e59c-default-rtdb.firebaseio.com",
  projectId: "booktable-4e59c",
  storageBucket: "booktable-4e59c.appspot.com",
  messagingSenderId: "1021705707130",
  appId: "1:1021705707130:web:50dd65df6bda2dd09165c3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


let myBookStoreDB = firebase.database()