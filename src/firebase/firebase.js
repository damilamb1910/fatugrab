
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyDY3pnF44f_hVoWKFN3i-zv9vQHuQc-t7Y",
  authDomain: "fatugrab-oeste.firebaseapp.com",
  projectId: "fatugrab-oeste",
  storageBucket: "fatugrab-oeste.appspot.com",
  messagingSenderId: "164541653278",
  appId: "1:164541653278:web:344f94842cc40306d6290f",
  measurementId: "G-X6MP3Y53EP"
};


const app = initializeApp(firebaseConfig);
 
const analytics = getAnalytics(app);
export const db =getFirestore(app)