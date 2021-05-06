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
            <h1 style={{color:"#383CC1"}}>Sign in here</h1>

 <TextField label="Email" variant="outlined" type="email"  onChange={e=>setstate({...state,email:e.target.value})} />

<br/>
<br/>
             <TextField label="Password" variant="outlined" type="password" onChange={e=>setstate({...state,password:e.target.value})} />

<br/>
<br/>
            <Button variant="contained" color="primary" onClick={SignIn}>Signin</Button>

        </div>
    )
}

export default Signin