import styled from 'styled-components'


function Header({setUser, user}){

    function handleLogout(){
        fetch("/logout",{
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setUser(null))
    }

  
    
return(

    <StyleHeader>
    <h1>Bubbly </h1> 
    {user ? <button classname="apple" onClick = {handleLogout}>Logout</button> : null} 
    </StyleHeader>
      

    )
} 

export default Header;

const StyleHeader = styled.div `

        h1{font-weight:bold;
        font-size:50px;
        align-content:center;
        padding-bottom: 5px; 
        display:flex;
    justify-content: space-evenly;
        }

        .apple{
            box-sizing: border-box;
        padding:10px;
        float:left;
        border: 2px solid  #feffdf;
        border-radius:10px;
        }

`