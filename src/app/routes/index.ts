import { Router } from "express";
import { userRoutes } from "../Modules/User/User.route";
import path from "path";
import { authRoutes } from "../Modules/Auth/auth.route";

import { departmentRouter } from "../Modules/Department/Department.Route";
import { employeeRoutes } from "../Modules/Employee/Emplyee.route";
import { noticeRoute } from "../Modules/Notice/Notice.route";


export const router= Router()

const moduleRoutes=[
    {
        path:'/user',
        route: userRoutes
    },
    {
        path:'/auth',
        route: authRoutes
    },
    {
        path:'/Department',
        route: departmentRouter
    },
    {
        path:'/Employee',
        route:employeeRoutes
    },
    {
        path:'/Notice',
        route:noticeRoute
    },
]

moduleRoutes.forEach((route)=>
{
    router.use(route.path,route.route)
})