import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import NavbarContainer from '../styles/components/Navbar/NavbarContainer';
import MenuContainer from '../styles/components/Navbar/MenuContainer';
import Dropdown from '../styles/components/Navbar/Dropdown';

import logo from "../assets/logos/logo.svg";
import burgerIcon from '../assets/icons/icon-hamburger.svg';
import closeIcon from '../assets/icons/icon-close-menu.svg'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownMenu = useRef();
  const menuIcon = useRef();

  const navigationOptions = ["About", "Discover", "Get Started"];

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (!dropdownMenu.current.contains(event.target) && !menuIcon.current.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <NavbarContainer>
      <figure>
        <img src={logo} alt="Crowdfund logotype" />
      </figure>
      <MenuContainer>
        <figure onClick={handleClick}>
          <img
            src={!isOpen ? burgerIcon : closeIcon}
            alt="Burger Icon. Press enter to open the navigation menu"
            ref={menuIcon}
          />
        </figure>
        <Dropdown isOpen={isOpen} ref={dropdownMenu}>
          <ul>
            {navigationOptions.map((option) => {
              return (
                <li key={nanoid()} border={option}>
                  <Link to={`#${option}`}>{option}</Link>
                </li>
              );
            })}
          </ul>
        </Dropdown>
      </MenuContainer>
    </NavbarContainer>
  );
}

export default Navbar;
