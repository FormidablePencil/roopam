import "./index.scoped.sass";

const ArticleWrapper = ({
  title,
  children,
  isContactSection,
}: {
  title;
  children;
  isContactSection?;
}) => {
  return (
    <li className={`container ${isContactSection && "contact-section"}`}>
      <h2>{title}</h2>
      {children}
    </li>
  );
};

export default ArticleWrapper;
