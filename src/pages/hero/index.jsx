import React from "react";
import me from "../../images/me.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroPage = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="sps"></div>
          <div className="hero-row">
            <div className="hero-txt" data-aos="fade-down">
              <div>
                <h2>Hello, I'm</h2>
                <h1>Savlatbek Abdullayev</h1>
                <p>
                  15 y.o Frontend Developer from Tashkent with 6+ months of
                  experience in this field.
                </p>
                <div className="icons">
                  <a href="https://github.com/Savlatbek009" className="icon">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="https://t.me/as_savlatbek" className="icon">
                    <i class="fa-brands fa-telegram"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/savlatbek_coder"
                    className="icon"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <div className="image-card" data-aos="fade-up">
                <LazyLoadImage width="300px" effect="blur" src={me} alt="me" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
