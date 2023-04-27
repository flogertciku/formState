import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Inputs from './Components/Inputs';
import UserForm from './Components/UserForm';
import UserFormCopy from './Components/UserFormcopy';
import ShowUser from './Components/ShowUser';
import React, { useState } from "react";
function App() {
  const  [user,setUser] = useState({ 
    username : "", 
    email: "", 
    password: "" 
            });
            
  const [listaUser,setListaUser]=useState([])
  console.log(listaUser)

  return (
    <div>
     <ShowUser listaUser={{}} emri = {user}  />
     <UserFormCopy user= {user} vendosUser = {setUser} listaUser={listaUser} setListaUser={setListaUser} />
     <Nav user= {user} vendosUser = {setUser}  />
     
  </div>
    
  );
}

export default App;
