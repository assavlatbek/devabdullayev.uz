import Magnetic from "@/commons/Magnetic";
import Image from "next/image";
import styles from "./style.module.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { Element } from "react-scroll";

export default function Testimonials() {
  const addBlackCardClass = (index) => {
    return index % 2 !== 0 ? styles.blackCard : "";
  };

  const settings = {
    dots: true,
    navs: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      descr:
        "He's really awesome programmer, He complated my tour company's website for 3 days and I pay for website very small price!",
      name: "Dilshod Azizov",
      profession: "Tour company",
    },
    {
      id: 2,
      descr:
        "I had a problem, but it was. He helped me to find a lot of students with his created website!",
      name: "Abdulaziz Toshpulatov",
      profession: "Education",
    },
    {
      id: 3,
      descr:
        "I needed to license, They said if you have company website we will give it to you, and Savlatbek helped to me!",
      name: "Jahongir Xamidov",
      profession: "Tour company",
    },
  ];

  return (
    <Element name="clients">
      <section className={styles.testimonials}>
        <div className="container">
          <h1>
            My <span>Clients</span>
          </h1>
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`${styles.testimonials_card} ${addBlackCardClass(
                    index
                  )}`}
                >
                  <div className={styles.testimonials_card_style}>
                    <div className={styles.testimonials_card_header}>
                      <div>
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.profession}</p>
                      </div>
                    </div>
                    <div className={styles.testimonials_card_descr}>
                      {testimonial.descr}
                    </div>
                    <div className={styles.testimonials_card_rate}>
                      <b>5.0</b> <b>&#9733; &#9733; &#9733; &#9733; &#9733;</b>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Element>
  );
}
