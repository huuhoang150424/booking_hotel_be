import Role from "../role.model";

const defaultRoles = ["User", "Admin"];

export const seedRoles = async () => {
  for (const roleName of defaultRoles) {
    await Role.findOrCreate({
      where: { roleName }, 
      defaults: { roleName }, 
    });
  }
};
