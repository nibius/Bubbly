import React, {useState} from "react"
import styled from 'styled-components'



function Signup({ setUser, handleFormDisplay }){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
      });

     
   
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
   
   
   
      const userCreds = {...formData}

    function handleSubmit(e){
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
          }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => setUser(user))
              };
            })
        }





    return(
            
            <StyleForm>
            
                
                <form id='signup' onSubmit={handleSubmit}>
                <h3>Create an Account</h3>
                    <label>Username: <input id="username" name = 'username' type ='text' value = {formData.username} onChange={handleChange}></input></label>
                  <br></br>
                    <label>email: <input id="email" name = 'email' type ='text' value = {formData.email} onChange={handleChange}></input></label>
                    <br></br>
                    <label>password: <input id="password" name = 'password' type ='text' value = {formData.password} onChange={handleChange}></input></label>
                    <br></br>
                    <button className="btn" type= "submit">SignUp</button>
                    <button className="btn" onClick={handleFormDisplay}> Already have an account? </button> 
                </form>
                

    </StyleForm>
    )
  }
  
  export default Signup;

  const StyleForm = styled.div`

 
    #signup{
       padding-top:200px;
       align-items:center;
       justify-content: space-between;
       margin-bottom:5px;
       height:20px;
       width:200px;
    }
  }

  
  #username{
      box-sizing: border-box;
      padding:4px;
      align-items:center;
    }
    
    #password{
      box-sizing: border-box;
      padding:4px;
      align-items:center;
    }

    #email{
      box-sizing: border-box;
      padding:4px;
      align-items:center;
    }
  
    input[type=text]:focus {
        background: #feffdf
    }
  
     .btn{
        box-sizing: border-box;
        padding:10px;
        float:left;
        border: 2px solid  #feffdf;
        border-radius:10px;
    }
    
    .btn:hover{
        background:#3e4a61;
        } 



  `
