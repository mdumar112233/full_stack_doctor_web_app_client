import React from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  return (
    <section className="w-[90%] xm:w-[80%] mx-auto">
      <div className="mt-5">
        <Link to="/" className="text-lg">
          BACK TO HOME
        </Link>
      </div>

      <div className="flex items-center justify-center sm:mt-16 mt-8">
        <div className="shadow-md w-80 h-96 px-5 py-8 pb-6 space-y-8">
          <div className="">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] placeholder:text-sm pl-2"
              placeholder="User name"
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
            />
            <div className="border border-b-[#141414]"></div>
          </div>

          <div className="">
            <input
              type="password"
              name=""
              id=""
              className="bg-transparent focus:outline-none border-none w-full placeholder:text-[#141414] pl-2 placeholder:text-sm"
              placeholder="Confirm Password"
            />
            <div className="border border-b-[#141414]"></div>
          </div>

          <div className="bg-main-color hover:bg-pink-color transition-all py-2 text-center rounded cursor-pointer">
            <Link to="#" className="text-white">
              SIGNUP
            </Link>
          </div>
          <div className="text-center cursor-pointer -mt-5">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
