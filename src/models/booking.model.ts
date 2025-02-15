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
import  User  from './user.model';
import  Payment  from './payment.model';
import  BookingDetail  from './booking-detail.model';

@Table({
  tableName: 'bookings',
  timestamps: true,
})
export default class Booking extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  bookingId!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @AllowNull(false)
  @Column(DataType.DATE)
  checkInDate!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  checkOutDate!: Date;

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

  @HasMany(() => Payment)
  payments!: Payment[];

	@HasMany(() => BookingDetail)
  booking_detail!: BookingDetail[];
}
//done