import React from 'react'
import '../styles/registration.css'

function Registration() {
    return(
        <div className="registrationbody">
            <h1 className="heading">Create Account</h1>
            
            <form name = "registerform">
                
                <input  className="register-label" type="text" name="name" placeholder="Full name"/><br/>
                
                <input className="register-label" type="text" name="username" placeholder="Username"/><br/>
                
                <input className="register-label" type="email" name="email" placeholder="Email"/><br/>
               
                <input className="register-label" type="phone" name="phone" placeholder="Phone number"/><br/>
                
                <input className="register-label" type="password" name="password" placeholder="Password"/> <br/>               
            </form>
                    <div >
                    <button className="button" type="submit">Register</button>
                    </div>
        </div>

    )

}

export default Registration;
