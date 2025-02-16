import express, { Request, Response } from "express";
const Router = express.Router();
import { verifyAdmin } from "../middleware";

// Router.get("/test" ,verifyAdmin, ()=>{
// 	console.log("test")
// });





export default Router;
