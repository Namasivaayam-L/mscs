import mongoose from 'mongoose'
import { Data } from '../interfaces/dataInterface'

const Data = mongoose.model('dummy', new mongoose.Schema({
    name_of_society: {type:String,required:true },
    address: {type:String,required:true},
    state: {type:String},
    district: {type:String},
    date_of_registration: {type:String},
    area_of_operation: {type:String},
    sector_type: {type:String},
}))
export default Data