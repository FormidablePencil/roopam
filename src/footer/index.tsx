import "./index.scoped.sass";
import { someDPAlogo } from "../static-data/images";
import ArticleWrapper from "./article-wrapper";
import ContactsSectionFooter from "./contacts-section-footer";

function Footer() {
  const navigationItems = ["contacts"];
  return (
    <ul className="container">
      <ArticleWrapper title="Gestalt Diagnostics">
        <p>
          IT Services to help you save money, stay on track with current
          projects or augment your staff
        </p>
        <ul>
          {navigationItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </ArticleWrapper>
      <ArticleWrapper title="Read our latest blog post">
        <BlogCard
          description="FDA Announces Notice of Intent to Make Temporar…"
          title=""
          image="https://static.wixstatic.com/media/11062b_451c0858019f415eb514fde1c586f247~mv2.jpeg/v1/fill/w_530,h_353,al_c,q_90,usm_0.66_1.00_0.01/11062b_451c0858019f415eb514fde1c586f247~mv2.webp"
        />
        <SomeLogo />
      </ArticleWrapper>
      <ContactsSectionFooter />
    </ul>
  );
}

export default Footer;

const SomeLogo = () => <img src={someDPAlogo} alt="dpa" />;

const BlogCard = ({ image, title, description }) => {
  return <div />;
};
