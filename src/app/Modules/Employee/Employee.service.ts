import { Query } from "mongoose";
import AppError from "../../errorHelper/AppError"
import { excludFields } from "../../globalConstants";
import httpStatus from 'http-status-codes';
import { QueryBuilder } from "../../Utils/QueryBuilder";
import { deletImageFromCloudinary } from "../../Config/cloudunary.config";
import { IEmp } from "./Employee.interface";
import { Employee } from "./Employee.model";
import { employeeSearchField } from "./Employee.constant";



const createEmployee = async (payload: IEmp) => {
    const { employeeId } = payload
    const isExist = await Employee.findOne({ employeeId })
    if (isExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "Employee ALREADY EXIST")
    }



    const employee = Employee.create(payload)

    return employee;
}



const getAllEmployee = async (query: Record<string, string>) => {


    const queryBuilder = new QueryBuilder(Employee.find(), query)
    
      const employees = await queryBuilder
        .search(employeeSearchField)
        .filter()
        .fields() 
        .paginate()
        .sort()
        .populate("department")
    
      const [data, meta] = await Promise.all([
        employees.build(),
        queryBuilder.getMeta()
      ])
    
      return {
        data,
        meta
      }
}


const getEmployeeById = async (id : string) => {

    const emplyee = await Employee.findOne({_id:id}).populate("department")
    return emplyee
      

}



const updateEmployee = async (id: string, payload: Partial<IEmp>) => {

    const isExist = await Employee.findById(id);

    if (!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Employee not found");
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, payload, {
        new: true, 
        runValidators: true, 
    })

    return updatedEmployee;
};


const deleteEmployee = async (id: string) => {
    const isExist = await Employee.findById(id);

    if (!isExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Employee not found");
    }

    const deletedEmployee = await Employee.findByIdAndDelete(id)
    return deletedEmployee
};


export const employeeService={
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}