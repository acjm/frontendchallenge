import React from 'react'

const CardItem = ({ city }) => {


    const { name, description, image, country } = city;
  return (
    <div className={`c-CardItem ${city.isHighlighted ? "c-CardItem--isHighlighted" : ""}`}>
        <div className='c-CardItemInfo'>
            <span>{country}</span>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
        <img src={image} alt={city.name} />
    </div>
  )
}

export default CardItem