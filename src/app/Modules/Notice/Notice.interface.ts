import { Types } from "mongoose"


export enum Target{
    DEPARTMENT="DEPARTMENT",
    INDIVIDUAL = "INDIVIDUAL",
}

export enum isActive{
    PUBLISHED= "PUBLISHED",
    UNPUBLISHED="UNPUBLISHED",
}


export  interface INotice{


  targetType: Target,         

  departmentIds?: Types.ObjectId,  
  employeeId?: Types.ObjectId,       

  title: string,
  noticeType: string,         
  body: string,

  publishDate: Date,

  attachments?:string

  status: isActive,            
  createdBy: Types.ObjectId,        
}
