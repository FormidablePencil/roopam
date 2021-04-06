import "./index.scoped.sass";
import { logoImg } from "../static-data/images";
import {Link} from "react-router-dom"

function Navbar() {
  const navbarItem = [
    "Company",
    "COVID-19",
    "Digital Pathology",
    "Solutions For",
    "Professional Services",
    "More",
  ];

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logoImg} alt="" />
      </div>
      <ul className="navbar-container">
        {navbarItem.map((item) => (
          <li>
            <Link to='/'>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
