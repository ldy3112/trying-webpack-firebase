import { getDatabase, onValue, ref, set } from 'firebase/database';

export function checkUserInRTDB(uid, name, email, photo) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + uid);
    onValue(reference, (snapshot) => {
        if (!snapshot.val()) {
            set(reference, {
                'username': name,
                'email': email,
                'photoUrl': photo
            });
        }
    });
}
