import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-DiUOSin5Minwt-crQ2ATVkHEkpqF54I",
    authDomain: "coffee-queen-react-coderhouse.firebaseapp.com",
    projectId: "coffee-queen-react-coderhouse",
    storageBucket: "coffee-queen-react-coderhouse.appspot.com",
    messagingSenderId: "1028362110109",
    appId: "1:1028362110109:web:8f9ca51bb8144fadd7c074"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById('root'));