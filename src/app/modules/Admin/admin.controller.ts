import { Request, Response } from "express";
import { AdminServices } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
  const params = req.query;
  const result = await AdminServices.getAllAdmin(params);

  res.status(200).json({
    success: true,
    message: "Retrieving All admin data successfully",
    data: result,
  });
};

export const AdminControllers = {
  getAllAdmin,
};
