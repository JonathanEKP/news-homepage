import mobileDesign from "../../assets/images/image-web-3-mobile.jpg";
import desktopDesign from "../../assets/images/image-web-3-desktop.jpg";
import "./Hero.css";
import Aside from "../Aside/Aside";

function Hero() {
  return (
    <div className="mt-4 row g-0 ">
      <main className="col-xl-9 col-lg-8 col-md-6  col-12">
        <picture>
          <source media="(max-width: 575px)" srcSet={mobileDesign} />
          <img
            src={desktopDesign}
            alt="Web 3 imagen reference"
            className="hero-img"
          />
        </picture>
        <div className="d-lg-flex justify-content-between gap-5 mt-lg-4">
          <div className="title-container w-100">
            <h1 className="web3-title ">The Bright Future of Web 3.0?</h1>
          </div>
        
          <div className="w-100">
            <p className="web3-text py-3">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button type="button" className="btn btn-custom p-3 rounded-0">
              READ MORE
            </button>
          </div>
        </div>
      </main>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 px-3 mt-3 mt-md-0">
        <Aside/>
      </div>
    </div>
  );
}

export default Hero;
