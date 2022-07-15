import '../css/styles.css';
import { gLoginBtn, logoutBtn } from './ui';
import { googleLogin, logOut, monitorAuthState } from './gAuth';

gLoginBtn.addEventListener('click', googleLogin);
logoutBtn.addEventListener('click', logOut);
console.log(monitorAuthState());