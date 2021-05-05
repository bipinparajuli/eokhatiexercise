import { stat } from 'fs';
import React,{useState} from 'react'
import {Redirect,useHistory} from "react-router-dom"
import {toast} from "react-toastify"

const Signup = () => {

 const [state,setstate]=useState({
    email:"",
    password:"",
    confirmpassword:""
})

const h = useHistory()

const {email,password,confirmpassword} = state;

    const fun = ()=> {
    localStorage.setItem("crediential",JSON.stringify(state));
toast("Registered successfully",{type:"success"})

        h.push("/signin")


    }

    return (
        <div>
            <h1>I am sign up page</h1>
Email: <input type="email" onChange={e=>setstate({...state,email:e.target.value})} />
Password: <input type="password" onChange={e=>setstate({...state,password:e.target.value})} />
Confirm Password: <input type="password" onChange={e=>setstate({...state,confirmpassword:e.target.value})} />

            <button onClick={fun}>Register</button>
        </div>
    )
}

export default Signup
