import { someDPAlogo } from "../../static-data/images";
import ArticleWrapper from "../article-wrapper";
import "./index.scoped.sass";
import { Link } from "react-router-dom";

function FirstSectionFooter() {
  const navigationItems = [
    { text: "News and Events", navigateTo: "/news" },
    { text: "Partners", navigateTo: "/partners" },
    { text: "Careers", navigateTo: "/careers" },
    { text: "Contacts", navigateTo: "/contact" },
  ];
  return (
    <div className="section-container">
      <ArticleWrapper title="Gestalt Diagnostics">
        <p>
          IT Services to help you save money, stay on track with current
          projects or augment your staff
        </p>
        <ul>
          {navigationItems.map((item) => (
            <li>
              <Link to={item.navigateTo}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <SomeLogo />
      </ArticleWrapper>
    </div>
  );
}

const SomeLogo = () => <img className="icon" src={someDPAlogo} alt="dpa" />;

export default FirstSectionFooter;
