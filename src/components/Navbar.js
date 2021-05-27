import NavbarContainer from '../styles/components/NavbarContainer';

import logo from "../assets/logos/logo.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <figure>
        <img src={logo} alt="" />
      </figure>
    </NavbarContainer>
  );
}

export default Navbar;
