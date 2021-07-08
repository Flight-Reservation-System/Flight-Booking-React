import React,{useState} from 'react'
import LoginService from '../services/LoginService'
import '../styles/loginstyle.css'
import { useHistory } from 'react-router-dom';



function Login() {

    let history = useHistory();

    const [status, setstatus] = useState(false)

    const handleChange=()=>{
        setstatus(false)
        const username=document.loginform.username.value;
        const password=document.loginform.password.value;
        // // let checkStatus=LoginService(username,password)
        // setStatus(checkStatus)
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        
        
        if(status){
            history.push("./booking")
        }
        
        
    }


    return (
        <div  className="body">
            <h1 className="header">Login</h1>
            <form name="loginform">
                <label>Username:</label>
                <input type="text" name="username"/><br/><br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={handleChange}/><br/><br/>
                <button onClick={handleLogin}>LogIn</button>

            </form>
            
        </div>
    )
}

export default Login
