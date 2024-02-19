/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHouseDamage } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import Container from "./Container";

function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Meals", link: "/meals" },
  ];

  return (
    <Container>
      <div className="shadow-md w-full fixed z-[1999] top-0 left-0 font-montserrat">
        <div
          className="md:px-10 py-4 px-7 md:flex justify-between items-center
bg-slate-800 text-white"
        >
          {/* logo here */}
          <NavLink
            to="/"
            className="flex text-2xl cursor-pointer items-center gap-2 w-fit"
          >
            <PiBowlFoodFill className="w-7 h-7 text-yellow-600" />
            <span className="font-bold text-sm md:text-xl">Backyard bowl</span>
          </NavLink>

          {/* menu icon */}
          <div
            onClick={() => setisOpen(!isOpen)}
            onKeyDown={() => setisOpen(!isOpen)}
            role="presentation"
            className="w-7 h-7 absolute right-8 top-6
    cursor-pointer md:hidden"
          >
            {isOpen ? <IoIosCloseCircle /> : <RxHamburgerMenu />}
          </div>

          {/* nav links here */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
     bg-slate-800 text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9
      transition-all duration-500 ease-in ${
        isOpen ? "top-12" : "top-[-490px]"
      } `}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="font-semibold my-7 md:my-0 md:ml-8"
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : "text-white"
                  }
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;