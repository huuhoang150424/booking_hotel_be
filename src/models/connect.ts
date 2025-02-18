import { sequelize } from "../config/database";
import  Role  from './role.model';

export const connectDatabase = async () => {
	try {
		await sequelize.authenticate();
		console.log("Database connected successfully");
		// await sequelize.sync({ force: true });
		// await Role.findOrCreate({
		// 	where: { roleName: 'User' },
		// 	defaults: { roleId: sequelize.literal('UUID()'), roleName: 'User' },
		// });
		// await Role.findOrCreate({
		// 	where: { roleName: 'Admin' },
		// 	defaults: { roleId: sequelize.literal('UUID()'), roleName: 'Admin' },
		// });
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};