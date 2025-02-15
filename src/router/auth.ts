import express, { Request, Response } from "express";
const Router = express.Router();
import { AuthController } from "../controller";
import {validatorRegister,validatorLogin} from "../validation";

Router.post("/login",validatorLogin, AuthController.login as any);
Router.post("/register",validatorRegister, AuthController.register as any);



export default Router;
