import { Types } from "mongoose";


export interface IEmp{

  name: String,
  email: String,
  employeeId: String,
  departmentId: Types.ObjectId,   
  role: String,             
}