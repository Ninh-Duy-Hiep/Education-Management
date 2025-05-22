import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class Coefficient extends Model {
    public id!: number;
    public type!: 'mon' | 'lop'; 
    public reference_id!: number;
    public value!: number;
}

Coefficient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['mon', 'lop']],
      },
    },
    reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Coefficient',
    timestamps: false,
  }
);
