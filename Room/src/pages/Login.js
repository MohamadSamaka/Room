import {React, useEffect} from 'react'
import '../styles/Login.css'
import {useNavigate} from 'react-router-dom';

export default function Login(){
    let navigate = useNavigate();

    useEffect(()=>{
        document.body.classList=[];
    }, [])
    
    return(
    <>
        <form className="login-wrapper"  method="POST">
            <h2 className="logo" onClick={()=>{navigate("/")}}>Logo</h2>
            <h1>Welcome Back!</h1>
            <div className="user-input">
                <input type="text" name="user" id="user" required></input>
                <span>Userame</span>
                {/* <div className="line-decoration"></div> */}
            </div>
            <div className="user-input">
                <input type="password" name="pass" id="pass" required></input>
                <span>Password</span>
                {/* <div className="line-decoration"></div> */}
            </div>
            <input type="submit" value="Log in" id="submit" name="submit"></input>
            <a href="html/singup.html">not signed in?</a>
            <div id="error"></div>
        </form>
    </>
    );
}