import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBUKO7e5kzKKgjqpz0eKOSR-MWRen4ynx0",
    authDomain: "king-86c80.firebaseapp.com",
    projectId: "king-86c80",
    storageBucket: "king-86c80.appspot.com",
    messagingSenderId: "682689017571",
    appId: "1:682689017571:web:b01cb0961c0241924db7d6",
    measurementId: "G-9EV1ELTBDB"
};
const firebaseApp=initializeApp(firebaseConfig)
export const db=getFirestore(firebaseApp)
