import { Redirect } from "react-router-dom"



export const Auth = Component => {

    return()=>{

        let auth = localStorage.getItem("auth") || "false" 

        if(auth === "true"){
            return <Component/>
        }

        return <Redirect to="/login" />
    }

}