import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5nJY51wy7l5gCajDvyAAUZAWFfQ0IOZE",
    authDomain: "slack-clone-7f32b.firebaseapp.com",
    databaseURL: "https://slack-clone-7f32b.firebaseio.com",
    projectId: "slack-clone-7f32b",
    storageBucket: "slack-clone-7f32b.appspot.com",
    messagingSenderId: "729837994311",
    appId: "1:729837994311:web:7b7a3a5b05ec87fa50cc62",
    measurementId: "G-GDVHKC3HMR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;