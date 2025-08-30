import React, { useContext } from 'react'
import UserContext from '../store/UserContext'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {   //take children input
   const {user} = useContext(UserContext);
    const token = localStorage.getItem("token");
    

   if(!user || !token) {
      return <Navigate to="/login" replace ></Navigate>
   } 
    return children;
}

export default ProtectedRoute