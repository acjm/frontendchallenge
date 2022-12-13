import React from "react";
import CardItem from "../components/Card/CardItem";
import "../components/Card/Cards.scss";

export default {
  title: "Components/CardItem",
  component: CardItem,
};

export const carditem = (args) => (
  <CardItem
    city={{
      id: 2,
      name: "London",
      country: "United Kingdom",
      description:
        "London is the capital and largest city of England and the United Kingdom... ",
      image:
        "https://cdn.pixabay.com/photo/2015/08/14/21/27/lights-888916_960_720.jpg",
      isHighlighted: false,
    }}
  />
);
