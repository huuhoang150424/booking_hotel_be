import express, { Request, Response } from "express";
const Router = express.Router();
import { HotelController } from "../controller";
import uploadCloud from "../config/cloudinary.config";
import { verifyUser ,verifyAdmin} from "../middleware";
import {validatorAddHotel} from "../validation";

Router.post("/create",uploadCloud.single("image"),validatorAddHotel,verifyAdmin, HotelController.create as any);
Router.get("/getAll", verifyAdmin,HotelController.getAll as any);
Router.get("/get-detail/:hotelId", verifyAdmin,HotelController.getDetail as any);
Router.put("/update/:hotelId",uploadCloud.single("image"), verifyAdmin,HotelController.update as any);
Router.delete("/delete/:hotelId", verifyAdmin,HotelController.delete as any);

export default Router;


