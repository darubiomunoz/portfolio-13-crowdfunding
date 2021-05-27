import NavbarContainer from '../styles/components/NavbarContainer';

import logo from "../assets/logos/logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="" />
    </NavbarContainer>
  );
}

export default Navbar;
