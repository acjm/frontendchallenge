import React, { useState } from "react";
import { Cities } from "../../data/Cities";
import CardItem from "./CardItem";

import "./Cards.scss";

const Cards = () => {
  const [cities, setCities] = useState(Cities);
  return (
    <div data-testid="cards" className="c-CardContainer">
      {cities && cities?.map((city) => <CardItem key={city.id} city={city} />)}
    </div>
  );
};

export default Cards;
