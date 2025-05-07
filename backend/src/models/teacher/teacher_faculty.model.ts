import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

export class TeacherFaculty extends Model {
    teacher_id: any;
}

TeacherFaculty.init(
  {
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    faculty_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: 'teacher_faculty',
    timestamps: false,
  }
);
