import { Express } from 'express';
import authRouter from "./auth";
import userRouter from "./user";
import hotelRouter from "./hotel";
import roomRouter from "./room";

const route=(app:Express)=>{
  app.use("/auth",authRouter)
  app.use("/user",userRouter)
  app.use("/hotel",hotelRouter)
	app.use("/room",roomRouter)
}

export default route;