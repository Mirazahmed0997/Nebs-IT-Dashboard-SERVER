import { Types } from "mongoose";


export enum Role{
    SALES="SALES",
    OPERATIONS = "OPERATIONS",
}

export interface IEmp{

  name: String,
  email: String,
  employeeId: String,
  departmentId: Types.ObjectId,   
  role: Role,             
}