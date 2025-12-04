import { Router } from "express";
import { verifyAuth } from "../../middlewares/CheckAuth";
import { Role } from "../User/User.interface";
import { departmentController } from "./Department.controller";



const router=Router()


router.post('/create',
    // verifyAuth(Role.ADMIN,Role.SUPER_ADMIN),
    departmentController.createDepartment
    )
router.get('/',departmentController.getAllDepartment)
router.get('/:id',departmentController.getDepartmentById),
router.patch('/:id',departmentController.updateDepartment)
router.delete('/:id',departmentController.deleteDepartment)


export const departmentRouter= router