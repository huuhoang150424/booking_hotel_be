import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import path from 'path';
import {
  User,
  RoomAmenity,
  Booking,
  Room,
  Payment,
  BookingDetail,
  Image,
  Review,
  Hotel,
  UserRole,
  Amenities,
  RoomDetail,
  SearchHistory,
  Log,
  Notification,
  Cancellations,
  Discounts,
  Guests,
  Role,
} from '../models';

dotenv.config({ path: '.env.local' });

console.log(path.resolve(__dirname));

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
	dialectOptions: {
    charset: 'utf8mb4',
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
  models: [
    //path.resolve(__dirname, '/models')
    User,
    RoomAmenity,
    Booking,
    Room,
    Payment,
    BookingDetail,
    Image,
    Review,
    Hotel,
    UserRole,
    Amenities,
    RoomDetail,
    SearchHistory,
    Log,
    Notification,
    Cancellations,
    Discounts,
    Guests,
    Role,
  ],
  logging: false,
});
