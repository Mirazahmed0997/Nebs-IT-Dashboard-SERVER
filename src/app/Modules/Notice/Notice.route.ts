

import { Router } from "express";
import { NoticeControllers } from "./Notice.controller";



const router =Router()

router.post('/create',NoticeControllers.createNotice)

router.get('/',NoticeControllers.getAllNotice)

router.get('/:id',NoticeControllers.getSingleNotice)

router.patch('/:id',NoticeControllers.updateNotice)
router.delete('/:id',NoticeControllers.deleteNotice)


export const noticeRoute= router
