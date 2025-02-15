import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import  Room  from './room.model';
import  Amenities  from './amenities.model';

@Table({
  tableName: 'room_amenities',
  timestamps: false,
})
export default class RoomAmenity extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  roomAmenityId!: string;

  @ForeignKey(() => Room)
  @Column(DataType.UUID)
  roomId!: string;

  @BelongsTo(() => Room)
  room!: Room;

  @ForeignKey(() => Amenities)
  @Column(DataType.UUID)
  amenityId!: string;

  @BelongsTo(() => Amenities)
  amenities!: Amenities;
}
//done