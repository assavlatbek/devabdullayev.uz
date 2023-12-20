import me from "../../images/me.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./hero.css";

const HeroPage = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="sps"></div>
          <div className="hero-row">
            <div className="hero-txt">
              <div>
                <h2 data-aos="zoom-in" data-aos-delay="400">
                  Hello, I'm
                </h2>
                <h1 data-aos="zoom-out" data-aos-delay="800">
                  Savlatbek
                </h1>
                <p data-aos="zoom-in" data-aos-delay="1200">
                  15 y.o Frontend Developer from Tashkent with 6+ months of
                  experience in this field.
                </p>
                <div className="icons">
                  <a
                    data-aos="flip-left"
                    data-aos-delay="1600"
                    href="https://github.com/Savlatbek009"
                    target="_blank"
                    rel="noreferrer"
                    className="icon"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a
                    data-aos="flip-right"
                    data-aos-delay="2000"
                    href="https://t.me/as_savlatbek"
                    target="_blank"
                    rel="noreferrer"
                    className="icon"
                  >
                    <i class="fa-brands fa-telegram"></i>
                  </a>
                  <a
                    data-aos="flip-left"
                    data-aos-delay="2400"
                    href="https://www.instagram.com/savlatbek_coder"
                    target="_blank"
                    rel="noreferrer"
                    className="icon"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-img" data-aos="fade-up" data-aos-delay="2800">
              <div className="image-card">
                <LazyLoadImage
                  className="hero-me"
                  effect="blur"
                  src={me}
                  alt="me"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
