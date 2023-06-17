import express, { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { UserModel } from "../models/userModel";
import { secret } from "../config/config";

const router = express();

// Register a route for user login
router.post("/signin", async (req: Request, res: Response) => {
	// Check if the username and password are present
	if (!req.body.username || !req.body.password) {
		// Please provide a username and password
		res.send("Please provide a username and password");
		return;
	}
	// Find the user by username
	const user = await UserModel.findOne({ username: req.body.username });

	// Check if the user exists and the password is correct
	if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
		//Invalid username or password
		return res.send("Invalid username or password");
	}
	// Create a JWT token
	const token = jwt.sign({ id: user?._id }, secret, { expiresIn: 60 * 60 });

	// Set the JWT token in the response header
	res.setHeader("Authorization", `Bearer ${token}`);

	// Redirect to the home page
	// res.redirect("/");`
	return res.status(201).send({username:req.body.username,path:'/home'})
});

router.post("/register", async (req: Request, res: Response) => {

	let {
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
		service_tax_no,
	} = req.body;
	if (!name || !username || !password || !address || !head_quarters || !district || !cls_society || !pan_no || !tan_no || !name_of_auth_officer || !designation || !mobile_no_auth_officer || !email || !service_tax_no) {
		//Invalid request body
		return res.send("Please fill all the fields");
	}
	// Check if the password is strong
	if (!isPasswordStrong(password)) {
		//
		return res.send("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
	}
	password = await bcrypt.hash(password, 10);
	// Create a new user
	const user = new UserModel({
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
		service_tax_no,
	});

	// Save the user
	await user.save();

	// Return the user
	return res.status(201).send('/auth');
});

export default router;


const isPasswordStrong = (password:string) => {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one digit
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()_+-={}|;:",.<>?]/.test(password)) {
    return false;
  }

  // The password is strong if it passes all of the above checks
  return true;
};

