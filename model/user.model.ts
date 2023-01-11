import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from "sequelize";
import connectionDatabase from "../database/database";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>>{
  id: CreationOptional<number>;
  nama: string;
  username: string;
  password: string;
  avatar: string;
}

const userModel = connectionDatabase.define<UserModel>('Users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
   tableName: 'users'
})

export default userModel