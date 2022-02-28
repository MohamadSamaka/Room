import React from 'react'
import '../styles/Login.css'
export default function Login(){
    return(
    <>
        <form id="login-wrapper"  method="POST">
            <span>Sign in</span>
            <div className="user-input">
                <input type="text" name="user" id="user" required></input>
                <span>Userame</span>
                <div className="line-decoration"></div>
            </div>
            <div className="user-input">
                <input type="password" name="pass" id="pass" required></input>
                <span>Password</span>
                <div className="line-decoration"></div>
            </div>
            <input type="submit" value="Log in" id="submit" name="submit"></input>
            <a href="html/singup.html">not signed in?</a>
            <div id="error"></div>
        </form>
    </>
    );
}