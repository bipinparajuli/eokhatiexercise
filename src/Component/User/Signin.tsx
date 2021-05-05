import React,{useState} from 'react'
import {sigIn} from "../auth/index"
import {useHistory} from "react-router-dom"
import {toast} from 'react-toastify'

const Signin = () => {
   const [state,setstate] = useState(
       {

        email:"",
       password:""
    }
    );

   const h =  useHistory();

   const {email,password} = state;

const SignIn = () =>{

if(sigIn(state))
{
    toast("Signin successfully",{type:"success"})
    h.push("/home")
}
else{
    console.log("Recheck your crediential");

}
    
}

    return (
        <div>
            <h1>Sign in here</h1>

Email: <input type="email" onChange={e=>setstate({...state,email:e.target.value})} />

            Password: <input type="password" onChange={e=>setstate({...state,password:e.target.value})} />

            <button onClick={SignIn}>Signin</button>

        </div>
    )
}

export default Signin