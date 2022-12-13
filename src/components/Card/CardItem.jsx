import React from "react";

const CardItem = ({ city }) => {
  const { name, description, image, country } = city;

  return (
    <div
      data-testid="card-item"
      className={`c-CardItem ${
        city.isHighlighted ? "c-CardItem--isHighlighted" : ""
      }`}
      aria-label={`Card of ${name}`}>
      <div className="c-CardItemInfo">
        <span aria-label={`Country of ${name}`}>{country}</span>
        <h2 aria-label={`Title of ${name}`}>{name}</h2>
        <p aria-label={`Description of ${name}`}>{description}</p>
        <button
          data-testid="button"
          className="c-CardLink"
          aria-label={`Explore ${name}`}>
          Explore More
        </button>
      </div>
      <img src={image} alt={city.name} />
    </div>
  );
};

export default CardItem;
