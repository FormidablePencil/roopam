import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { useHistory, useLocation } from "react-router-dom";
import "./index.scoped.sass";
import NavbarToggleBtn from "./navbar-toggle-btn";
import { logoImg } from "../../static-data/images";

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

  const navigationItems = [
    {
      title: "Company",
      navigateTo: "/company",
      dropdown: [
        { title: "About", navigateTo: "/about" },
        { title: "Team", navigateTo: "/team" },
        { title: "Partners", navigateTo: "/partners" },
        { title: "Clients", navigateTo: "/clients" },
        { title: "Customer Testimonals", navigateTo: "/testimonals" },
        { title: "Contact", navigateTo: "/contact" },
      ],
    },
    { title: "COVID-19", navigateTo: "/covid" },
    {
      title: "Digital Pathology",
      navigateTo: "/",
      dropdown: [
        { title: "Pathologists", navigateTo: "/pathologists" },
        { title: "Leadership", navigateTo: "/leadership" },
        { title: "IT", navigateTo: "/it" },
        { title: "Patients", navigateTo: "/patients" },
        { title: "Implementation", navigateTo: "/implementation" },
        { title: "Integration", navigateTo: "/integration" },
        { title: "Telepathology", navigateTo: "/telepathology" },
        { title: "Workflow", navigateTo: "/workflow" },
        { title: "Tumor Boards", navigateTo: "/tumor-boards" },
        {
          title: "Validation and Review",
          navigateTo: "/validation-and-review",
        },
        { title: "Clinical Trials", navigateTo: "/clinical-trials" },
        { title: "Support", navigateTo: "/support" },
        { title: "SAAS Hosted Solution", navigateTo: "/saas-hosted-solution" },
      ],
    },
    { title: "Solutions For", navigateTo: "/solutions" },
    {
      title: "Professional Services",
      navigateTo: "/services",
      dropdown: [
        { title: "Physician Portal", navigateTo: "/physician-portal" },
        {
          title: "Ascent - Cloud-based LIS",
          navigateTo: "/ascent-cloud-based-lis",
        },
        { title: "IT Services", navigateTo: "/copy-of-services-2" },
        { title: "News & Events", navigateTo: "/news-events" },
        {
          title: "Awards and Recognition",
          navigateTo: "/awards-and-recognition",
        },
        { title: "Blog", navigateTo: "/blog" },
        { title: "Careers", navigateTo: "/careers" },
      ],
    },
  ];

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
