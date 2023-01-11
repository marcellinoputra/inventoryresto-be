import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import connectionDatabase from '../database/database';

interface MinumanModel extends Model<InferAttributes<MinumanModel>, InferCreationAttributes<MinumanModel>>{
  id: CreationOptional<number>;
  nama_minuman: string;
  harga: number
}

const minumanModel = connectionDatabase.define<MinumanModel>('Minuman', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  nama_minuman: {
    type: DataTypes.STRING,
    allowNull: false
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'minuman'
})

export default minumanModel

