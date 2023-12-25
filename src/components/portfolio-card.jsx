import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PortfolioCard = ({ img, title, descr, tags }) => {
  return (
    <div className="portfolio-item">
      <LazyLoadImage width="100%" src={img} alt="portfolio" />
      <div className="portfolio-text">
        <h2 className="portfolio-name">{title}</h2>
        <p className="portfolio-descr">{descr}</p>
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
