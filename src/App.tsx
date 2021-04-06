import Navbar from "./navbar";
import VideoSection from "./video-section";
import Articles from "./article";
import SecondVideoSection from "./second-video-section";
import CenterTextHome from "./components/text-center-home";
import { firstArticles, secondArticles } from "./static-data/homeArticles";
import Footer from "./footer";
import { BrowserRouter } from "react-router-dom";
import "./App.sass";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <VideoSection />
        <CenterTextHome />
        <Articles content={firstArticles} />
        <SecondVideoSection />
        <Articles content={secondArticles} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
