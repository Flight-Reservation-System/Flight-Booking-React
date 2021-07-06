import React from 'react';

function Registration() {

    const handleRegister=()
    return(
        <div style={{textAlign="center"}}>
            <h1>Register</h1>
            <form name="registerform">
                <label>Full Name:</label>
                <input type="text" name="name"/>
                <label>username:</label>
                <input type="text" name="username"/>
                <label>Email ID:</label>
                <input type="email" name="email"/>
                <label>Phone:</label>
                <input type="phone" name="phone"/>
                <label>Password:</label>
                <input type="password" name="password"/>
                <button onClick={}>Register</button>
            </form>
        </div>

    )


}