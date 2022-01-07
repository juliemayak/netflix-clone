import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: `${process.env.apiKey}`,
  authDomain: 'netflix-clone-43b1d.firebaseapp.com',
  projectId: 'netflix-clone-43b1d',
  storageBucket: 'netflix-clone-43b1d.appspot.com',
  messagingSenderId: '363304608852',
  appId: '1:363304608852:web:11aefaeec027b9311cb9c1',
  measurementId: 'G-B5E020JDLJ'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
