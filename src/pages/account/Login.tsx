import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return (
        <section className="w-[90%] xm:w-[80%] mx-auto">
             <div>
        <Link to="/" className="text-lg">
          BACK
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <div className="shadow-md w-80 h-80 px-5 pt-5 space-y-8">
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

          <div className="bg-main-color hover:bg-pink-color transition-all py-2 text-center rounded cursor-pointer">
            <Link to="#" className="text-white">
              LOGIN
            </Link>
          </div>
          <div className="cursor-pointer -mt-5">
              <p>Don't have an account?</p>
            <div className='text-center border border-[#141414] w-full py-2 mt-4'>
            <Link to="/signup">SIGNUP</Link>
            </div>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Login;