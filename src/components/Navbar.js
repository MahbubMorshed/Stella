import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import TextCanvas from "./canvas/Text";
import Logo from "./canvas/logo/Logo";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-0 fixed top-0 z-20 my-0 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
        <Logo />
        {/* <TextCanvas /> */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link to="/*">Home</Link>
          </li>

          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link to="tech">Skill</Link>
          </li>

          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link to="gallery">Gallery</Link>
          </li>

          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link to="race">Race Game</Link>
          </li>

          <li className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <Link to="contact">Contact</Link>
          </li> */}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <Link to="/*">Home</Link>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <Link to="tech">Skill</Link>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <Link to="gallery">Gallery</Link>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <Link to="race">Race Game</Link>
              </li>

              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
