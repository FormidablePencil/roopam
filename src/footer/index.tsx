import BlogCard from "../components/blog-card";
import {blogImg} from "../static-data/images";
import ArticleWrapper from "./article-wrapper";
import ContactsSectionFooter from "./contacts-section-footer";
import FirstSectionFooter from "./first-section-footer";
import "./index.scoped.sass";

function Footer() {
  return (
    <ul className="container">
      <FirstSectionFooter />
      <ArticleWrapper title="Read our latest blog post">
        <BlogCard
          title=""
          description="FDA Announces Notice of Intent to Make Temporar…"
          image={blogImg}
        />
      </ArticleWrapper>
      <ContactsSectionFooter />
    </ul>
  );
}

export default Footer;
