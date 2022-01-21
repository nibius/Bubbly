import React from "react";
import { Card} from "semantic-ui-react";
import styled from 'styled-components'

function DrinkCard( {drink:{id,name, price}, setCart, user} ){

   
   
    function handleClick(){
    fetch("/orders",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            purchase: false,
            user_id: user.id,
            drink_id: id
        })
    })
    .then(resp => resp.json())
    .then(resp => setCart(resp))
    }


return(
        <>
    <Card>
        Drink name: {name},  
        Price: ${price} 
    </Card>
    <Button class="a" onClick={handleClick}> Add to Cart </Button>
    </>

)


}

export default DrinkCard;

const Button = styled.button`
font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px;
  border-radius: none;

.a:hover{
    background-color:black;
}

`