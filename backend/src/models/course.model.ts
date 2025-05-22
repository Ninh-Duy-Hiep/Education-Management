import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Faculty } from './faculty.model';
import { Semester } from './semester.model';

export class Course extends Model {
  public id!: number;
  public name!: string;
  public faculty_id!: number;
  public semester_id!: number;
  public student_count!: number;
  public course_weight!: number;
}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    faculty_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    student_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    course_weight: {
      type: DataTypes.FLOAT,
      defaultValue: 1.0,
      validate: {
        min: 0.01
      }
    }
  },
  {
    sequelize,
    tableName: 'Course',
    timestamps: false,
    indexes: [{ unique: true, fields: ['name', 'semester_id'] }]
  }
);


