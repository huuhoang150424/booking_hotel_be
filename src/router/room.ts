import express, { Request, Response } from "express";
const Router = express.Router();
import { RoomController } from "../controller";
import { verifyUser ,verifyAdmin} from "../middleware";
import {validatorAddRoom} from "../validation";
import uploadCloud from "../config/cloudinary.config";


Router.post("/create",verifyAdmin,uploadCloud.array("images", 10), RoomController.create as any);
Router.get("/getAll",verifyAdmin, RoomController.getAll as any);


export default Router;
