import "./index.scoped.sass";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";

function NavbarToggleBtn({ navbarOpen, setNavbarOpen }) {
  const toggleNavbar = () => setNavbarOpen((prev) => !prev);

  return (
    <div className="container" onClick={toggleNavbar}>
      {navbarOpen ? (
        <RiCloseFill className="icon" />
      ) : (
        <FiMenu className="icon" />
      )}
    </div>
  );
}

export default NavbarToggleBtn;
