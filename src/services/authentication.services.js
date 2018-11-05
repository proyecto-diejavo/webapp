import fire from 'config/Fire';

export const signOut = () => (fire.auth().signOut());

export const signIn = (email, password) => (fire.auth().signInWithEmailAndPassword(email, password)
.then((u)=>{}).catch((error) => {
  console.log(error);
}));

export const createUser = (email, password) => (
  fire.auth().createUserWithEmailAndPassword(email, password)
  .then((u)=>{}).catch((error) => {
    console.log(error);
  }));

export default {};