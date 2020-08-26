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

export const createUserProfileDocument = async (userAuth, additionlData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionlData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
