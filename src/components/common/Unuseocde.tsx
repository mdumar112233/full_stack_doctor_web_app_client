import React, { useState } from 'react';
import {
    GrFacebookOption,
    GrInstagram,
    GrLinkedin,
    GrYoutube,
  } from "react-icons/gr";
  import { AiOutlineMenu, AiOutlineDown, AiOutlineUp }from "react-icons/ai";
  import { FiSearch, FiChevronRight }from "react-icons/fi";
  import { CgShoppingCart }from "react-icons/cg";
import { NavLink } from "react-router-dom";


const unuseocde = () => {
      const [menuOpenClose, setMenuOpenClose] = useState<Boolean>(false);
    return (
        <div>
             {/* navbar middle section */}
      <div className="w-[85%] mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="cursor-pointer">
            {/* <img className="h-16" src={logo} alt="logo" /> */}
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
      <div className="w-full mx-4  mt-1 flex flex-row justify-between items-start">
        
        <div 
        onMouseEnter={() => setMenuOpenClose(true)} onMouseLeave={() => setMenuOpenClose(false)}
        >
        <div className="bg-main-color text-white flex flex-row w-[270px] justify-between py-3 px-2 items-center cursor-pointer">
            <AiOutlineMenu className="text-white" size={22}/>
            <p className="-ml-10">BROWSE CATEGORIES</p>                
            {menuOpenClose ? <AiOutlineUp /> : <AiOutlineDown /> }
        </div>

        {/* category dropdown menu */}
           
        <div 
        className={menuOpenClose ? "shadow block absolute w-[270px] transition-all z-40" : "shadow hidden transition-all  absolute w-[270px] translate-y-5"}
        >
          <ul 
          className="text-sm "
          >
            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9]  cursor-pointer">
              <NavLink to='/honey'>Honey</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />

            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9]  cursor-pointer">
              <NavLink to='/grocery'>Grocery</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />

            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9] cursor-pointer">
              <NavLink to='/foodforhealth'>Food for health</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />

            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9] cursor-pointer">
              <NavLink to='/fruit'>Fruits</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />

            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9] cursor-pointer">
              <NavLink to='/fish'>Fish</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />

            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9] cursor-pointer">
              <NavLink to='/meat'>Meat</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />

            <li className="flex flex-row items-center justify-between py-3 px-4  hover:bg-[#F9F9F9] cursor-pointer">
              <NavLink to='/dairy'>Dairy</NavLink> <FiChevronRight className="text-[#777]" />
            </li>
            <hr />
          </ul>
        </div>
        </div>        

        {/* search bar */}
        <div className="w-[55%] flex flex-row border-2 border-main-color -ml-6 items-center justify-between py-2 rounded-3xl">
            <input type="text" name="search" className="focus:outline-none w-[38rem] ml-1 pl-2 placeholder:text-main-color" placeholder="Search for product" />
           <div className="mr-3 cursor-pointer">
              <FiSearch size={20} className="text-[#777]" />
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <h4 className="text-sm">MY ACCOUNT</h4>
          <div className="flex flex-row">
            <CgShoppingCart size={25} /> <span className="text-xs text-white bg-main-color h-4 w-4 text-center rounded-full -ml-2 -mt-1">2</span>
          </div>
          <p className="text-base font-bold">৳ 222</p>
        </div>
        </div>
      </div>
    );
};

export default unuseocde;