// for signin

export const sigIn = async (formvalue) =>{

    const storageValue = JSON.parse(localStorage.getItem("crediential" || "{}"));

if(storageValue.email == formvalue.email && storageValue.password == formvalue.password)
{
 await localStorage.setItem("signin",true)
    
 return true
}
else{
    return false;
}

}

export const isAuthenticated = () => {
 
    if(typeof window == "undefined")
    {
        return false
    }

    if(localStorage.getItem("crediential")  )
    {
        return JSON.parse(localStorage.getItem("signin"))

    }
}