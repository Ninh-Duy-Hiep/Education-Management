import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Teacher } from './teacher.model';
import { Faculty } from './faculty.model';

export class TeacherFaculty extends Model {
  public teacher_id!: number;
  public faculty_id!: number;
}

TeacherFaculty.init(
  {
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: { model: Teacher, key: 'id' }
    },
    faculty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: { model: Faculty, key: 'id' }
    }
  },
  {
    sequelize,
    tableName: 'teacher_faculty',
    timestamps: false
  }
);

