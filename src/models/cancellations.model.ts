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
} from 'sequelize-typescript';
import  Booking  from './booking.model';
import  User  from './user.model';

@Table({
  tableName: 'cancellations',
  timestamps: true,
})
export default class Cancellations extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  cancellationId!: string;

  @ForeignKey(() => Booking)
  @Column(DataType.UUID)
  bookingId!: string;

  @BelongsTo(() => Booking)
  booking!: Booking;

  @AllowNull(false)
  @Column(DataType.TEXT)
  reason!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  cancelledBy!: string;

  @BelongsTo(() => User)
  cancelledByUser!: User;

  @AllowNull(false)
  @Column(DataType.DATE)
  cancelledAt!: Date;
}
//done