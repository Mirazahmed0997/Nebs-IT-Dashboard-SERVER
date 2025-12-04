

import { NextFunction, Request, Response } from "express"
import { catchAsynch } from "../../Utils/CatchAsync"
import { sendResponse } from "../../Utils/sendResponse"
import httpStatus from 'http-status-codes';
import { employeeService } from "./Employee.service";





const createEmployee = catchAsynch(async (req: Request, res: Response, next: NextFunction) => {
  const employee = await employeeService.createEmployee(req.body)


  
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Employee Create successfully",
    data: employee,
  })
})




const getAllEmployee = catchAsynch(async (req: Request, res: Response, next: NextFunction) => {
  const query=req.query

  console.log(query)
  const emloyees = await employeeService.getAllEmployee(query as Record<string, string>)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Get all emloyees successfully",
    data: emloyees,
  })
})





const getEmployeeById = catchAsynch(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  console.log(id)
  const employee = await employeeService.getEmployeeById(id as string)


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Get specific employee successfully",
    data: employee,
  })
})

const updateEmployee = catchAsynch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; 
    const payload = req.body;  

    const updatedEmployee = await employeeService.updateEmployee(id as string, payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK, 
      message: "employee updated successfully",
      data: updatedEmployee,
    });
  }
);

const deleteEmployee = catchAsynch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; // get division ID from URL

    const deletedEmployee = await employeeService.deleteEmployee(id as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK, // use 200 for update
      message: "Department deleted successfully",
      data: deletedEmployee,
    });
  }
);


export const employeeController={
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}