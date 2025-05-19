import { Teacher } from "./teacher.model";
import { Degree } from "./degree.model";
import { Account } from "./account.model";
import { Faculty } from "./faculty.model";
import { TeacherFaculty } from "./teacher_faculty.model";
import { Semester } from "./semester.model";
import { AcademicYear } from "./academic_year.model";

export const setupAssociations = () => {

  Teacher.belongsTo(Degree, { foreignKey: "degree_id", as: "degree" });
  Degree.hasMany(Teacher, { foreignKey: "degree_id", as: "teachers" });

  Account.belongsTo(Teacher, { foreignKey: "teacher_id" });
  
  Faculty.belongsTo(Teacher, { foreignKey: "head_of_faculty",as: "info_head"});

  Teacher.belongsToMany(Faculty, {
    through: TeacherFaculty,
    foreignKey: 'teacher_id', 
  });
  Faculty.belongsToMany(Teacher, {
    through: TeacherFaculty,
    foreignKey: 'faculty_id'
  });

  Semester.belongsTo(AcademicYear, { foreignKey: 'academic_year_id' });
};
