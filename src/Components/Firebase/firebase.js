import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

var firebaseConfig = {
  apiKey: "AIzaSyDDTPX8pSYs38-rEA0k6TjvEoiIWLBr62Y",
  authDomain: "webapptony.firebaseapp.com",
  databaseURL: "https://webapptony.firebaseio.com",
  projectId: "webapptony",
  storageBucket: "webapptony.appspot.com",
  messagingSenderId: "1070879329890",
  appId: "1:1070879329890:web:5eafbceff23b3053ce0b3b",
  measurementId: "G-8NC22Y334W"
};
class Firebase {
  constructor() {
    
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
    this.db = app.database()
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

  // *** user api ***

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('user')

  //*** message **

  talkAboutDay = uid => this.db.ref(`talkaboutdaypage/${uid}`);
  //userTestAndScore = () => this.db.ref('talkaboutdaypage');
}

export default Firebase;