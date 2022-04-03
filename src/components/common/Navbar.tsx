import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedin,
  GrYoutube,
} from "react-icons/gr";
import { AiOutlineMenu, AiOutlineDown, AiOutlineUp }from "react-icons/ai";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/khaasfood.png";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpenClose, setMenuOpenClose] = useState<Boolean>(false);

  return (
    <section>
      {/* navbar top section */}
      <div className="flex flex-row justify-end bg-main-color py-1">
        <ul className="flex flex-row text-xs mr-24 text-white">
          <li className="mr-5">GIFT CARD</li>
          <li className="mr-5">HOW TO ORDER</li>
          <li>FAQS</li>
        </ul>
      </div>

      {/* navbar middle section */}
      <div className="w-[85%] mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="cursor-pointer">
            <img className="h-16" src={logo} alt="logo" />
          </div>
          <div className="mr-10">
            <ul className="flex flex-row space-x-5 text-sm">
              <li>
                <NavLink to="/" className="">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/products">PRODUCTS</NavLink>
              </li>
              <li>
                <NavLink to="/stores">STORES</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">CONTACTS</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">BLOG</NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="bg-main-color text-white px-4 py-3 rounded-3xl"
                >
                  DOWNLOAD APP
                </NavLink>
              </li>
            </ul>
          </div>

          {/* social media */}
          <div className="">
            <ul className="flex flex-row space-x-3">
              <li className="bg-[#365493] py-[.50rem] px-[.4rem] text-white cursor-pointer">
                <NavLink to="#">
                  <GrFacebookOption />
                </NavLink>
              </li>
              <li className="bg-[#774430] py-[.50rem] px-[.4rem] text-white cursor-pointer">
                <NavLink to="#">
                  <GrInstagram />
                </NavLink>
              </li>
              <li className="bg-[#CB2027] py-[.50rem] px-[.4rem] text-white cursor-pointer">
                <NavLink to="#">
                  <GrYoutube />
                </NavLink>
              </li>
              <li className="bg-[#0274B3] py-[.50rem] px-[.4rem] text-white cursor-pointer">
                <NavLink to="#">
                  <GrLinkedin size={15} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* navbar bottom section */}
      <div className="w-[85%] mx-auto mt-1 cursor-pointer" onMouseEnter={() => setMenuOpenClose(true)} onMouseLeave={() => setMenuOpenClose(false)}>
        <div className="bg-main-color text-white flex flex-row w-[270px] justify-between py-3 px-2 items-center">
            <AiOutlineMenu className="text-white" size={22}/>
            <p className="-ml-10">BROWSE CATEGORIES</p>                {menuOpenClose ? <AiOutlineUp /> : <AiOutlineDown /> }
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Navbar;
