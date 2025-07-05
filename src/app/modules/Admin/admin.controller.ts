import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";
import sendResponse from "../../../shared/sendResponse";

const getAllAdmin = async (req: Request, res: Response) => {
  const params = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  // console.log("params", options);

  try {
    const result = await AdminServices.getAllAdmin(params, options);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Retrieving All admin data successfully",
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

const getByIdFromDb = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.getByIdFromDb(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Admin data fetched by Id",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

const updateIntoDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.updateIntoDB(id, req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Admin data Updated",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

const deleteFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.deleteFromDB(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Admin data deleted Successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

const softDeleteFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await AdminServices.softDeleteFromDB(id);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Admin data deleted Successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

export const AdminControllers = {
  getAllAdmin,
  getByIdFromDb,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB,
};
