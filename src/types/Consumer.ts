import { Document } from "mongoose";

export interface ICons extends Document {
  phone: string
  email: string
  password: string
  fullName: string
  gender: string
  address: string
  age: number
}