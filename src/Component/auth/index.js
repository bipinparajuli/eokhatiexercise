// for signin

export const sigIn = (formvalue) =>{

    const storageValue = JSON.parse(localStorage.getItem("crediential"));

if(storageValue.email == formvalue.email && storageValue.password == formvalue.password)
{
    return true;
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

    if(localStorage.getItem("crediential"))
    {
        return true

    }
}