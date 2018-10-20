import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
  apiKey: "AIzaSyA30bWo9jOhSQ3zxQ8-W5g1I1DfzTNQ_pU",
  authDomain: "proyecto-diejavo.firebaseapp.com",
  databaseURL: "https://proyecto-diejavo.firebaseio.com",
  projectId: "proyecto-diejavo",
  storageBucket: "proyecto-diejavo.appspot.com",
  messagingSenderId: "297449767079"
};

const devConfig = {
  apiKey: "AIzaSyA30bWo9jOhSQ3zxQ8-W5g1I1DfzTNQ_pU",
  authDomain: "proyecto-diejavo.firebaseapp.com",
  databaseURL: "https://proyecto-diejavo.firebaseio.com",
  projectId: "proyecto-diejavo",
  storageBucket: "proyecto-diejavo.appspot.com",
  messagingSenderId: "297449767079"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};