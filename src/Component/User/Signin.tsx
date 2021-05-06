import React,{useState} from 'react'
import {sigIn} from "../auth/index"
import {useHistory} from "react-router-dom"
import {toast} from 'react-toastify'
import {Button,TextField} from "@material-ui/core"

const Signin = () => {
   const [state,setstate] = useState(
       {

        email:"",
       password:""
    }
    );

    const [error,seterror] = useState ({
        emailFormat:"",
        passwordFormat:"",
    })
    
    const {emailFormat,passwordFormat} = error;
    
   const h =  useHistory();

   const {email,password} = state;

const SignIn = () =>{

    //validation

// email validation

if (! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
{
    return seterror({
       emailFormat:"Please check your email format",
       passwordFormat:"",
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
    })

}




//navigating to storage    
if(sigIn(state))
{
    toast("Signin successfully",{type:"success"})
    h.push("/home")
}
else{
    toast("Recheck your crediential",{type:"error"});

}
    
}

    return (
        <div>
            <h1 style={{color:"#383CC1"}}>Sign in here</h1>

            {emailFormat? (<><span style={{color:"red"}}>{emailFormat}</span> <br/> <br/> </>): ""}

 <TextField label="Email" required variant="outlined" type="email"  onChange={e=>setstate({...state,email:e.target.value})} />

<br/>
<br/>

{passwordFormat ? (<><span style={{color:"red"}}>{`${passwordFormat}`}</span> <br/> <br/> </>): ""}

             <TextField label="Password" required variant="outlined" type="password" onChange={e=>setstate({...state,password:e.target.value})} />

<br/>
<br/>
            <Button variant="contained" color="primary" onClick={SignIn}>Signin</Button>

        </div>
    )
}

export default Signin