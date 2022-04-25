import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { loginUser } from "../../../redux/slices/loginSlice";
import initializeAuthentication from "./FirebaseInitializeApp";
import cogoToast from 'cogo-toast';

initializeAuthentication();

const provider = new GoogleAuthProvider();

const googleLogin = (dispatch, navigate) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      dispatch(loginUser(user.email))
      cogoToast.success('User create successfully');
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode, errorMessage, email);
      cogoToast.error('Invalid email or password must be 6 character');
    });
};

export default googleLogin;
