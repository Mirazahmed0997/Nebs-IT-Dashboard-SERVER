import { model, Schema } from "mongoose";
import { IEmp, Role } from "./Employee.interface";



const empSchema = new Schema<IEmp>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    employeeId: { type: Number, required: true, trim: true },
    departmentId: {
        type: Schema.Types.ObjectId,
        ref: "Department",
        required: true
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.OPERATIONS
          }
})

export const Employee = model<IEmp>("Employee", empSchema)