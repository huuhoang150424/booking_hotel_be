import {
  Table,
  Column,
  Model,
  PrimaryKey,
	Default,
  ForeignKey,
  DataType,
  BelongsTo,
  AllowNull
} from 'sequelize-typescript';
import  Booking  from './booking.model'; 
import  Room  from './room.model'; 

@Table({
  tableName: 'booking_details',
  timestamps: true,
})
export default class BookingDetail extends Model {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
  bookingDetailId!: string;

  @ForeignKey(() => Booking)
  @Column(DataType.UUID)
  bookingId!: string;

	@BelongsTo(() => Booking)
  booking!: Booking;

  @ForeignKey(() => Room)
  @Column(DataType.UUID)
  roomId!: string;

	@BelongsTo(() => Room)
  room!: Room;

  @AllowNull(false)
  @Column(DataType.DATE)
  checkInDate!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  checkOutDate!: Date;

  @Column(DataType.INTEGER)
  numGuests!: number;

  @Column(DataType.STRING)
  specialRequests!: string;


}
//done
