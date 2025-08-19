import React from "react";
import axios from "axios";
function Register(){


    const [register,setRegister] = React.useState({

        name: "",
        email: "",
        password: ""
    });

    const handlechange=(e)=>{
        setRegister({
           ...register,
           [e.target.name]: e.target.value
    });
    };

    const handleSubmit= async (e)=>{
        e.preventDefault()
       console.log(register)

       try{

        const resonse= await axios.post("http://localhost:8080/adduser",register);
        
        alert("User Added sucessfully")
       }catch(error){
         console.log(error);
       }
    }

    return(
       
        <>
         <h1>This is a register page </h1>
      
            <form onSubmit={handleSubmit}>

               
                <label htmlFor="name">NAME : </label>
                <input type="text" id="name" name="name"placeholder="Enter Name" value={register.name} onChange={handlechange}></input>
                <br></br>

                 <label htmlFor="username">EMAIL : </label>
                <input type="email" id="username" name="email" placeholder="Enter Email" value={register.email}  onChange={handlechange}></input>
                <br></br>

                <label htmlFor="password">PASSWORD : </label>
                <input type="password" id="password" name="password" placeholder="Enter Password" value={register.password}  onChange={handlechange}></input>
                <br></br>
                <button type="submit">Rgister</button>
            </form>

        </>
    )
}
export default Register;