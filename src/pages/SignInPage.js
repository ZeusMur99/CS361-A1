import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import '../App.css';

function SignInPage()
{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    return(
        <div>
            <br />
            <p>Sign in, or create a new login.</p>
            <div id="user-form">
                <form id="user-login-form" onSubmit={e => {e.preventDefault(); getUserList("http://localhost:4000/sign-in")}}>
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

    function getUserList(url){
        fetch(url)
            .then(response => response.json())
            .then(data => verifyUser(data))
            .catch(error => console.log(error))
    }
    
    function verifyUser(data)
    {
        console.log(data);

        for(let i = 0; i < data.length; i++)
        {if ((data[i].user.username.toUpperCase() === username.toUpperCase())
            && (data[i].user.password === password))
            {
                window.location = "/"
                alert("Welcome " + data[i].user.name + "!")
                return
            };
        }
        alert("Not recognized!")
    }
}

export default SignInPage