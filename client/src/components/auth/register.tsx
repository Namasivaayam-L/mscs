import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Captcha from "../captcha/captcha";
import { server_url, verifyCaptcha } from "../../config/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const navigate = useNavigate()
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [address, setAddress] = useState("");
	const [head_quarters, setHead_quarters] = useState("");
	const [district, setDistrict] = useState("");
	const [cls_society, setCls_society] = useState("");
	const [pan_no, setPan_no] = useState("");
	const [tan_no, setTan_no] = useState("");
	const [name_of_auth_officer, setName_of_auth_officer] = useState("");
	const [designation, setDesignation] = useState("");
	const [mobile_no_auth_officer, setMobile_no_auth_officer] = useState("");
	const [email, setEmail] = useState("");
	const [service_tax_no, setService_tax_no] = useState("");
    const [isVerified, setIsVerified] = useState(Boolean)
	const [res, setRes] = useState('')

	const handleSuccess = () => setIsVerified(true)
	const handleFailure = () => setIsVerified(false)

	const handleSubmit = async(e: any) => {
		e.preventDefault();
		await axios.post(server_url + '/auth/register/',{
			name,
			username,
			password,
			address,
			head_quarters,
			district,
			cls_society,
			pan_no,
			tan_no,
			name_of_auth_officer,
			designation,
			mobile_no_auth_officer,
			email,
			service_tax_no
		})
		.then((res: any) => {
			// console.log(res.data);
			res.data === '/auth' ? navigate('/auth') : setRes(res.data) 
		  })
	};

	return (
		<>
			<h1>Register</h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "10px",
				}}
			>
				<TextField
					label="Name"
					value={name}
					onChange={(e: any) => setName(e.target.value)}
				/>
				<TextField
					label="Username"
					value={username}
					onChange={(e: any) => setUsername(e.target.value)}
				/>
				<TextField
					label="Password"
					value={password}
					type="password"
					onChange={(e: any) => setPassword(e.target.value)}
				/>
				<TextField
					label="Address"
					value={address}
					onChange={(e: any) => setAddress(e.target.value)}
				/>
				<TextField
					label="Headquarters"
					value={head_quarters}
					onChange={(e: any) => setHead_quarters(e.target.value)}
				/>
				<TextField
					label="District"
					value={district}
					onChange={(e: any) => setDistrict(e.target.value)}
				/>
				<TextField
					label="Cls Society"
					value={cls_society}
					onChange={(e: any) => setCls_society(e.target.value)}
				/>
				<TextField
					label="Pan No"
					value={pan_no}
					onChange={(e: any) => setPan_no(e.target.value)}
				/>
				<TextField
					label="Tan No"
					value={tan_no}
					onChange={(e: any) => setTan_no(e.target.value)}
				/>
				<TextField
					label="Name of Auth Officer"
					value={name_of_auth_officer}
					onChange={(e: any) => setName_of_auth_officer(e.target.value)}
				/>
				<TextField
					label="Designation"
					value={designation}
					onChange={(e: any) => setDesignation(e.target.value)}
				/>
				<TextField
					label="Mobile No of Auth Officer"
					value={mobile_no_auth_officer}
					onChange={(e: any) => setMobile_no_auth_officer(e.target.value)}
				/>
				<TextField
					label="Email"
					value={email}
					onChange={(e: any) => setEmail(e.target.value)}
				/>
				<TextField
					label="Service Tax No"
					value={service_tax_no}
					onChange={(e: any) => setService_tax_no(e.target.value)}
				/>
				<Captcha handleSuccess={handleSuccess} handleFailure={handleFailure} />
				<div style={{
					display: 'flex',
					flexDirection:'column'
				}}>
					<p>Once registered please Sign In</p>
					{(isVerified || !verifyCaptcha) && <Button variant="contained" onClick={handleSubmit}>Register</Button>}
					<p>{ res }</p>
				</div>
			</div>
		</>
	);
};
export default Register;
