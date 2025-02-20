import { RoomType,StatusRoom } from './../helper/enums/room';
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import  Hotel  from './hotel.model';
import  User  from './user.model';
import  RoomAmenity  from './room-amenity.model';
import  BookingDetail  from './booking-detail.model';
import  RoomDetail  from './room-details.model';
import  Image  from './images.model';

@Table({
  tableName: 'rooms',
  timestamps: true,
})
export default class Room extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  roomId!: string;

  @ForeignKey(() => Hotel)
  @Column(DataType.UUID)
  hotelId!: string;

	@AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @BelongsTo(() => Hotel)
  hotel!: Hotel;

	@AllowNull(false)
	@Column({
		type: DataType.ENUM(...Object.values(RoomType)),
	})
	roomType!: RoomType;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  price!: number;

	@AllowNull(false)
	@Default(StatusRoom.AVAILABLE)
	@Column({
		type: DataType.ENUM(...Object.values(StatusRoom)),
	})
	status!: StatusRoom;

	@ForeignKey(() => User)
	@AllowNull(false) 
	@Column(DataType.UUID)
	createdBy!: string;

	@BelongsTo(() => User)
	createdByUser!: User;

	@ForeignKey(() => User)
	@AllowNull(true) 
	@Column(DataType.UUID)
	updatedBy?: string;

	@BelongsTo(() => User)
	updatedByUser?: User;

  @HasMany(() => RoomAmenity)
  roomAmenities!: RoomAmenity[];

	@HasMany(() => BookingDetail)
	booking_details!: BookingDetail[];

	@HasMany(() => RoomDetail)
	room_details!: RoomDetail[];
	
	@HasMany(() => Image)
	images!: Image[];
}
//done