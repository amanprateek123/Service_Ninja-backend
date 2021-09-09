import {Schema, model} from 'mongoose'
import { ICons } from '../types/Consumer';

const consumerSchema: Schema =  new Schema({
    phone: {
        type: String
    },
    email: {    
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: Number
    }
}, { timestamps: true })

export default model<ICons>("Consumer", consumerSchema);