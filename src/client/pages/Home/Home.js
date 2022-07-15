import { Link } from "react-router-dom";
import "./Home.scss";
import importImage from "../../../assets/images/main-image.jpeg";

export default function Home() {
  return (
    <section className="home">
      <h1 className="home__header">Welcome to Breast Cancer Test Service</h1>
      <div className="home__banner banner">
        <div className="banner__details">
          <h2 className="banner__details">Take Breast Cancer Test</h2>
          <Link className="cta-btn banner__start-now" to="/assessment">
            Start Now
          </Link>
        </div>

        <img
          className="banner__image"
          src={importImage}
          alt="Breast cancer logo"
        />
      </div>
    </section>
  );
}
