import React from 'react' 
import DrinkCard from './DrinkCard';
import { Card } from "semantic-ui-react";


function DrinkPage( {drinks, setCart, user} ){

    const renderDrink = drinks.map(oneDrink => <DrinkCard key = {oneDrink.key} drink = {oneDrink} setCart = {setCart} user = {user} /> )

    return(
        <Card.Group itemsPerRow={3}>
            {renderDrink}
            </Card.Group>
    )



}

export default DrinkPage;