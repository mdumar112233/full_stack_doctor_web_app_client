import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLocationPin, MdMarkEmailUnread } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { userLogout } from "../../redux/slices/loginSlice";

const Header: React.FC = () => {
  const [menu, setMenu] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const isLogin = useSelector((state: any) => state.loginUser.isLogin);
  const localLogin: any = sessionStorage.getItem('isLogin');

  const handleLogout = (e: any) => {
    e.preventDefault()
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(userLogout(''))
    }).catch((error) => {
      console.log(error)
    });
    sessionStorage.removeItem('isLogin')

  }

  return (
    <section>
      {/* navbar top section */}
      <div className="bg-main-color py-3 tablet:py-4 text-white text-sm">
        <div className="w-[90%] xm:w-[80%] mx-auto flex tablet:flex-row flex-col justify-between">
          <div className="flex">
            <div className="flex items-center">
              <MdMarkEmailUnread className="mr-2" />{" "}
              <p className="mr-3 2xm:text-sm text-[3vw]">support@novena.com</p>
            </div>
            <div className="flex items-center">
              <MdLocationPin className="mr-2" />{" "}
              <p className="2xm:text-sm text-[3vw]">support@novena.com</p>
            </div>
          </div>

          <div className="flex items-center tablet:mt-0 mt-2">
            <p>Call Now : </p>{" "}
            <span className="font-bold ml-2 xm:text-2xl text-[1rem]">
              823-2383-32332
            </span>
          </div>
        </div>
      </div>

      {/* navbar bottom section */}
      <nav className="xm:w-[80%] mx-auto w-[90%] tablet:flex items-center justify-between mt-4 mb-5">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="cursor-pointer h-10 2xm:h-12 md:h-14"
            />
          </Link>
          <AiOutlineMenu
            className={
              menu
                ? "text-2xl tablet:hidden block cursor-pointer"
                : "text-2xl tablet:hidden block cursor-pointer"
            }
            onClick={() => setMenu(!menu)}
          />
        </div>

        <div>
          <ul
            className={
              menu
                ? "tablet:flex tablet:space-x-10 font-medium tablet:mt-0 mt-5 tablet:space-y-0 space-y-8 tablet:ml-0 ml-3 block"
                : "tablet:flex tablet:space-x-10 font-medium tablet:mt-0 mt-5 tablet:space-y-0 space-y-8 tablet:ml-0 ml-3 hidden"
            }
          >
            <li className="hover:text-pink-color">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-pink-color">
              <NavLink to="/services">Service</NavLink>
            </li>
            <li className="hover:text-pink-color">
              <NavLink to="/doctors">Doctors</NavLink>
            </li>
            <li className="hover:text-pink-color">
              <NavLink to="#">About</NavLink>
            </li>
            {/* <li className="hover:text-pink-color">
              <NavLink to="/admin">Admin</NavLink>
            </li> */}
            <li className="hover:text-pink-color">
              <NavLink to={localLogin === 'new@gmail.com' ? "/dashboard": '/myappointment' } >Dashboard</NavLink>
            </li>
            {localLogin ? (
              <li className="hover:text-pink-color">
                <NavLink to="#" onClick={handleLogout}>Logout</NavLink>
              </li>
            ) : (
              <li className="hover:text-pink-color">
                <NavLink to="/signup">Login/SingUp</NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
