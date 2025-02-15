import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import  RoomAmenity  from './room-amenity.model';

@Table({
  tableName: 'amenities',
  timestamps: false,
})
export default class Amenities extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  amenityId!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  amenityName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  description!: string;

  @HasMany(() => RoomAmenity)
  roomAmenities!: RoomAmenity[];
}
//done