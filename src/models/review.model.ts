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
import  User  from './user.model';
import  Hotel  from './hotel.model';

@Table({
  tableName: 'reviews',
  timestamps: true,
})
export default class Review extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  reviewId!: string;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => Hotel)
  @Column(DataType.UUID)
  hotelId!: string;

  @BelongsTo(() => Hotel)
  hotel!: Hotel;

  @AllowNull(false)
  @Column(DataType.DECIMAL(3, 2))
  rating!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  comment!: string;
}
//done