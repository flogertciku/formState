import React, { useState } from "react";

const UserForm = (props) =>{

    const  [username,setUsername] = useState("");
    const  [email,setEmail] = useState("");
    const  [password,setPassword] = useState("");

    const HandleSubmit=(e)=>{
        e.preventDefault();
        const newUser = { 
            un : username, 
            email: email, 
            password: password 
        };

        console.log(newUser)
    }

    return(
        <div>
            <form onSubmit={HandleSubmit}>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            </form>

        </div>
    )
}

export default UserForm;