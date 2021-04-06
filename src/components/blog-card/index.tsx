import "./index.scoped.sass";

function BlogCard({ description, title, image }) {
  return (
    <div>
      <p>{description}</p>
      <img src={image.url} alt={image.alt} />
      <p>{title}</p>
    </div>
  );
}

export default BlogCard;
