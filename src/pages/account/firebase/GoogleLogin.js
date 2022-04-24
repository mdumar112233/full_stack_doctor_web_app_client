import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { loginUser } from "../../../redux/slices/loginSlice";
import initializeAuthentication from "./FirebaseInitializeApp";


initializeAuthentication();

const provider = new GoogleAuthProvider();

const googleLogin = (dispatch) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user.email);
      dispatch(loginUser(user.email))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode, errorMessage, email);
    });
};

export default googleLogin;
