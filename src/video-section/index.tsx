import { bookImg } from "../static-data/images";
import { homePageVid1 } from "../static-data/vidUrls";
import "./index.scoped.sass";

function VideoSection() {
  const actionButton = "Click here for COVID-19 Support";

  return (
    <div className="container">
      <div className="text-container">
        <h1>Improving Pathology Diagnosis and Treatment – Anywhere, Anytime</h1>
        <p>Gestalt Enables Best-in-Class Patient Care</p>
      </div>

      <video autoPlay muted loop className="video" id="myVideo">
        <source title={homePageVid1.title} src={homePageVid1.url} />
      </video>

      <button>{actionButton}</button>
      <img src={bookImg} alt="certification" />
      <div className="fade-gradient" />
    </div>
  );
}

export default VideoSection;
