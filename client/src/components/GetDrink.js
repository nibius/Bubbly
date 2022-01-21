import React, { useEffect, useState } from "react"
import DrinkPage from "./DrinkPage"




function GetDrink( {setCart, user} ){

useEffect(setDrink, [])
const [drinks, getDrinks] = useState([])

function setDrink(){
    fetch("/drinks")
    .then(res => res.json())
    .then(drinks => getDrinks(drinks))
}



return(

    <>
    <DrinkPage drinks = {drinks} setCart = {setCart} user = {user} />
    </>

)


}

export default GetDrink;