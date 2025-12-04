import { model, Schema } from "mongoose";
import { INotice, isActive, Target } from "./Notice.interface";



const noticeSchema = new Schema<INotice>({
    targetType:{
            type: String,
            enum: Object.values(Target),
            default:Target.DEPARTMENT
        },
    departmentIds:{type: Schema.Types.ObjectId,
        required:false,
        trim:true,
        ref:"Department"
    },
    employeeId:{type: Schema.Types.ObjectId,
        required:false,
        trim:true,
        ref:"Employee"
    },
    title:{type:String,required:true,trim:true},
    noticeType:{type:String,required:true,trim:true},
    body:{type:String,required:true,trim:true},
    publishDate:{type:Date,required:true,trim:true},

    attachments:{type:String,required:false},
    status:{
            type: String,
            enum: Object.values(isActive),
            default:isActive.UNPUBLISHED
        }
},
{
    timestamps: true
})

export const  Notice= model<INotice>("Notice",noticeSchema)