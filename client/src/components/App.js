import { useState, useEffect } from "react";
import Login from './Login'
import NavBar from './Navbar';
import Header from "./Header"
import GetDrink from "./GetDrink";
import Cart from "./Cart"
import { Switch, Route } from 'react-router-dom';

function App() {
 const [user, setUser] = useState(null);
 const [cart, setCart] = useState(null);
 
 
 useEffect(() => {
  fetch("/me").then((resp) =>{
    if(resp.ok){
      resp.json().then(setUser)
    }
  })
}, [])


 
 if (!user) return <Login setUser = {setUser} />

 

  return (
    
    <div className="App">
      <Header user = {user} setUser = {setUser}/>
      <NavBar/>
      <Switch>
      <Route exact path='/'>
       <GetDrink user = {user} setCart = {setCart}/>  
       </Route> 
       <Route path='/Cart'> 
      <Cart cart = {cart} user = {user} setCart ={setCart} />
      </Route>  
      </Switch>     

    </div>
  );
}

export default App;
