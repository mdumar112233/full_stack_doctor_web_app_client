import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import googleLogin from "./firebase/GoogleLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/loginSlice";
import cogoToast from 'cogo-toast';

const Login: React.FC = () => {
  const [login, setLogin] = useState<any>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleGoogleLogin = () => {
    googleLogin();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    let  isInputValid;
    if(e.target.name === 'email'){
        isInputValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
        isInputValid = e.target.value.length > 6;
    }
    if(isInputValid){
        const newUserInfo = {...login};
        newUserInfo[e.target.name] = e.target.value;
        setLogin(newUserInfo);
    }
}

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, login.email, login.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(loginUser(user.email))
        cogoToast.success('User login successfully');
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        cogoToast.error('Invalid email or password must be 6 character');
      });
  };


  return (
    <section className="w-[90%] xm:w-[80%] mx-auto">
      <div className="mt-4">
        <Link to="/" className="text-lg">
          BACK TO HOME
        </Link>
      </div>

      <div className="flex items-center justify-center sm:mt-16 mt-8">
        <div className="shadow-md w-80 h-[25rem] px-5 pt-5 space-y-8">
          <div className="">
            <input
              type="email"
              name="email"
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] pl-2 placeholder:text-sm"
              placeholder="Email"
              onBlur={handleChange}
            />
            <div className="border border-b-[#141414]"></div>
          </div>

          <div className="">
            <input
              type="password"
              name="password"
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] pl-2 placeholder:text-sm"
              placeholder="Password"
              onBlur={handleChange}
            />
            <div className="border border-b-[#141414]"></div>
          </div>

          <div className="bg-main-color hover:bg-pink-color transition-all py-2 text-center rounded cursor-pointer" onClick={handleLogin}>
            <Link to="#" className="text-white">
              LOGIN
            </Link>
          </div>
          <div className="-mt-5">
            <p>Don't have an account?</p>
            <div className="text-center border border-[#141414] w-full py-2 mt-4 cursor-pointer">
              <Link to="/signup">SIGNUP</Link>
            </div>
            <div className="flex justify-center text-center">
              <div>
                <p className="my-4">or</p>
                <FcGoogle size={35} className="cursor-pointer" onClick={handleGoogleLogin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
