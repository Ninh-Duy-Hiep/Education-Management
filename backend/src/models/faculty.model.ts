import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface FacultyAttributes {
  id: number;
  name: string;
  description?: string;
  contact_phone?: string;
  head_of_faculty?: number;
}

interface FacultyCreationAttributes extends Optional<FacultyAttributes, 'id'> {}

export class Faculty extends Model<FacultyAttributes, FacultyCreationAttributes>
  implements FacultyAttributes {
  Teachers(Teachers: any) {
    throw new Error('Method not implemented.');
  }
  public id!: number;
  public name!: string;
  public description?: string;
  public contact_phone?: string;
  public head_of_faculty?: number;
}

Faculty.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    description: { type: DataTypes.TEXT, allowNull: true },
    contact_phone: { type: DataTypes.STRING(20), allowNull: true },
    head_of_faculty: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    sequelize,
    tableName: 'faculty',
    timestamps: false,
  }
);


