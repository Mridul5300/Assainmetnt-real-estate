// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPlGB4avIH51_5Ke0zl6GPF1o-yTaSHTY",
  authDomain: "assainment-9-project-build.firebaseapp.com",
  projectId: "assainment-9-project-build",
  storageBucket: "assainment-9-project-build.appspot.com",
  messagingSenderId: "75358973640",
  appId: "1:75358973640:web:672dd3c798a8d688243ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth