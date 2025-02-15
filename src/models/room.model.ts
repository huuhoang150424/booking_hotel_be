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

  @BelongsTo(() => Hotel)
  hotel!: Hotel;

  @AllowNull(false)
  @Column(DataType.STRING)
  roomType!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  price!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  status!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  createdBy!: string;

  @BelongsTo(() => User, 'createdBy')
  createdByUser!: User;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  updatedBy!: string;

  @BelongsTo(() => User, 'updatedBy')
  updatedByUser!: User;

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