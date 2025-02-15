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
import  Hotel  from './hotel.model';
import  Room  from './room.model';

@Table({
  tableName: 'images',
  timestamps: true,
})
export default class Image extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  imageId!: string;

  @ForeignKey(() => Hotel)
  @Column(DataType.UUID)
  hotelId!: string;

  @BelongsTo(() => Hotel)
  hotel!: Hotel;

  @ForeignKey(() => Room)
  @Column(DataType.UUID)
  roomId!: string;

  @BelongsTo(() => Room)
  room!: Room;

  @AllowNull(false)
  @Column(DataType.STRING)
  imageUrl!: string;
}
//done