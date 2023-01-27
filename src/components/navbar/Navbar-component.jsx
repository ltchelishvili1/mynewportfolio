import React, { useEffect, useState, useContext } from "react";

import {
  CustNavlink,
  FiMen,
  GrClse,
  NavbarContainer,
} from "./Navbar.styles";

import AOS from "aos";
import "aos/dist/aos.css";

import Backdrop from "../background/background-component";
import Navigationlinks from "./NavigationLinks.component";

import { ModeContext } from "../../contexts/ModeContext";

const Navbar = () => {

  const {isDark} = useContext(ModeContext)

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [toggleMenu, setToggleMenu] = useState(true);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      setToggleMenu(window.innerWidth <= 800 ? false : true);
    };
  }, []);


  return (
    <NavbarContainer>
      <CustNavlink to="/">L.TCHELISHVILI</CustNavlink>
      {!toggleMenu ? (
        <FiMen color={!isDark ? "white" : "black"} size={30} onClick={handleClick} />
      ) : (
        <GrClse color={!isDark ? "white" : "black"} size={30} onClick={handleClick} />
      )}
      {toggleMenu && (
       <Navigationlinks handleClick= {handleClick} windowSize ={ windowSize}/>
      )}

      {toggleMenu && windowSize.width <= 800 && <Backdrop />}
    </NavbarContainer>
  );
};

export default Navbar;
