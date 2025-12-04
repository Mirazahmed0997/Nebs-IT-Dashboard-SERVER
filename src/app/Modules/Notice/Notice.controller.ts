import { NextFunction, Request, Response } from "express"
import { catchAsynch } from "../../Utils/CatchAsync"
import { sendResponse } from "../../Utils/sendResponse"
import httpStatus from "http-status-codes"
import { string } from "zod"
import { INotice } from "./Notice.interface"
import { NoticeService } from "./Notice.service"





const createNotice = catchAsynch(async (req: Request, res: Response, next: NextFunction) => {


  req.body = JSON.parse(req.body.data)
  const payload: INotice = {
    ...req.body,
    attachments: req.file?.path
  }
  const result = await NoticeService.createNotice(payload)


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Notice Create successfully",
    data: result,
  })
})



const getAllNotice = catchAsynch(async (req: Request, res: Response, next: NextFunction) => {
  const query = req.query
  const notices = await NoticeService.getAllNotice(query as Record<string, string>)


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Get all Notice successfully",
    data: notices,
  })
})



const getSingleNotice = catchAsynch(async (req: Request, res: Response, next: NextFunction) => {


  const id = req.params.id as string
  console.log(id)
  const notice = await NoticeService.SingleNotice(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Get single notice successfully",
    data: notice,
  })
})


const updateNotice = catchAsynch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; 
    req.body = JSON.parse(req.body.data)
    const payload: INotice = {
      ...req.body,
      attachments: req.file?.path
    }
    const updatedNotice = await NoticeService.updateNotice(id as string, payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK, // use 200 for update
      message: "Notice updated successfully",
      data: updatedNotice,
    });
  }
);

const deleteNotice = catchAsynch(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; 

    const deletedNotice = await NoticeService.deleteNotice(id as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK, 
      message: "Notice deleted successfully",
      data: deletedNotice,
    });
  }
);




export const NoticeControllers = {
  createNotice,
  getAllNotice,
  getSingleNotice,
  updateNotice,
  deleteNotice
}