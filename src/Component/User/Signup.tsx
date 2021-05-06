// import { stat } from 'fs';
import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import {Button,TextField} from "@material-ui/core"


const Signup = () => {

 const [state,setstate]=useState({
    email:"",
    password:"",
    confirmpassword:""
})

const [error,seterror] = useState ({
    emailFormat:"",
    passwordFormat:"",
    confirmation:""
})

const {emailFormat,passwordFormat,confirmation} = error;

const {email,password,confirmpassword} = state;


const h = useHistory()


    const fun = ()=> {

//validation

// email validation

if (! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
{
    return seterror({
       emailFormat:"Please check your email format",
       passwordFormat:"",
       confirmation:""
    })

}

//password validation

//password format
var regx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

if(! regx.test(password))
{
    return seterror({
       emailFormat:"",
       passwordFormat:"password must be at least 8 characters long and include at least a number and an alphabet",
       confirmation:""
    })

}


//password confirmation
if(password !== confirmpassword)
{
 return seterror({
   emailFormat:"",
   passwordFormat:"",
   confirmation:"Password doesn't match"
    
    });

}

//saveing data to local storage

    localStorage.setItem("crediential",JSON.stringify(state));
toast("Registered successfully",{type:"success"})

        h.push("/signin")


    }

    return (
        <div>
            <h1 style={{color:"#383CC1"}}>Register here <span style={{color:"#2827CC"}} className="animate__animated animate__flash animate__infinite">##</span></h1>

            {emailFormat? (<><span style={{color:"red"}}>{emailFormat}</span> <br/> <br/> </>): ""}

<TextField required label="Email" variant="outlined" type="email" onChange={e=>setstate({...state,email:e.target.value})} />

<br/><br/>
{passwordFormat ? (<><span style={{color:"red"}}>{`${passwordFormat}`}</span> <br/> <br/> </>): ""}

{/* <span style={{color:"red"}}>{`${confirmpassword} ${passswordLength}`}</span> <br/><br/> */}
 <TextField required label="Password" variant="outlined" type="password" onChange={e=>setstate({...state,password:e.target.value})} />

<br/> <br/>
{confirmation? (<><span style={{color:"red"}}>{`${confirmation}`}</span> <br/> <br/> </>): ""}

 <TextField required label="Confirm Password" variant="outlined" type="password" onChange={e=>setstate({...state,confirmpassword:e.target.value})} />

<br/><br/>
            <Button variant="contained" color="primary" onClick={fun}>Register</Button>
        </div>
    )
}

export default Signup
