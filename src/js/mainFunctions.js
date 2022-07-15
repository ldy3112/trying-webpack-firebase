import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { checkUserInRTDB } from './checkUserInRTDB';
import { authState } from './ui'

const auth = getAuth();
export async function monitorStateChange() {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log('User logged in')
            checkUserInRTDB(user.uid, user.displayName, user.email, user.photoURL)
        }
        else {
            authState.innerHTML = `You're not logged in.`;
        }
    });
}

