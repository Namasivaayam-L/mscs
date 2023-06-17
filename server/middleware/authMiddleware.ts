import express, { Request, Response } from "express";
const jwt = require('jsonwebtoken')
import { secret } from '../config/config'

const authMiddleware = async (req: Request, res: Response, next: () => void) => {
    // Check if the user is authenticated
    if (req.headers.authorization) {
      // Get the JWT token from the header
      const token = req.headers.authorization.split(" ")[1];
  
      // Try to decode the token
      try {
        const decoded = await jwt.decode(token, secret);
  
        // If the token is valid, set the user on the request
        req.body.token = decoded;
        
        // Continue to the next middleware
        next();
      } catch (err) {
        // If the token is invalid, return an error
        res.status(401).send("Unauthorized");
      }
    } else {
      // If the user is not authenticated, redirect to the login page
      res.redirect("/login");
    }
  };
export default authMiddleware;