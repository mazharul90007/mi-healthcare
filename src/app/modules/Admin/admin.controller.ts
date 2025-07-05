import { NextFunction, Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getAllAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const params = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  try {
    const result = await AdminServices.getAllAdmin(params, options);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Retrieving All admin data successfully",
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};

const getByIdFromDb = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.getByIdFromDb(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data fetched by Id",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.updateIntoDB(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data Updated",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.deleteFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const softDeleteFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.softDeleteFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Admin data deleted Successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AdminControllers = {
  getAllAdmin,
  getByIdFromDb,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB,
};
