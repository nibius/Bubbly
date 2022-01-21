import React, {useState} from "react"
import styled from 'styled-components'

function LoginForm ( {setUser, handleFormDisplay} ) {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      function handleSubmit(e) {
        e.preventDefault();
    
        const userCreds = { ...formData };
    
        fetch("/login",{
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
        <form id="signup" onSubmit={handleSubmit}>
            <h3>Log in</h3>
        <label htmlFor="username">Username:</label>
          <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
          />
      <br></br>
        <label htmlFor="password">Password:</label>
          <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              />
          <br></br>  
       <button className="btn" type= "submit">Login</button>
       <button className="btn" onClick={handleFormDisplay}> Dont have an account? </button>    
        </form>
</StyleForm>
   
)


}

export default LoginForm;

const StyleForm = styled.div ` 


      #signup{
       padding-top:200px;
       align-items:center;
       justify-content: space-between;
       margin-bottom:5px;
       height:20px;
       width:200px;
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
    
    input[type=text]:focus {
        background: #feffdf;
    }
    input[type=password]:focus {
        background: #feffdf;
    }


    .btn{
        box-sizing: border-box;
        padding:10px;
        float:left;
        border: 5px solid  #feffdf;
        border-radius:10px;
        background:white;
    }
    
    .btn:hover{
        background:#3e4a61;
        }

       


`