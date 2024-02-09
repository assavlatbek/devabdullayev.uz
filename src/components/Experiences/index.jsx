import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { Element } from "react-scroll";

const Experiences = () => {
  const experiences = [
    {
      logo: "/images/it-park.png",
      id: "blackphoto",
      position: "Front-end mentor & developer at IT PARK",
      period: "Jan 2023 - March 2023",
      desc: "As a junior front-end developer at IT PARK, We finished some projects successfully with team, and I teached a lot of students IT, and for some reasons I leave that company!",
    },
    {
      logo: "/images/technolife.png",
      id: "",
      position: "Strong junior developer at Technolife",
      period: "Dec 2023 - Present",
      desc: "As a strong junior developer at Technolife, I finished many projects online/offline alone, and so far I've been working really well with the team, and I think that's so great!",
    },
    {
      logo: "/images/it-park.png",
      id: "blackphoto",
      position: "Front-end mentor & developer at IT CENTER",
      period: "Jan 2024 - Present",
      desc: "As a strong junior front-end developer at IT Center, I'm teaching web development to students and I'm doing some projects at IT CENTER alone. I liked this company and team!",
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
              {experiences.map(({ logo, id, period, position, desc }) => (
                <div
                  key={period}
                  className={styles.experiences__wrapper_cards_card}
                >
                  <div className={styles.experiences__wrapper_cards_card_top}>
                    <Image
                      alt="Company logo"
                      src={logo}
                      id={id}
                      width={35}
                      height={35}
                    />
                    <p>{position}</p>
                    <p>{period}</p>
                  </div>
                  <p>{desc}</p>
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
