import React from "react";
const ShowUser = (props) =>{
    console.log(props)
    return (

        <div>
            <h2>
                {props.user.username}
            </h2>
        </div>
    )
}

export default ShowUser;