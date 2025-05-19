import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import { Teacher } from './teacher.model';

interface AccountAttributes {
  id: number;
  username: string;
  password_hash: string;
  role: 'AdminTruong' | 'AdminKhoa' | 'GiaoVien';
  teacher_id?: number;
}

interface AccountCreationAttributes extends Optional<AccountAttributes, 'id'> {}

export class Account extends Model<AccountAttributes, AccountCreationAttributes>
  implements AccountAttributes {
  public id!: number;
  public username!: string;
  public password_hash!: string;
  public role!: 'AdminTruong' | 'AdminKhoa' | 'GiaoVien';
  public teacher_id?: number;
}

Account.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password_hash: { type: DataTypes.STRING(255), allowNull: false },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [['AdminTruong', 'AdminKhoa', 'GiaoVien']],
      },
    },
    teacher_id: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    sequelize,
    tableName: 'account',
    timestamps: false,
  }
);


