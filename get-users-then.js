// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, doc, getDocs, getDoc, orderBy } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOqum3VQCE7wSind9NHkpdbslD4nD2pmQ",
  authDomain: "teste-fadb8.firebaseapp.com",
  projectId: "teste-fadb8",
  storageBucket: "teste-fadb8.appspot.com",
  messagingSenderId: "355553363411",
  appId: "1:355553363411:web:638e2b94e20bf19613db26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var project = '.gtrel'
var entidade ='.121212';
var path = 'roles'+project+entidade;

const q = query(collection(db,'users'), orderBy(path));
getDocs(q)
  .then((docs)=> docs.forEach((docs)=>{
    const docRef = doc(db,'users', docs.id);
    getDoc(docRef).then((docSnap)=>{
    console.log("Document id: ", docSnap.id, " e-mail: ", docSnap.data().mail);
    })
}))
    .catch((err)=>console.error(err));

// function getUser(docs){
//   const docRef = doc(db,'users', docs.id);
//   getDoc(docRef).then((docSnap)=>{
//     console.log("Document id: ", docSnap.id, " e-mail: ", docSnap.data().mail);
//   })
// }