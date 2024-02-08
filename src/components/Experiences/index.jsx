import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Element } from "react-scroll";

const Experiences = () => {
  const experiences = [
    {
      logo: "https://i.pinimg.com/originals/9c/85/47/9c8547399c1e4dd14e1a30f3e05d179a.png",
      position: "Lead Software Engineer at Google",
      period: "Nov 2019 - Present",
      desc: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      logo: "https://brandslogos.com/wp-content/uploads/images/large/youtube-icon-logo-black-and-white.png",
      position: "Software Engineer at Youtube",
      period: "Jan 2017 - Oct 2019",
      desc: "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    },
    {
      logo: "https://www.edigitalagency.com.au/wp-content/uploads/apple-logo-png-black.png",
      position: "Junior Software Engineer at Apple",
      period: "Jan 2016 - Dec 2017",
      desc: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
    },
  ];
  return (
    <Element name="experiences">
      <section className={styles.experiences}>
        <div className="container">
          <div className={styles.experiences__wrapper}>
            <h1>
              My <span>Experiences</span>
            </h1>
            <div className={styles.experiences__wrapper_cards}>
              {experiences.map((exp) => (
                <div
                  key={exp.period}
                  className={styles.experiences__wrapper_cards_card}
                >
                  <div className={styles.experiences__wrapper_cards_card_top}>
                    <Image
                      alt="Company logo"
                      src={exp.logo}
                      width={35}
                      height={35}
                    />
                    <p>{exp.position}</p>
                    <p>{exp.period}</p>
                  </div>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experiences;
