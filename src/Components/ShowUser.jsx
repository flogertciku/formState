import React from "react";
const ShowUser = (props) =>{
    // console.log(props)
    const {listaUser}= props;
    
    return (


        <div>
            <h2>
                SHOW USER {props.emri.username}
            </h2>
        
        {
        listaUser && listaUser.length > 0  ? 
        listaUser.map((user,index) =>
            <div key={index}>
                <h3 >{user.username}</h3>
                <h3 >{user.email}</h3>
                <h3 >{user.password}</h3>
            </div> 
         )  :"" }
        </div>
    )
}

export default ShowUser;