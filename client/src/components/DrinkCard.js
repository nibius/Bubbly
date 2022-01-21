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
    <Button>
    <button id="a" onClick={handleClick}> Add to Cart </button>
    </Button>
    </>

)


}

export default DrinkCard;

const Button = styled.div`
  padding-top: 10px;

#a{
    box-sizing: border-box;
        padding:10px;
        float:left;
        border: 5px solid  #feffdf;
        border-radius:10px;
        background:white;
}


#a:hover{
    background-color:gray;
}

`