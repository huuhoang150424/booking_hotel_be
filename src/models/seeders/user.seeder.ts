import User from "../user.model";
import Role from "../role.model";
import UserRole from "../user-role.model";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

export const seedAdmin = async () => {
  const hashedPassword = await bcrypt.hash("123456", 10);
  const [adminUser] = await User.findOrCreate({
    where: { email: "user@gmail.com" },
    defaults: {
      userId: uuidv4(),
      name: "Admin User",
      email: "user@gmail.com",
      password: hashedPassword,
      phone: "0123456789",
    },
  });
  const adminRole = await Role.findOne({ where: { roleName: "Admin" } });

  if (!adminRole) {
    console.error("⚠️ Role 'Admin' chưa tồn tại, hãy chạy `seedRoles` trước!");
    return;
  }
  await UserRole.findOrCreate({
    where: { userId: adminUser.userId, roleId: adminRole.roleId },
    defaults: {
      userRoleId: uuidv4(),
      userId: adminUser.userId,
      roleId: adminRole.roleId,
    },
  });
};
