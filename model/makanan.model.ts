import { Model, InferAttributes, CreationOptional, DataTypes, InferCreationAttributes} from "sequelize";
import connectionDatabase from "../database/database";
interface MakananModel extends Model<InferAttributes<MakananModel>, InferCreationAttributes<MakananModel>>{
  id: CreationOptional<number>;
  nama_makanan: string;
  harga: number
}

export const  makananModel = connectionDatabase.define<MakananModel>('Makanan', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nama_makanan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'makanan'
})

