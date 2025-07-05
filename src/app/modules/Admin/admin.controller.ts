import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllAdmin = async (req: Request, res: Response) => {
  const params = pick(req.query, adminFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  console.log("params", options);

  const result = await AdminServices.getAllAdmin(params, options);

  res.status(200).json({
    success: true,
    message: "Retrieving All admin data successfully",
    data: result,
  });
};

export const AdminControllers = {
  getAllAdmin,
};
