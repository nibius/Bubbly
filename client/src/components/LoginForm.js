import React, {useState} from "react"


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
    <>
        <form className = "signup" onSubmit={handleSubmit}>
            <h3>Log in</h3>
        <label htmlFor="username">Username:</label>
          <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
          />

        <label htmlFor="password">Password:</label>
          <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              />
       <button className="btn" type= "submit">Login</button>

        </form>

<button onClick={handleFormDisplay}> Dont have an account? </button>    
</>
   
)


}

export default LoginForm;