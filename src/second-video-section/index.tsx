import "./index.scoped.sass";
import { homePageVid2 } from "../static-data/vidUrls";

function SecondVideoSection() {
  return (
    <div className="container">
      <div className="fade-gradient-top" />
      <video autoPlay muted className="video" id="myVideo">
        <source title={homePageVid2.title} src={homePageVid2.url} />
      </video>
      <div className="fade-gradient" style={{ height: "5em" }} />
      {/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
      {/* allowFullScreen */}
    </div>
  );
}

export default SecondVideoSection;
