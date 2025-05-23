import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface DegreeAttributes {
  id: number;
  name: string;
  symbol_name: string;
  coefficient: number;
}

interface DegreeCreationAttributes extends Optional<DegreeAttributes, 'id'> {}

export class Degree extends Model<DegreeAttributes, DegreeCreationAttributes>
  implements DegreeAttributes {
  public id!: number;
  public name!: string;
  public symbol_name!: string;
  public coefficient!: number;
}

Degree.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    symbol_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    coefficient: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'degree',
    timestamps: false,
  }
);
