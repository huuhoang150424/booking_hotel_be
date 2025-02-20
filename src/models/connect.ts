import { sequelize } from "../config/database";
import {	seedRoles,seedAmenities,seedAdmin} from "./seeders";

export const connectDatabase = async () => {
	try {
		await sequelize.authenticate();
		console.log("Database connected successfully");
		// await sequelize.sync({ force: true });
		// await seedRoles();
		// await seedAdmin();
		// await seedAmenities();
		// console.log("thành công")
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};