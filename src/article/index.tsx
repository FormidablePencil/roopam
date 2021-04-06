import { ArticlesT } from "../static-data/homeArticles";
import "./index.scoped.sass";

function Article({ content }: { content: ArticlesT[] }) {
  return (
    <ul className="container">
      {content.map((article) => (
        <li>
          <h2>{article.title}</h2>
          <p>{article.paragraph}</p>
        </li>
      ))}
    </ul>
  );
}

export default Article;
