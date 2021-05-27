import NavbarContainer from '../styles/components/Navbar/NavbarContainer';
import MenuContainer from '../styles/components/Navbar/MenuContainer';

import logo from "../assets/logos/logo.svg";
import burgerIcon from '../assets/icons/icon-hamburger.svg';

const Navbar = () => {
  return (
    <NavbarContainer>
      <figure>
        <img src={logo} alt="Crowdfund logotype" />
      </figure>
      <MenuContainer>
        <figure>
          <img src={burgerIcon} alt="Burger Icon. Press enter to open the navigation menu" />
        </figure>
      </MenuContainer>
    </NavbarContainer>
  );
}

export default Navbar;
