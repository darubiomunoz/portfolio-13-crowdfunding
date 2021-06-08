import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import NavbarContainer from "../styles/components/Navbar/NavbarContainer";
import MenuContainer from "../styles/components/Navbar/MenuContainer";
import Dropdown from "../styles/components/Navbar/Dropdown";

import logo from "../assets/logos/logo.svg";
import burgerIcon from "../assets/icons/icon-hamburger.svg";
import closeIcon from "../assets/icons/icon-close-menu.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownMenu = useRef();
  const menuIcon = useRef();
  const navigation = useSelector(
    (state) => state.data.info[0].navbar.navigation
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !dropdownMenu.current.contains(event.target) &&
        !menuIcon.current.contains(event.target)
      )
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavbarContainer>
      <figure className="navbar_image-container">
        <img className="navbar_image" src={logo} alt="Crowdfund logotype" />
      </figure>
      <MenuContainer>
        <figure className="navbar_icon-container" onClick={handleClick}>
          <img className="navbar_icon"
            src={!isOpen ? burgerIcon : closeIcon}
            alt="Burger Icon. Press enter to open the navigation menu"
            ref={menuIcon}
          />
        </figure>
        <Dropdown isOpen={isOpen} ref={dropdownMenu}>
          {
            <ul className="navbar_list">
              {navigation.map((option) => {
                return (
                  <div className="navbar_item-container" key={nanoid()}>
                    <li className="navbar_item">
                      <Link className="navbar_link" to={`#${option}`}>{option}</Link>
                    </li>
                    {option !== "Get Started" && (
                      <div className="divisor"></div>
                    )}
                  </div>
                );
              })}
            </ul>
          }
        </Dropdown>
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;
