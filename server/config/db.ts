import mongoose from "mongoose";
import {mongoURI} from '../config/config'

export default function connToDB() {
    try {
        console.log(mongoURI);
        mongoose.connect(`${mongoURI}`)
            .then(() => {
                console.log('Connection to Database Established Successfully')
            })
    } catch (error) {
        console.log(error,' Error occurred while connecting to DB')
    }
} 
