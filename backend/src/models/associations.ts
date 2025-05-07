import { Teacher } from './teacher/teacher.model';
import { Degree } from './degree.model';

export const setupAssociations = () => {
  Teacher.belongsTo(Degree, { foreignKey: 'degree_id', as: 'degree' });
  Degree.hasMany(Teacher, { foreignKey: 'degree_id', as: 'teachers' });
}; 