import { Model, InferAttributes, CreationOptional, DataTypes, InferCreationAttributes} from "sequelize";
import connectionDatabase from "../database/database";

//Cara ke 1
// class Makanan extends Model<InferAttributes<Makanan>, InferAttributes<Makanan>> {
//   declare id: CreationOptional<number>;
//   declare nama_makanan: string;
//   declare harga: number;
// }

// Makanan.init({
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   nama_makanan: {
//     type: new DataTypes.STRING(255),
//     allowNull: false,
//   },
//   harga: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }
// }, {
//   tableName: 'makanan',
//   sequelize: new Sequelize
// })

//Cara Ke 2
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

