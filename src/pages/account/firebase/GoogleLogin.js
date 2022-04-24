import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "./FirebaseInitializeApp";

initializeAuthentication();

const provider = new GoogleAuthProvider();

const googleLogin = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user.email);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode, errorMessage, email);
    });
};

export default googleLogin;
