import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import connectionDatabase from "../database/database";

interface RoleModel extends Model<InferAttributes<RoleModel>, InferCreationAttributes<RoleModel>>{
  id: CreationOptional<number>;
  status: number;
}

const roleModel = connectionDatabase.define<RoleModel>('Role', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'role'
})

export default roleModel