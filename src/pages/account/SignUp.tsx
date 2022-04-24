import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import googleLogin from "./firebase/GoogleLogin";
import { useDispatch } from "react-redux";

const SignUp: React.FC = () => {
  const [signUpInfo, setSignUpInfo] = useState<object>({
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    // googleLogin();
    dispatch('faruk@gamilc.com')
  }

  const handleSignUp = () => {
    
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
              placeholder="User name"
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setSignUpInfo({...signUpInfo, username: e.target.value})}
            />
            <div className="border border-b-[#141414]"></div>
          </div>

          <div className="">
            <input
              type="email"
              name=""
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] pl-2 placeholder:text-sm"
              placeholder="Email"
              onBlur={(e) => setSignUpInfo({...signUpInfo, email: e.target.value})}
            />
            <div className="border border-b-[#141414]"></div>
          </div>

          <div className="">
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] pl-2 placeholder:text-sm"
              placeholder="Password"
              onBlur={(e) => setSignUpInfo({...signUpInfo, password: e.target.value})}
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
