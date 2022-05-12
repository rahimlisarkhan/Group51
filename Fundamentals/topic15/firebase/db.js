  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBC1MSeeNeNEAg_TEDxAFucKM05UEK_XAk",
    authDomain: "todoapp-18af0.firebaseapp.com",
    databaseURL:"https://todoapp-18af0-default-rtdb.firebaseio.com",
    projectId: "todoapp-18af0",
    storageBucket: "todoapp-18af0.appspot.com",
    messagingSenderId: "721134378769",
    appId: "1:721134378769:web:35855e47954c3ee32476b0"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

  firebase.initializeApp(firebaseConfig)

  let myDatabase = firebase.database()