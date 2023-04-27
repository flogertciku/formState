import React, { useState } from "react";
import ShowUser from "./ShowUser";

const UserFormCopy = (props) =>{
   
  const {user ,vendosUser,setListaUser,listaUser} = props;

   
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setListaUser([...listaUser,user])
        // console.log(user)
       vendosUser({ 
            username : "", 
            email: "", 
            password: "" ,
            
        })
        
    }
    const HandleChange = (event) =>{
        // console.log(event)
        vendosUser({...user,  [event.target.id] : event.target.value})

        // console.log(event.target.value)
       
    }

    return(
        <div>
            <form onSubmit={HandleSubmit}>
            <div>
                <label>Username: </label> 
                <input type="text"  id="username" value={user.username} onChange={ HandleChange } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" id="email"  value={user.email} onChange={HandleChange } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" id="password" value={user.password} onChange={ HandleChange } />
            </div>
            <input type="submit" value="Create User" />
            </form>
        {/* <ShowUser user = {user}/> */}
        </div>
    )
}

export default UserFormCopy;