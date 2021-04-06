import "./index.scoped.sass";

function BlogCard({ description, title, image }) {
  return (
    <div className="container">
      <p>{title}</p>
      <img src={image.url} alt={image.alt} />
      <p className="discription">{description}</p>
    </div>
  );
}

export default BlogCard;
