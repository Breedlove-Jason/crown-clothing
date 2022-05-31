import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtjVyCDm3zi_b8QnttfFADfQB4x_FZ9Co",
  authDomain: "crwn-clothing-db-f73d0.firebaseapp.com",
  projectId: "crwn-clothing-db-f73d0",
  storageBucket: "crwn-clothing-db-f73d0.appspot.com",
  messagingSenderId: "29857580123",
  appId: "1:29857580123:web:c8dcca93d99bd516beab7e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
    return userDocRef;
  }
};
