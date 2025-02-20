'use-strict';

import { Request, Response, NextFunction } from 'express';
import { Image,Hotel,Room ,RoomAmenity,Amenities,RoomDetail} from '../models';
import { NotFoundError, UnauthorizedError, TokenError, transporter, CacheRepository } from '../helper';
import { AmenityType } from '../helper/enums/amenity';


class RoomController {
  //[create]
  static async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      // const userId = (req as any).user.userId;
      // const { name, bedConfig, price, hotelId,maxGuests ,roomType} = req.body;
      // const imageFiles = req.files as Express.Multer.File[];

			// const newRoom=await Room.create({
			// 	name,
			// 	price,
			// 	createdBy: userId,
			// 	hotelId,
			// 	roomType
			// })
			// await newRoom.save();

			// await Promise.all(
			// 	imageFiles.map(async (image: Express.Multer.File) => {
			// 		await Image.create({
			// 			imageUrl: image.filename,
			// 			roomId: newRoom.roomId
			// 		});
			// 	})
			// );
			// await RoomDetail.create({
			// 	roomId:newRoom.roomId,
			// 	maxGuests,
			// 	bedConfig
			// })
			// const amenities = JSON.parse(req.body.amenities); 
			
			// await Promise.all(
			// 	amenities.map(async (amenityType: AmenityType) => {
			// 		let amenity = await Amenities.findOne({
			// 			where: { amenityType },
			// 		});
			// 		if (!amenity) {
			// 			amenity = await Amenities.create({
			// 				amenityType,
			// 			});
			// 		}
			// 		await RoomAmenity.create({
			// 			roomId: newRoom.roomId,
			// 			amenityId: amenity.amenityId,
			// 		});
			// 	})
			// );

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
