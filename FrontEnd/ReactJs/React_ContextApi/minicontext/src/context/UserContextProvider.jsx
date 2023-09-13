import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProviser = ({children}) =>{

 const [user , setUser ] = React.useState(null)
  return(
    <UserContext.Provider value={{user , setUser}}>
    {
        children
    }
    </UserContext.Provider>
  )
}

export default UserContextProviser;