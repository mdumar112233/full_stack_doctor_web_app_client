import React from "react";
import logo from "../../assets/images/logo.png";
import { MdEmail, MdOutlineSupportAgent } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 bg-[#f4f9fc] body-font">
      <section className="w-[90%] tablet:w-[80%] mx-auto">
        <div className="px-5 py-24 mx-auto flex md:items-center xl:items-start lg:flex-row lg:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center lg:text-left lg:mb-0 md:mb-10 lg:mr-20">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img src={logo} alt="logo" />
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego Air plant banjo
              lyft occupy retro adaptogen indego Air plant banjo lyft occupy
              retro adaptogen indego
            </p>
          </div>

          <div className="grid grid-flow-row xl:grid-cols-3 md:grid-cols-2 grid-cols-1 -mb-10 md:mt-0 mt-10 lg:text-left text-center w-full">
            <div className="">
              <h2 className="title-font font-bold text-main-color tracking-widest text-base mb-2">
                Department
              </h2>
              <div className="flex lg:justify-start justify-center  flex-row mb-3">
                <div className="bg-pink-color w-10 h-1"></div>
              </div>
              <nav className="list-none mb-10 space-y-4 text-sm">
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Surgery
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Women's Health
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Radiology
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Cardioc
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Medicine
                  </a>
                </li>
              </nav>
            </div>

            <div className="">
              <h2 className="title-font font-bold text-main-color tracking-widest text-base mb-2">
                Support
              </h2>
              <div className="flex lg:justify-start justify-center  flex-row mb-3">
                <div className="bg-pink-color w-10 h-1"></div>
              </div>
              <nav className="list-none mb-10 space-y-4 text-sm">
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Company Support
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    FAQuestions
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-main-normal hover:text-pink-color cursor-pointer">
                    Company Licence
                  </a>
                </li>
              </nav>
            </div>

            <div className="">
              <h2 className="title-font font-bold text-main-color tracking-widest text-base mb-2">
                Get In Touch
              </h2>
              <div className="flex lg:justify-start justify-center  flex-row mb-3">
                <div className="bg-pink-color w-10 h-1"></div>
              </div>
              <nav className="list-none mb-10 space-y-4 text-sm">
                <li>
                  <div className="flex lg:justify-start justify-center  flex-row">
                    <div className="flex items-center">
                      <MdEmail />{" "}
                      <p className="text-main-normal ml-3">
                        Support Available for 24/7
                      </p>
                    </div>
                  </div>

                  <a className="text-xl font-semibold text-gray-900  hover:text-pink-color cursor-pointer mt-1">
                    Support@email.com
                  </a>
                </li>
                <li>
                  <div className="flex lg:justify-start justify-center  flex-row">
                    <div className="flex items-center">
                      <MdOutlineSupportAgent />{" "}
                      <p className="text-main-normal ml-3">
                        Mon to Fri: 08:30 - 18:00
                      </p>
                    </div>
                  </div>

                  <a className="text-xl font-semibold text-gray-900  hover:text-pink-color cursor-pointer mt-1">
                    +23-234-2322
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f9fc] bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2020 umar faruk —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-500 ml-1"
                target="_blank"
              >
                All right reserved
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
