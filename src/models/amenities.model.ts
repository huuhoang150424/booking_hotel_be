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
import { AmenityType } from '../helper/enums/amenity';

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
  @Column(DataType.ENUM(...Object.values(AmenityType)))
  amenityType!: AmenityType;

  @HasMany(() => RoomAmenity)
  roomAmenities!: RoomAmenity[];
}
//done