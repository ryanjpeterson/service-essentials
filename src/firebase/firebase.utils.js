import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCxkvUMmRn2wnLXNvDBaXmcgOZtLrOIXFs",
    authDomain: "service-essentials-db.firebaseapp.com",
    databaseURL: "https://service-essentials-db.firebaseio.com",
    projectId: "service-essentials-db",
    storageBucket: "service-essentials-db.appspot.com",
    messagingSenderId: "753358283673",
    appId: "1:753358283673:web:e9dee84a5599a34bf8e908",
    measurementId: "G-5NZF45J6L1"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();