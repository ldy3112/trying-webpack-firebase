import { firebaseApp } from './firebaseInit';
import { getDatabase } from 'firebase/database';
import { authState } from './ui';

export async function activeUser(user){
    let profilePict = document.createElement('img');
    profilePict.src = user.photoURL;
    let userName = document.createElement('span');
    userName.appendChild(document.createTextNode(user.displayName));
    authState.appendChild(profilePict);
    authState.appendChild(userName);
}