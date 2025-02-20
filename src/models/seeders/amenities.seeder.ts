import Amenities from "../amenities.model";
import { AmenityType } from "../../helper/enums/amenity";
import { v4 as uuidv4 } from "uuid"; 

const defaultAmenities = [
  { amenityType: AmenityType.MAIN },
  { amenityType: AmenityType.BATHROOM },
  { amenityType: AmenityType.ROOM },
  { amenityType: AmenityType.OVERVIEW },
];

export const seedAmenities = async () => {
  for (const { amenityType } of defaultAmenities) {
    await Amenities.findOrCreate({
      where: { amenityType },
      defaults: { amenityId: uuidv4(), amenityType },
    });
  }
};
