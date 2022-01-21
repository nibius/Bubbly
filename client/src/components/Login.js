import React, { useState } from "react";
import Signup from "./Signup";
import Header from "./Header"
import LoginForm from "./LoginForm";

function Login( {setUser} ) {

  const [signUp, setSignUp] = useState(false)

  function handleFormDisplay(){
      setSignUp(current => !current)
  }


  return(
    <div>
        <Header />
        {signUp? 
            <LoginForm setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> : <Signup setUser = {setUser} handleFormDisplay = {handleFormDisplay}/> 
        }    
         
    </div>
  )
}


export default Login;