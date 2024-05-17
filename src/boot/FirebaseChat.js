import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  databaseURL: "https://ecovitafood-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyDe1yrN77ZANB7MuZmlr2Ul2G_Ynmv6eYI",
  authDomain: "ecovitafood.firebaseapp.com",
  projectId: "ecovitafood",
  storageBucket: "ecovitafood.appspot.com",
  messagingSenderId: "132801495773",
  appId: "1:132801495773:web:38802e2f2a1b9d013fd134",
  
};

const firebaseCollectionEnum = {
  chats: "chats",
  limit: 500,
};

const firebaasApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaasApp);

export { firebaseDb, firebaseCollectionEnum };
