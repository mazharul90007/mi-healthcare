import express from "express";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.get("/", AdminControllers.getAllAdmin);
router.get("/:id", AdminControllers.getByIdFromDb);
router.patch("/:id", AdminControllers.updateIntoDB);
router.delete("/:id", AdminControllers.deleteFromDB);
router.patch("/soft/:id", AdminControllers.softDeleteFromDB);

export const AdminRoutes = router;
