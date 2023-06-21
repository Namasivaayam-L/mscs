import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Captcha from "../captcha/captcha";
import { server_url, verifyCaptcha } from "../../config/config";
import axios from "axios";

const SignIn = (props:any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(Boolean)
  const [res, setRes] = useState('Please enter all details and correct captcha to signin')
	const handleSuccess = () => setIsVerified(true)
	const handleFailure = () => setIsVerified(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    props.setValue(1)
    await axios.post(server_url + '/auth/signin/', { username, password })
      .then((res: any) => {
        // console.log(res.data);
        window.sessionStorage.setItem('username',res.data.username)
        res.data.path === 'success' ? props.setValue(1) : setRes(res.data) 
      })
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap:'10px'
    }}>
      <h1 style={{textAlign:'center'}}>Sign In</h1>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Captcha handleSuccess={handleSuccess} handleFailure={handleFailure} />
      {(isVerified || !verifyCaptcha) && <Button variant="contained" onClick={handleSubmit}>Sign In</Button>}
      <p>{ res }</p>
    </div>
  );
};

export default SignIn;
