// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAddYUY6ov4_G56Bh7W56A24_xfmixb24A',
  authDomain: 'fire-base-auth-671e0.firebaseapp.com',
  projectId: 'fire-base-auth-671e0',
  storageBucket: 'fire-base-auth-671e0.appspot.com',
  messagingSenderId: '105953699623',
  appId: '1:105953699623:web:11e3183adb3aa32d2ceb02',
}

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }
