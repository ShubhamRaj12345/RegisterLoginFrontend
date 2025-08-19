import React, { useState } from "react";
import axios from 'axios';

function Login(){

    const [userId , setUserIdValue]= useState("");
    const [password , setPasswordValue]= useState("");

    const  setUserId=(e)=>{
    setUserIdValue(e.target.value)
    }

    const setPassword =(e)=>{
    setPasswordValue(e.target.value)
    }



    // yaha api calling kiya hai 
    const handleSubmit= async (e)=>{
          e.preventDefault();

        console.log(userId + password);

        // create an object with userID and password for passing the api 
        const data = {
            "userId": userId,
            "password": password
        }
        try{
            const response =await axios.post("http://localhost:8080/login" ,data)

            if(!response.data)
            {
               alert("Invalid USer Id or Password ")
            }else{
                alert("Sucessfull Login ")
            }
        }catch(error)
        {
            console.log(error);
        }
    }








    const redirectToRegister=()=>{
        window.location.href="/register";
    }

    return(
        <>
        <h1>This is a login page </h1>
        <div className="container">
       <form onSubmit={handleSubmit}>
        <label >User Id</label>
        <input type="email" placeholder="Enter Email" value={userId} onChange={setUserId}/>
        <br></br>

        <label >User Password</label>
        <input type="password" placeholder="Enter Password" value={password} onChange={setPassword}/>
        <br></br>
        <a onClick={redirectToRegister}>don't Have Account </a>
        <button >Submit</button>

       </form>

        </div>
        </>
    )
}
export default Login;