import React, {useState} from "react"

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
            
            <>
            <div>
                <h3>Create an Account</h3>
                <form onSubmit={handleSubmit} className='signup'>
                    <label>Username: <input name = 'username' type ='text' value = {formData.username} onChange={handleChange}></input></label>
                    <label>email: <input name = 'email' type ='text' value = {formData.email} onChange={handleChange}></input></label>
                    <label>password: <input name = 'password' type ='text' value = {formData.password} onChange={handleChange}></input></label>
                    <button className="btn" type= "submit">SignUp</button>
                </form>
            </div>
    

    <button onClick={handleFormDisplay}> Already have an account? </button> 
    </>
    )
  }
  
  export default Signup;
