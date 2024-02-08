"use client";
import styles from "./style.module.scss";
import { projects } from "../../data";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "../Card";
import { Element } from "react-scroll";

function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <Element name="projects">
      <section ref={container} className={styles.main}>
        <div className="container">
          <div className={styles.main__wrapper}>
          <h1>
          My <span>Projects</span>
        </h1>
        <br />
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Projects;
