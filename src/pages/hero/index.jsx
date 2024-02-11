import me from "../../images/me.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

import "./hero.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroPage = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const constraintsRef = useRef(null);

  let xPercent = 0;
  let direction = +1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * +1),
      },
      x: "500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
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
                  alt="Savlatbek"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="me-text-container">
              <div ref={slider} className="me-text">
                <p ref={firstText}>Savlatbek Abdullayev</p>
                <p ref={secondText}>Savlatbek Abdullayev</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPage;
