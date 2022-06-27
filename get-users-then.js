// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, doc, getDocs, getDoc, orderBy } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var project = '.nomeDoProjeto';
var entidade ='.nomeDaEntidade';
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