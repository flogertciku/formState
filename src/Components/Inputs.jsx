import React ,{ useState } from "react";

const Inputs = ()=>{
  
    const [getName,setName] =useState("");

    const[num,setNum]= useState("")
    const[firstName,setFirstName] =useState({
        value: "",
        label:"",
        validation:""
    })

    
    
    const HandleChange = (e) =>{
        e.preventDefault();
       
        setName(e.target.value)

        getName= e.target.vale
        console.log(getName)
       

    }
    const HandleSubmit = (e) =>{
       
       console.log("u thirra")
        setNum(num+1)
    }

    return(
        <>
        
        <form >
        <input type="text"onChange={ HandleChange } ></input>
        <input type="text"  onChange={ HandleChange } />
        
        </form>
        <h1>{getName}</h1>
        <h1>{num}</h1>
        <input type="submit" onClick={HandleSubmit} />
        </>
    )
}
export default Inputs;