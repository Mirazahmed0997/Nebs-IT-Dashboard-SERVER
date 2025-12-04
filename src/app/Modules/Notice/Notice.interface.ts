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

  departmentIds?: Types.ObjectId,  // When targetType = "department"
  employeeId?: Types.ObjectId,       // When targetType = "individual"

  title: string,
  noticeType: string,         // Holiday, HR & Policy, Warning, Emergency, etc.
  body: string,

  publishDate: Date,

  attachments?:string

  status: isActive,             // "published" | "draft" | "unpublished"
  createdBy: Types.ObjectId,        // Admin or HR user who created it
}
