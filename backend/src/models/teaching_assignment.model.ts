import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Teacher } from './teacher.model';
import { Course } from './course.model';

export class TeachingAssignment extends Model {}

TeachingAssignment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assigned_date: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'TeachingAssignment',
    timestamps: false,
    indexes: [{ unique: true, fields: ['teacher_id', 'course_id'] }]
  }
);


