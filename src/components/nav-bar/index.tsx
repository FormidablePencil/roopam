import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";
import NavbarToggleBtn from "./navbar-toggle-btn";
import { logoImg } from "../../static-data/images";
import { NavigationItemsT, navigationItems } from "../../static-data/navigation";
import ReactTooltip from "react-tooltip";

function NavBar() {
  const { pathname } = useLocation();
  const history = useHistory();

  const isHome = pathname === "/" && "active";
  const isContact = pathname === "/contact" && "active";
  const isProject = pathname !== "/" && pathname !== "/contact" && "active";

  const [navbarOpen, setNavbarOpen] = useState(false);

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
          <div className="logo-container">
            <img src={logoImg} alt="" />
          </div>
          <NavbarToggleBtn
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
          />

          <ul className={navbarOpen ? "active" : ""}>
            <NavItem navigateTo={() => console.log('s')} clName="" navItemData={navigationItems[0]} />

            <NavItem navigateTo={() => console.log('s')} clName="" navItemData={navigationItems[1]} />
            <NavItem navigateTo={() => console.log('s')} clName="" navItemData={navigationItems[2]} />
            <NavItem navigateTo={() => console.log('s')} clName="" navItemData={navigationItems[3]} />
            <NavItem navigateTo={() => console.log('s')} clName="" navItemData={navigationItems[4]} />
            {/* <li */}
            {/*   onClick={() => navigateTo("/")} */}
            {/*   className={`nav-item ${isHome}`} */}
            {/* > */}
            {/*   Home */}
            {/* </li> */}

            {/* <li */}
            {/*   className={`nav-item ${isProject} hide-on-small`} */}
            {/*   onClick={() => navigateTo("/projects/parallax")} */}
            {/* > */}
            {/*   Projects */}
            {/* </li> */}
            {/* <li */}
            {/*   onClick={toggleProjectsDropdown} */}
            {/*   className={`nav-item ${ */}
            {/*     openProjects ? "open-projects" : "closed-projects" */}
            {/*   } */} 
            {/* ${isProject && "active"} */}
            {/* hide-on-large`} */}
            {/* > */}
            {/*   Projects */}
            {/*   <IoIosArrowUp */}
            {/*     size={24} */}
            {/*     className={ */}
            {/*       openProjects ? "dropdown-icon-rotate" : "dropdown-icon" */}
            {/*     } */}
            {/*   /> */}
            {/* </li> */}
            {/* <li */}
            {/*   onClick={() => navigateTo("/contact")} */}
            {/*   className={`nav-item ${isContact}`} */}
            {/* > */}
            {/*   Contact */}
            {/* </li> */}
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

const NavItem = ({
  clName,
  navItemData,
  navigateTo,
}: {
  clName: string;
  navItemData: NavigationItemsT;
  navigateTo;
}) => {
  const [hoveringOver, setHoveringOver] = useState(false)
  const isProject = navItemData.navigateTo === '/company'
  const [openProjects, setOpenProjects] = useState(isProject ? true : false);

  return (
    <li
      onMouseEnter={() => setHoveringOver(true)}
      onMouseLeave={() => setHoveringOver(false)}
      onClick={() => navigateTo(navItemData.navigateTo)}
      className="nav-item"
              // className={`nav-item ${
              //   openProjects ? "open-projects" : "closed-projects"
              // } 
 // ${isProject && "active"} 
            // hide-on-large`}
    >
      {navItemData.title}
      <ul className={ `dropdown-container ${!hoveringOver && 'dropdown-closed'}` }>
        {navItemData.dropdown?.map((item) => (
          <li
            onClick={() => navigateTo(item.navigateTo)}
            className={`nav-item `}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavBar;
