import React from "react";
import { useState } from "react";
import axios from "axios";

function RegisterPage(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [errorMessage,setErrorMessage]=useState("");

    function submitted(e)
    {
        e.preventDefault();
        
        if(username==="" || password==="")
            return;
        

        axios.post("http://localhost:4000/register",{
            username:username,
            password:password
        })
        .then(function(res){
            if(res.status===201){
                console.log("Success");
                setErrorMessage("");
            }
        })
        .catch(function(err){
            setErrorMessage("User already Exists");
        })

        setUsername("");
        setPassword("");
    }
    return(
        <div className="register-form">
            <h2>Register</h2>
            <p>{errorMessage}</p>
            <form onSubmit={submitted}>
                <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterPage;