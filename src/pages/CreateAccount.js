import { getSuggestedQuery } from '@testing-library/react';
import React, { useState } from 'react';
import { Link } from "react-router-dom"
import '../App.css';

function CreateAccount()
{
    // initiate variables for user creation
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <div>
            <br />
            <p>Sign in, or create a new login.</p>
            <div id="user-form">
                <form id="user-login-form" onSubmit={e => {e.preventDefault(); 
                    passwordValidation(); newUserAdd("http://localhost:4000/sign-in")}}>
                    <label for="name">Full Name: </label>
                    <input type="text" required
                        id="name"
                        value={name}
                        setName={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="email">Email: </label>
                    <input type="email" required
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                        name="password"
                        minLength={8}
                        maxLength={36}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="confirm-password">Confirm Password: </label>
                    <input type = "password" required
                        id="confirm-password"
                        name="confirm-password"
                        minLength={8}
                        maxLength={36}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className="submit-login">Create Account</button>
                    <div className='create-account'>
                        <p>Already have an account? <Link className="back-to-signin" to="/signin">Log In Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
        
    )

    // send POST request with name, email, username, and password; Response will be string
    function newUserAdd(){
        var newUserData = {
            n: name,
            e: email,
            u: username,
            p: password
        }

        fetch("http://localhost:4000/new-user", {
            method:'POST',
            body: JSON.stringify(newUserData),
            headers: {
                "Accept": "application/json",
                "content-type": "application/json"
            }
        })
        .then(response => response.text())
        .then(body => verifyUserCreation(body))
    }

    function verifyUserCreation(response) {
        alert(`${response}`)

        if (response == "Welcome " + name + "!")
            window.location = "/"
    }

    // verify that passwords match before sending request
    function passwordValidation() {
        if(password != confirmPassword)
        {
            alert(`${password}${confirmPassword}Passwords do not match!`)
        }
    }
}

export default CreateAccount