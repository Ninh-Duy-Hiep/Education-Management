import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface TeacherAttributes {
  id: number;
  full_name: string;
  degree_id?: number;
  email?: string;
  phone?: string;
}

interface TeacherCreationAttributes extends Optional<TeacherAttributes, 'id'> {}

export class Teacher extends Model<TeacherAttributes, TeacherCreationAttributes>
  implements TeacherAttributes {
  Faculties(Faculties: any) {
    throw new Error('Method not implemented.');
  }
  public id!: number;
  public full_name!: string;
  public degree_id?: number;
  public email?: string;
  public phone?: string;
}

Teacher.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    full_name: { type: DataTypes.STRING(100), allowNull: false },
    degree_id: { type: DataTypes.INTEGER, allowNull: true },
    email: { type: DataTypes.STRING(100), allowNull: true },
    phone: { type: DataTypes.STRING(20), allowNull: true },
  },
  {
    sequelize,
    tableName: 'teacher',
    timestamps: false,
  }
);

