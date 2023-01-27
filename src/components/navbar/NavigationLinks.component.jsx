import React from "react";

import { HiHome } from "react-icons/hi";
import { BsTools, BsFillInfoSquareFill } from "react-icons/bs";
import { MdWork, MdPermContactCalendar } from "react-icons/md";

import { useLocation } from "react-router-dom";

import {
  MobText,
  NavigationLink,
  NavigationLinks,
  Span,
  Text,
} from "./Navbar.styles";

const Navigationlinks = ({ handleClick, windowSize }) => {
  const paths = ["Home", "Skills", "About", "Projects", "Contact"];

  const chooseSymbol = (path) => {
    switch (path) {
      case "Home": {
        return <HiHome />;
      }
      case "Skills": {
        return <BsTools />;
      }
      case "About": {
        return <BsFillInfoSquareFill />;
      }
      case "Projects": {
        return <MdWork />;
      }
      case "Contact": {
        return <MdPermContactCalendar />;
      }
      default:
        return <p>none</p>;
    }
  };

  const { pathname } = useLocation();

  return (
    <NavigationLinks>
      <div></div>
      {paths.map((path, index) => {
        return (
          <div data-aos="fade-up">
            <NavigationLink
              onClick={windowSize.width <= 800 && handleClick}
              isActive={
                path.toLocaleLowerCase() === pathname.replace("/", "") ||
                (index === 0 && pathname.length <= 1)
              }
              to={`/${path.toLocaleLowerCase()}`}
            >
              {path.toLocaleLowerCase() === pathname.replace("/", "") ||
              (index === 0 && pathname.length <= 1) ? (
                <Span data-aos="fade-left">{chooseSymbol(path)}</Span>
              ) : (
                <Text data-aos="fade-left">
                  <MobText>{path}</MobText>
                </Text>
              )}
            </NavigationLink>
          </div>
        );
      })}
    </NavigationLinks>
  );
};

export default Navigationlinks;
