import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  AllowNull,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import  Room  from './room.model';
import  User  from './user.model';
import  Image  from './images.model';
import  Review  from './review.model';


@Table({
  tableName: 'hotels',
  timestamps: true,
})
export default class Hotel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  hotelId!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  location!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description!: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL(3, 2))
  rating!: number;

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

  @HasMany(() => Room)
  rooms!: Room[];

	@HasMany(() => Image)
  images!: Image[];

	@HasMany(() => Review)
  reviews!: Review[];
}