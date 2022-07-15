import { firebaseApp } from './firebaseInit';
import { authState } from './ui';
import { getAuth, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { activeUser } from './rtDB';

export async function googleLogin() {
    try {
        await signInWithPopup(auth, provider);
    }
    catch (error) {
        console.log("F!");
    }
}

export async function monitorAuthState() {
    onAuthStateChanged(auth, user => {
        if (user) {
            activeUser(user)
        }
        else {
            authState.innerHTML = `You're not logged in.`;
        }
    });
}

export async function logOut() {
    await signOut(auth);
}

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();