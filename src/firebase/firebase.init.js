
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwo10WE9oF3vjaeGSC2xYc0lPOXhdmryw",
    authDomain: "minimo-blog.firebaseapp.com",
    projectId: "minimo-blog",
    storageBucket: "minimo-blog.appspot.com",
    messagingSenderId: "342114869550",
    appId: "1:342114869550:web:5af8c02740637010f75abf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;