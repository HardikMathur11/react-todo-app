import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkqnZsQKefGjF8tZHP0sMDvNK_6srhDb8",
  authDomain: "to-do-app-9fbb7.firebaseapp.com",
  projectId: "to-do-app-9fbb7",
  storageBucket: "to-do-app-9fbb7.firebasestorage.app",
  messagingSenderId: "864313954688",
  appId: "1:864313954688:web:5b627be493ed76ef367165"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
