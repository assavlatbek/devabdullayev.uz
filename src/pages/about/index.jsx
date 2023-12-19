import { LazyLoadImage } from "react-lazy-load-image-component";
import me from "../../images/me2.jpg";

import "./about.css";

const AboutPage = () => {
  return (
    <section id="about">
      <div className="container">
        <h1 className="section-title" data-aos="flip-right">
          About
        </h1>
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
            <h1 className="">Hi there</h1>
            <br />
            <p>
              I am a front-end developer. I have been learning programming for{" "}
              <b className="theme-color">3 years</b>, first I learned from free
              lessons on YouTube, and then I bought the course "Samar
              Badriddinov" in Mohirdev, I finished everything online. And in the
              end I successfully finished the training center{" "}
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
              <p>2. odynovotours.uz - Tour services</p>
              <p>2. united4travel.uz - Tour services</p>
              <p>2. tradeandtravel.uz - Tour services</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
