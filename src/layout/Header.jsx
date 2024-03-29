import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomLink from "../components/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setNavbarClass("navbar-shrink");
      } else {
        setNavbarClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.add("hiddin");
    if (menuOpen) {
      document.body.classList.add("hiddin");
    } else {
      document.body.classList.remove("hiddin");
    }
  }, [menuOpen]);

  return (
    <header className={`${navbarClass}`}>
      <nav className="container">
        <div className="logo">
          <a href={"/"}>
            <h1>Abdullayev</h1>
          </a>
        </div>

        <div className={`navigation ${menuOpen ? "open" : "hide"}`}>
          <div onClick={() => setMenuOpen(false)} className="navs">
            <CustomLink targetId="hero">Home</CustomLink>
            <CustomLink targetId="about">About</CustomLink>
            <CustomLink targetId="portfolio">Portfolios</CustomLink>
            <CustomLink targetId="contact">Contacts</CustomLink>
          </div>
        </div>
        <div className={menuOpen ? `open-menu menu` : `menu`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <LazyLoadImage
              width={"50px"}
              height={"50px"}
              src={
                menuOpen
                  ? `https://static.thenounproject.com/png/4984268-200.png`
                  : `https://www.svgrepo.com/show/315606/menu-left.svg`
              }
              effect="blur"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
