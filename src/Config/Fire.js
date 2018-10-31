import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA30bWo9jOhSQ3zxQ8-W5g1I1DfzTNQ_pU",
    authDomain: "proyecto-diejavo.firebaseapp.com",
    databaseURL: "https://proyecto-diejavo.firebaseio.com",
    projectId: "proyecto-diejavo",
    storageBucket: "proyecto-diejavo.appspot.com",
    messagingSenderId: "297449767079"
  };

  const fire = firebase.initializeApp(config);
  export default fire;