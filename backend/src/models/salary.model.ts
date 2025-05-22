import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

export class SalaryCalculation extends Model {}

SalaryCalculation.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    teacher_id: { type: DataTypes.INTEGER, allowNull: false },
    course_id: { type: DataTypes.INTEGER, allowNull: false },
    semester_id: { type: DataTypes.INTEGER, allowNull: false },
    total_salary: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
    calculated_date: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
  },
  {
    sequelize,
    tableName: 'SalaryCalculation',
    timestamps: false
  }
);
