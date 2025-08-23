import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Input
} from "@mui/material";
const LoginPage = () => {
  return (
   <>
     <div className= "main w-full bg-gray-800">
        <div className = "flex justify-center items-center">
            <Input placeholder="enter your email" ></Input>
            
        </div>
     </div>
   </>
  )
}

export default LoginPage