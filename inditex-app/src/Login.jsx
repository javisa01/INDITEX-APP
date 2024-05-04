// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, TextField, Snackbar } from '@mui/material';
import {useState} from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    //const baseUrl = config.backendUrl;
    const navigate = useNavigate();
    
 

      return (
        <>    
        <Navbar />
        <div>
            hola
      </div>
      </>
      );
}

export default Login;