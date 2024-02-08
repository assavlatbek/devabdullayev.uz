import styles from "./style.module.scss";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt, FaPython, FaNode, FaPhp } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import Magnetic from "@/commons/Magnetic";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name="skills">
      <section className={styles.skills}>
        <div className="container">
          <div className={styles.skills__wrapper}>
            <h1>
              My <span>Skills</span>
            </h1>
            <div className={styles.skills__wrapper_cards}>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <FaHtml5 size={80} />
                    </div>
                  </Magnetic>
                  <h1>Html</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <SiCss3 size={80} />
                    </div>
                  </Magnetic>
                  <h1>Css</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <FaSass size={80} />
                    </div>
                  </Magnetic>
                  <h1>Sass</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <AiOutlineAntDesign size={80} />
                    </div>
                  </Magnetic>
                  <h1>Antd</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <SiMui size={80} />
                    </div>
                  </Magnetic>
                  <h1>MUI</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <SiTailwindcss size={80} />
                    </div>
                  </Magnetic>
                  <h1>Tailwind</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <RiJavascriptFill size={80} />
                    </div>
                  </Magnetic>
                  <h1>Javascript</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <BiLogoTypescript size={80} />
                    </div>
                  </Magnetic>
                  <h1>Typescript</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <FaReact size={80} />
                    </div>
                  </Magnetic>
                  <h1>React.Js</h1>
                </div>
              </div>
              <div className={styles.skills__wrapper_cards_card}>
                <div className={styles.skills__wrapper_cards_card_outer}></div>
                <div className={styles.skills__wrapper_cards_card_outer2}></div>
                <div className={styles.skills__wrapper_cards_card_content}>
                  <Magnetic>
                    <div>
                      <TbBrandNextjs size={80} />
                    </div>
                  </Magnetic>
                  <h1>Next.js</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
