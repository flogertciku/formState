import React from "react";

const Nav = (props)=>{
    // name , numra
    const { user,numra}= props;
    return (
        <>
<h2>This is navBAr and my name is :{user.username }</h2>        
</>
    )
}

export default Nav;