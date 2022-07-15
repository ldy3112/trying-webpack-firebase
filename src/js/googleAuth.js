import { firebaseApp } from './firebaseInit';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export async function googleLogin() {
    try {
        await signInWithPopup(auth, provider);
    }
    catch (error) {
        console.log("F!");
    }
}

export async function logOut() {
    await signOut(auth);
}

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();