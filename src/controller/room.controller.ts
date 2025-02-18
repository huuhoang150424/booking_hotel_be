'use-strict';

import { Request, Response, NextFunction } from 'express';
import { Image,Hotel,Room } from '../models';
import { NotFoundError, UnauthorizedError, TokenError, transporter, CacheRepository } from '../helper';


class RoomController {
  //[create]
  static async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
			const {}=req.body;



			return res.status(200).json({ message: 'Tạo mới phòng thành công' });
    } catch (error) {
      next(error);
    }
  }
  //[getAll]
  static async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
			return res.status(200).json({ message: 'thành công' });
    } catch (error) {
      next(error);
    }
  }
}

export default RoomController;
