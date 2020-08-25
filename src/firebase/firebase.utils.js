import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCL1_90pQMwLzzIEiNh5qNt7DTG2dNXKyw',
  authDomain: 'e-shop-db-ef6a6.firebaseapp.com',
  databaseURL: 'https://e-shop-db-ef6a6.firebaseio.com',
  projectId: 'e-shop-db-ef6a6',
  storageBucket: 'e-shop-db-ef6a6.appspot.com',
  messagingSenderId: '505117394190',
  appId: '1:505117394190:web:42690254a8b34e4b79435f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
