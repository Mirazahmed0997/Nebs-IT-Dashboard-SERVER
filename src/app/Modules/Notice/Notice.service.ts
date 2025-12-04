import { deletImageFromCloudinary } from "../../Config/cloudunary.config";
import AppError from "../../errorHelper/AppError"
import { QueryBuilder } from "../../Utils/QueryBuilder";
import httpStatus from 'http-status-codes';
import { INotice } from "./Notice.interface";
import { Notice } from "./Notice.model";
import { noticeSearchFields } from "./Notice.constant";





const createNotice = async (payload: INotice) => {
 

  const notice = Notice.create(payload)

  return notice;
}


const getAllNotice = async (query: Record<string, string>) => {
  
  const queryBuilder = new QueryBuilder(Notice.find(), query)

  const notices = await queryBuilder
    .search(noticeSearchFields)
    .filter()
    .fields()
    .paginate()
    .sort()

  const [data, meta] = await Promise.all([
    notices.build(),
    queryBuilder.getMeta()
  ])

  return {
    data,
    meta
  }
}



const SingleNotice = async (id: string) => {
  const notice = await Notice.findOne({_id:id})
  return {
    data: notice,
  }
}



const updateNotice = async (id: string, payload: Partial<INotice>) => {

  const isExist = await Notice.findById(id);

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Notice not found");
  }



  const updatedNotice = await Notice.findByIdAndUpdate(id, payload, {
    new: true, 
    runValidators: true,
  });

  

  return updatedNotice;
};


const deleteNotice = async (id: string) => {
  const isExist = await Notice.findById(id);

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Notice not found");
  }

  const deletedNotice = await Notice.findByIdAndDelete(id)
  return deletedNotice
};





export const NoticeService = {
  createNotice,
  getAllNotice,
  SingleNotice,
  updateNotice,
  deleteNotice
}