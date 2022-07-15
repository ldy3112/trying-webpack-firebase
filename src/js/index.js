import '../css/styles.css';
import { gLoginBtn, logoutBtn } from './ui';
import { googleLogin, logOut } from './googleAuth';
import { monitorStateChange } from './mainFunctions';

gLoginBtn.addEventListener('click', googleLogin);
logoutBtn.addEventListener('click', logOut);
monitorStateChange();