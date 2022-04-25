import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import googleLogin from "./firebase/GoogleLogin";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import cogoToast from 'cogo-toast';

const SignUp: React.FC = () => {
  const [signUp, setSignUp] = useState<any>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(signUp)

  const handleGoogleLogin = () => {
    googleLogin(dispatch, navigate);
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
        const newUserInfo = {...signUp};
        newUserInfo[e.target.name] = e.target.value;
        setSignUp(newUserInfo);
    }
}
  
  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        cogoToast.success('User create successfully');
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      cogoToast.error('Invalid email or password must be 6 character');
      });
  }

  return (
    <section className="w-[90%] xm:w-[80%] mx-auto">
      <div className="mt-5">
        <Link to="/" className="text-lg">
          BACK TO HOME
        </Link>
      </div>

      <div className="flex items-center justify-center sm:mt-12 mt-8">
        <div className="shadow-md w-80 h-auto px-5 pt-8 pb-2 space-y-8">
          <div className="">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] placeholder:text-sm pl-2"
              placeholder="User name (optional)"
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setSignUp({...signUp, username: e.target.value})}
            />
            <div className="border border-b-[#141414]"></div>
          </div>

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

          {/* <div className="">
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] pl-2 placeholder:text-sm"
              placeholder="Confirm Password"
              onBlur={(e) => setSignUpInfo({...signUpInfo, password2: e.target.value})}
            />
            <div className="border border-b-[#141414]"></div>
          </div> */}

          <div className="bg-main-color hover:bg-pink-color transition-all py-2 text-center rounded cursor-pointer" onClick={handleSignUp}>
            <Link to="#" className="text-white">
              SIGNUP
            </Link>
          </div>
          <div className="text-center cursor-pointer -mt-5">
            <Link to="/login">Back to login</Link>
          </div>
          <div className="flex justify-center text-center -translate-y-6">
              <div>
                <p className="my-4">or</p>
                <FcGoogle size={35} className="cursor-pointer" onClick={handleGoogleLogin} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
