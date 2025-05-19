import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { AcademicYear } from './academic_year.model';

export class Semester extends Model {}

Semester.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    academic_year_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AcademicYear',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'semester',
    timestamps: false
  }
);


