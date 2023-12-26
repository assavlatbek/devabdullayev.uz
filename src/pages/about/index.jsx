import { TypeAnimation } from "react-type-animation";

import { LazyLoadImage } from "react-lazy-load-image-component";
import me from "../../images/me2.jpg";

import "./about.css";

const AboutPage = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title-div">
          <h1 className="section-title" data-aos="flip-right">
            About
          </h1>
        </div>
        <div className="row">
          <div className="about-img-card" data-aos="zoom-in-up">
            <LazyLoadImage
              effect="blur"
              src={me}
              width="100%"
              className="about-img"
              alt=""
            />
          </div>
          <div
            className="about-text-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <TypeAnimation
              sequence={["Hello, I'm Savlatbek"]}
              wrapper="h1"
              speed={100}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
            <br />
            <p>
              I am a front-end developer. I have been learning programming for{" "}
              <b className="theme-color">3 years</b>, first I learned from free
              lessons on <b className="theme-color">YouTube</b>, and then I
              bought the course "Samar Badriddinov" in{" "}
              <b className="theme-color">Mohirdev</b>, I finished everything
              online. And in the end I successfully finished the training center{" "}
              <b className="theme-color">"Najot Ta'lim"</b>. I'm currently
              looking for job!
            </p>
            <br />
            <p>
              I have some experience and Currently,{" "}
              <b className="theme-color">3+ real projects</b> that I made are
              working in the ".uz" domain.
            </p>
            <br />
            <p>
              <p>
                <b>1.</b>{" "}
                <a
                  href="https://libertytravel.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-color"
                >
                  libertytravel.uz
                </a>{" "}
                - Tour services
              </p>
              <p>
                <b>2.</b>{" "}
                <a
                  href="https://united4travel.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-color"
                >
                  united4travel.uz
                </a>{" "}
                - Tour services
              </p>
              <p>
                <b>3.</b>{" "}
                <a
                  href="https://tradeandtravel.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-color"
                >
                  tradeandtravel.uz
                </a>{" "}
                - Tour services
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
