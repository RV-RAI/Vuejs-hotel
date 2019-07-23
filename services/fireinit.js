import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
  apiKey: "AIzaSyCO4BgMluXmCyoZT6lQZVqNaNEvtnyv918",
  authDomain: "sotetsu-hotel.firebaseapp.com",
  databaseURL: "https://sotetsu-hotel.firebaseio.com",
  projectId: "sotetsu-hotel",
  storageBucket: "sotetsu-hotel.appspot.com",
  messagingSenderId: "407325569297"
}
!firebase.apps.length ? firebase.initializeApp(config) : ""
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const DB = firebase.firestore()
export default firebase
