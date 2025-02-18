import express, { Request, Response } from "express";
const Router = express.Router();
import { RoomController } from "../controller";
import { verifyUser ,verifyAdmin} from "../middleware";

Router.post("/create", RoomController.create as any);
Router.get("/getAll", RoomController.getAll as any);


export default Router;
