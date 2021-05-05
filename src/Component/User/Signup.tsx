import { stat } from 'fs';
import React,{useState} from 'react'
import {Redirect,useHistory} from "react-router-dom"

const Signup = () => {

 const [state,setstate]=useState({
    email:"",
    password:"",
    confirmpassword:""
})

const h = useHistory()

const {email,password,confirmpassword} = state;

    const fun = ()=> {
        const a= localStorage.setItem("crediential",JSON.stringify(state));

        h.push("/signin")

if(a == undefined)
{
    console.log(a)
    return <Redirect to="/signin" />
}

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
