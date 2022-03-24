import React from "react";
import { NavLink } from "react-router-dom";

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/money-gram-logo.png";

const NavBarItem = ({ item, classprops }) => (
<NavLink  to={item.link}  className={`mx-4 cursor-pointer ${classprops}`}>{item.title}</NavLink >
);

const NavBarList = [
  {title:"Home", link:"/",exact: true}, 
  // {title:"Exchange", link:"exchange",exact: false}, 
  // {title:"Services", link:"Services",exact: false},
  {title:"Transactions", link:"transactions",exact: false},
  {title:"Contact Us", link:"contact-us",exact: false}
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 text-gray-900">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <NavLink  to="/" >
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </NavLink >
      </div>
      <ul className=" md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {NavBarList.map((item, index) => (
          <NavBarItem key={item + index} item={item} />
        ))}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md  text-gray-700 animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {NavBarList.map(
              (item, index) => <NavBarItem key={item + index} item={item} classprops="my-2 text-lg" />,
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;