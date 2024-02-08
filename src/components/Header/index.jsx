"use client";
import { useRef, useState, useEffect } from "react";
import Magnetic from "@/commons/Magnetic";
import styles from "./style.module.scss";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [themeDark, setThemeDark] = useState(false);
  const sliderRef = useRef(null);
  const [headerOpen, setHeaderOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isShrink = window.scrollY > 100;
      setShrink(isShrink);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sliderMouseOver = (e) => {
    const left = e.currentTarget.offsetLeft;
    const width = e.currentTarget.getBoundingClientRect().width;
    console.log(left);
    console.log(width);
    sliderRef.current.style.left = `${left + width / 2}px`;
    sliderRef.current.style.width = `${width}px`;
  };
  const sliderMouseLeave = (e) => {
    sliderRef.current.style.left = `15px`;
    sliderRef.current.style.width = `50px`;
    sliderRef.current.style.height = `3px`;
    sliderRef.current.style.borderRadius = `15px`;
  };
  return (
    <header className={`${styles.header} ${shrink ? styles.shrink : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div ref={sliderRef} className={styles.indicator}></div>
          <button
            className={styles.nav__toggle}
            onClick={() => setHeaderOpen(!headerOpen)}
          >
            <FaBarsStaggered size={25} />
          </button>
          <div className={styles.nav__logo}>
            <h1 onClick={() => (window.location.href = "/")}>AS</h1>
          </div>
          <ul className={`${headerOpen ? styles.headerOpen : ""}`}>
            <Link
              href="/"
              to="skills"
              activeClass="activeHeader"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Skills
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="experiences"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Experiences
                </li>
              </Magnetic>
            </Link>

            <Link
              href="/"
              activeClass="activeHeader"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Projects
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="clients"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Clients
                </li>
              </Magnetic>
            </Link>
            <Link
              href="/"
              activeClass="activeHeader"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className={styles.category}
            >
              <Magnetic>
                <li
                  onMouseEnter={(e) => sliderMouseOver(e)}
                  onMouseLeave={(e) => sliderMouseLeave(e)}
                >
                  Contact Me
                </li>
              </Magnetic>
            </Link>
          </ul>
          <div className={styles.nav__actions}>
            <Magnetic>
              <button
                onMouseEnter={(e) => {
                  const left = e.currentTarget.offsetLeft;
                  const width = e.currentTarget.getBoundingClientRect().width;
                  sliderRef.current.style.left = `${left + width / 2}px`;
                  sliderRef.current.style.width = `5px`;
                  sliderRef.current.style.height = `5px`;
                  sliderRef.current.style.borderRadius = `50%`;
                }}
                onMouseLeave={(e) => {
                  sliderRef.current.style.left = `15px`;
                  sliderRef.current.style.width = `50px`;
                  sliderRef.current.style.height = `3px`;
                  sliderRef.current.style.borderRadius = `15px`;
                }}
                onClick={() => {
                  document.body.classList.toggle("dark");
                  setThemeDark(!themeDark);
                }}
              >
                {themeDark ? <FaSun size={20} /> : <BsMoonFill size={20} />}
              </button>
            </Magnetic>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
