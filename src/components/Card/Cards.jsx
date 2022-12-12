import React, { useState } from 'react'
import { Cities } from '../../data/Cities'
import CardItem from './CardItem'
const Cards = () => {

const [cities, setCities] = useState(Cities)
    return (
        <div className='c-CitiesContainer'>
            {cities && cities?.map((city) => (
                <CardItem key={city.id} city={city} />
            ))}
        </div>
    )
}

export default Cards    