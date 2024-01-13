import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( firebaseAuth, googleProvider );
        const {displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error)

        return {
            ok: false,
            errorMessage,
        }
    }
}

export const registerUserWithEmailPassword = async ({ displayName, email, password }) => {
    try {
        console.log({ email, password, displayName })
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        await updateProfile( firebaseAuth.currentUser, { displayName } );
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        //console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword( firebaseAuth, email, password );       
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        //console.log(error)
        return { ok: false, errorMessage: error.message }
    }
}