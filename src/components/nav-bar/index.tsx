import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";
import NavbarToggleBtn from "./navbar-toggle-btn";

function NavBar() {
  const { pathname } = useLocation();
  const history = useHistory();

  const isHome = pathname === "/" && "active";
  const isContact = pathname === "/contact" && "active";
  const isProject = pathname !== "/" && pathname !== "/contact" && "active";

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(isProject ? true : false);

  const navigateTo = (navTo: string) => {
    if (navTo === "/contact" || navTo === "/") setOpenProjects(false);
    history.push(navTo);
    setNavbarOpen(false);
  };

  const toggleProjectsDropdown = () => setOpenProjects((prev) => !prev);
  const closeNav = () => setNavbarOpen((prev) => !prev);

  return (
    <>
      <div className="absolute-container">
        <div className="container">
          <NavbarToggleBtn
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
          />
          <h1>Jordan Sheets</h1>
          <ul className={navbarOpen ? "active" : ""}>
            <li
              onClick={() => navigateTo("/")}
              className={`nav-item ${isHome}`}
            >
              Home
            </li>
            <li
              className={`nav-item ${isProject} hide-on-small`}
              onClick={() => navigateTo("/projects/parallax")}
            >
              Projects
            </li>
            <li
              onClick={toggleProjectsDropdown}
              className={`nav-item ${
                openProjects ? "open-projects" : "closed-projects"
              } 
            ${isProject && "active"}
            hide-on-large`}
            >
              Projects
              <IoIosArrowUp
                size={24}
                className={
                  openProjects ? "dropdown-icon-rotate" : "dropdown-icon"
                }
              />
            </li>
            <li
              onClick={() => navigateTo("/contact")}
              className={`nav-item ${isContact}`}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={closeNav}
        className={navbarOpen ? "on-tap-close-container" : ""}
      />
    </>
  );
}

export default NavBar;
