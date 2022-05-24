import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import '../App.css';

function SignInPage()
{
    // set up variables to hold form input and save
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // display form for user login:
    // Variables to be recorded and submitted: username, password, and confirmPassword
    // submission handled by userLogin()
    return(
        <div>
            <br />
            <p>Sign in, or create a new login.</p>
            <div id="user-form">
                <form id="user-login-form" onSubmit={e => {e.preventDefault(); userLogin()}}>
                    <label for="username">Username: </label>
                    <input type="text" required
                        id="username"
                        minLength={5}
                        maxLength={24}
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label for="password">Password: </label>
                    <input type="password" required
                        id="password"
                        minLength={8}
                        maxLength={36}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="submit-login">Login</button>
                    <div className='create-account'>
                        <Link className="create-account-link" to="/create-account">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
        
    )

    // send POST request with username and password; response will contain string
    function userLogin(){
        var loginData = {
            u: username,
            p: password
        }

        fetch("http://localhost:4000/sign-in", {
            method:'POST',
            body: JSON.stringify(loginData),
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            }
        })
        .then(response => response.text())
        .then(body => verifyUser(body))
    }
    
    // display alert with response from microservice
    function verifyUser(data)
    {
        alert(data)
    }
}

export default SignInPage