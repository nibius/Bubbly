import React, {useState} from "react";
import { Card, Button } from "semantic-ui-react";


function Cart( {cart , user, setCart } ){
    

  function showCart(){
            
                if(!cart){
                return <h2> no items </h2>
            }else{
              return  cart.drinks.map(dri => <p> Drink: {dri.name}, ${dri.price} </p>)
            }
  }
   
    function handleClick(){
      
      fetch(`/orders/${cart.id}`,{
        method:"PATCH",
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            purchase: true
    })
  })
    .then(resp => resp.json())
    .then(resp => setCart(null))
    }

    
    


  
    return(
        <Card>
           {showCart()}
           <button class="ui inverted black button" onClick={handleClick}>Checkout</button>          
        </Card>

        
    )
}

export default Cart;