import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDpNkYAOhNOMg8P6HxmgG5ppGkIYZVe1UA",
    authDomain: "dictionary-7d6e8.firebaseapp.com",
    databaseURL: "https://dictionary-7d6e8.firebaseio.com",
    projectId: "dictionary-7d6e8",
    storageBucket: "dictionary-7d6e8.appspot.com",
    messagingSenderId: "43860785406"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
