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
//, where("project","==","gtt")
//query 
var project = 'nomeDoProjeto';
var entidade ='nomeDaEntidade';

// List user by project
// const q = query(collection(db,'users'), orderBy("roles."+project));
// const querySnap = await getDocs(q);

// List user by entidade & project
const q = query(collection(db,'users'), orderBy("roles."+project+"."+entidade));
const querySnap = await getDocs(q);

async function getUser(docs){
  const docRef = doc(db,'users', docs.id);
  // console.log(docRef);
  const docSnap = await getDoc(docRef);
  users.push(docSnap.data());
  console.log("Document id: ", docSnap.id, " e-mail: ", docSnap.data().mail);
}

const users = [];
await querySnap.forEach(getUser);
