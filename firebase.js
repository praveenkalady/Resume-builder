import * as firebase from 'firebase';


//Public configurations
const firebaseConfig = {
    apiKey: "AIzaSyB1mLRVXlfNQ9qVM0tBCo6tcWni9UlWaWQ",
    authDomain: "resume-builder-3430e.firebaseapp.com",
    projectId: "resume-builder-3430e",
    storageBucket: "resume-builder-3430e.appspot.com",
    messagingSenderId: "624533506916",
    appId: "1:624533506916:web:d0b8e75087295bf7a5c871",
    measurementId: "G-8KSPJL6PGN"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;



  