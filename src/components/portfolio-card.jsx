import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortfolioCard = ({ img, title, descr, tags, link }) => {
  return (
    <div className={`portfolio-item`}>
      <LazyLoadImage width="100%" src={img} effect="blur" alt="portfolio" />
      <div className="portfolio-text">
        <h2 className="portfolio-name theme-color">{title}</h2>
        <p className="portfolio-descr">{descr}</p>
        <br />
        <a href={link} target="_blank" rel="noreferrer">
          <button class="c-button c-button--gooey">
            Open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
            >
              <path d="M 3 3 L 3 21 L 21 21 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 3 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"></path>
            </svg>
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ display: "block", height: 0, width: 0 }}
          >
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
              </filter>
            </defs>
          </svg>
        </a>
        <br />
        <div className="portfolio-skills">
          {tags.map((tag) => (
            <p># {tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
