'use-strict';

import { Request, Response, NextFunction } from 'express';
import { Image, Hotel, Room } from '../models';
import { NotFoundError, CacheRepository, InvalidInputError } from '../helper';

class HotelController {
  //[create]
  static async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const userId = (req as any).user.userId;
      const { name, location, description, maxRooms } = req.body;
      const image = req.file?.path;

      if (!name || !location || !description || !maxRooms || !image) {
        throw new InvalidInputError('Thông tin không đầy đủ', 400);
      }
      const newHotel = await Hotel.create({
        name,
        location,
        description,
        maxRooms,
        createdBy: userId,
      });
      await newHotel.save();
      await Image.create({
        imageUrl: image,
        hotelId: newHotel?.hotelId,
      });
      return res.status(201).json({ message: 'Tạo mới khách sạn thành công' });
    } catch (error) {
      next(error);
    }
  }
  //[getAll]
  static async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const offset = (page - 1) * limit;

      const { count, rows } = await Hotel.findAndCountAll({
        limit: limit, 
        offset: offset, 
        order: [['createdAt', 'DESC']], 
      });

      return res.status(200).json({
        message: 'thành công',
        totalItems: count,
        totalPages: Math.ceil(count / limit), 
        currentPage: page, 
        data: rows,
      });
    } catch (error) {
      next(error);
    }
  }
  //[getDetail]
  static async getDetail(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {


      return res.status(200).json({ message: 'thành công'});
    } catch (error) {
      next(error);
    }
  }
  //[update]
  static async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {


      return res.status(200).json({ message: 'thành công'});
    } catch (error) {
      next(error);
    }
  }
  //[delete]
  static async delete(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.status(200).json({ message: 'thành công' });
    } catch (error) {
      next(error);
    }
  }
}

export default HotelController;
