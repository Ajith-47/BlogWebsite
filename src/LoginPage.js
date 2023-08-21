import React from "react";
import "./LoginRegister.css"
import axios from 'axios';
import { useState } from "react";
import { set } from "mongoose";

function LoginPage(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [errorMessage,setErrorMessage]=useState("");

    function submitted(e)
    {
        e.preventDefault();

        if(username==="" || password==="")
            return;
        

        axios.post("http://localhost:4000/login",{
            username:username,
            password:password
        })
        .then(function(res){
            console.log("Successfully LoggedIn");
            setErrorMessage("");
        })
        .catch(function(err){
            setErrorMessage("Invalid Username or Password");
        });

        setUsername("");
        setPassword("");
    }

    return(
        <div className="login-form">
            <h2>Login</h2>
            <p>{errorMessage}</p>
            <form onSubmit={submitted}>
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginPage