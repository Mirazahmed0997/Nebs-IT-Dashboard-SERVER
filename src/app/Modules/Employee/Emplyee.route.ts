

import { Router } from "express";
import { employeeController } from "./Employee.controller";



const router =Router()

router.post('/create',employeeController.createEmployee)

router.get('/',employeeController.getAllEmployee)

router.get('/:id',employeeController.getEmployeeById)

router.patch('/:id',employeeController.updateEmployee)
router.delete('/:id',employeeController.deleteEmployee)


export const employeeRoutes= router
