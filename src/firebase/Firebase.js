import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsHlIkSfAw3F_2RRjMQKVfNhq4Cc1r3ic",
    authDomain: "tech-hive-cd5ea.firebaseapp.com",
    databaseURL: "https://tech-hive-cd5ea.firebaseapp.com/",
    projectId: "tech-hive-cd5ea",
    storageBucket: "tech-hive-cd5ea.appspot.com",
    messagingSenderId: "1006900793620",
    appId: "1:1006900793620:web:0afa86387c2c8b6cbf7201",
    measurementId: "G-EP7Q19475X"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
