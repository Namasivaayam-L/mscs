  import mongoose from 'mongoose'
  import { User } from '../interfaces/userInterface'

  // Define a user schema
  const User = new mongoose.Schema( {
      name:{ type: String, required:true},
      username:{ type: String, required:true, unique: true,},
      password:{ type: String, required:true},
      address:{ type: String, required:true},
      head_quarters:{ type: String, required:true},
      district:{ type: String, required:true},
      cls_society:{ type: String, required:true},
      pan_no:{ type: String, required:true, unique: true,},
      tan_no:{ type: String, required:true, unique: true,},
      name_of_auth_officer:{ type: String, required:true},
      designation:{ type: String, required:true},
      mobile_no_auth_officer:{ type:Number, required:true},
      email:{ type: String, required:true, unique: true,},
      service_tax_no:{ type: String, required:true, unique: true,},
    } 
  )
  // Create a user model
  export const UserModel = mongoose.model<User>("Userr", User);