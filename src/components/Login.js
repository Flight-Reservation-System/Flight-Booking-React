import React from 'react'
import LoginService from '../services/LoginService'
import '../styles/loginstyle.css'

function Login() {
  
    const handleLogin=(e)=>{
        e.preventDefault()
        const username=document.loginform.username.value;
        const password=document.loginform.password.value;
        LoginService(username,password)
         
        
    }

    return (
        <div  className="body">
            <h1>Login</h1>
            <form name="loginform">
                <label>Username:</label>
                <input type="text" name="username"/><br/><br/>
                <label>Password:</label>
                <input type="password" name="password"/><br/><br/>
                <button onClick={handleLogin}>LogIn</button>

            </form>
            
        </div>
    )
}

export default Login
