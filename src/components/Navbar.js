import { useState } from 'react';

import NavbarContainer from '../styles/components/Navbar/NavbarContainer';
import MenuContainer from '../styles/components/Navbar/MenuContainer';

import logo from "../assets/logos/logo.svg";
import burgerIcon from '../assets/icons/icon-hamburger.svg';
import closeIcon from '../assets/icons/icon-close-menu.svg'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const navigationOptions = ["About", "Discover", "Get Started"];

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <NavbarContainer>
      <figure>
        <img src={logo} alt="Crowdfund logotype" />
      </figure>
      <MenuContainer>
        <figure onClick={handleClick}>
          <img src={!isOpen ? burgerIcon : closeIcon} alt="Burger Icon. Press enter to open the navigation menu" />
        </figure>
      </MenuContainer>
    </NavbarContainer>
  );
}

export default Navbar;
