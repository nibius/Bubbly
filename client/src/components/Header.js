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
    <h1>Bubbly</h1> 
    {user ? <button onClick = {handleLogout}>Logout</button> : null} 
    </StyleHeader>

    )
} 

export default Header;

const StyleHeader = styled.div `

    h1{
        font-weight:bold;
        font-size:50px;
        align-content:center;
        padding-bottom: 5px;
    }
    

`