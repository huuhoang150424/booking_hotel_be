import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  ForeignKey,
	Default,
  BelongsTo

} from 'sequelize-typescript';
import  Booking  from './booking.model';

@Table({
  tableName: 'guests',
  timestamps: true,
})
export default class Guests extends Model {
  @PrimaryKey
	@Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  guestId!: number;

  @ForeignKey(() => Booking)
  @AllowNull(false)
  @Column(DataType.UUID)
  bookingId!: string;

  @BelongsTo(() => Booking)
  booking!: Booking;

  @AllowNull(false)
  @Column(DataType.STRING)
  fullName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  phone!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;
}
//done