import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  DataType,
  BelongsTo,
  AllowNull
} from 'sequelize-typescript';
import  Room  from './room.model'; 

@Table({
  tableName: 'room_details',
  timestamps: true,
})
export default class RoomDetail extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  roomDetailId!: number;

  @ForeignKey(() => Room)
  @Column(DataType.UUID)
  roomId!: string;

  @BelongsTo(() => Room)
  room!: Room;

  @AllowNull(false)
  @Column(DataType.STRING)
  bedType!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  numBeds!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  maxGuests!: number;

}
//done