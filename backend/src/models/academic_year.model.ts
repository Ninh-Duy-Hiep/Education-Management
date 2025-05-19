import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

export class AcademicYear extends Model {
  map(arg0: (item: any) => { id: any; name: any; start_date: string; end_date: string; }) {
    throw new Error('Method not implemented.');
  }
}

AcademicYear.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey : true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull : false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'academicyear',
        timestamps: false
    }
)