import app from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBjEn2Mn4fH3XzZqJx7i1FISpCy1mjqI2g",
  authDomain: "web-app-tony.firebaseapp.com",
  databaseURL: "https://web-app-tony.firebaseio.com",
  projectId: "web-app-tony",
  storageBucket: "",
  messagingSenderId: "1030548491817",
  appId: "1:1030548491817:web:0496cca0b6857ab67b9638"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
export default Firebase;