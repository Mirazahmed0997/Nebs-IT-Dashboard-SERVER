

import { Router } from "express";
import { NoticeControllers } from "./Notice.controller";
import { multerUpload } from "../../Config/multer.config";



const router =Router()

router.post('/create',multerUpload.single("file"),NoticeControllers.createNotice)

router.get('/',NoticeControllers.getAllNotice)

router.get('/:id',NoticeControllers.getSingleNotice)

router.patch('/:id',multerUpload.single("file"),NoticeControllers.updateNotice)
router.delete('/:id',NoticeControllers.deleteNotice)


export const noticeRoute= router
