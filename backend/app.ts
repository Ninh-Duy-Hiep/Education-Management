import express from 'express';
import { setupSwagger } from './src/config/swaggerConfig';
import degreeRoutes from './src/routes/degree.route';
import teacherRoutes from './src/routes/teacher.route';
import accountRoutes from './src/routes/account.route';
import facultyRoutes from './src/routes/faculty.route';
import teacherFacultyRoutes from './src/routes/teacher_faculty.route';
import academicYearRoutes from './src/routes/academic_year.route';
import semesterRoutes from './src/routes/semester.route';
import courseRoutes from './src/routes/course.route';
import teachingAssignmentRoutes from './src/routes/teaching_assignment.route';
import coefficientRoutes from './src/routes/coefficient.route';
import salaryRoutes from './src/routes/salary.route';
import cors from 'cors';

const app = express();
setupSwagger(app);

app.use(cors({
    origin: 'http://localhost:5174',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
}));
app.use(express.json());
app.use('/api/degrees', degreeRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/faculties', facultyRoutes);
app.use('/api/teacher-faculty', teacherFacultyRoutes);
app.use('/api/academic-years', academicYearRoutes);
app.use('/api/semesters', semesterRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', teachingAssignmentRoutes);
app.use('/api/coefficients', coefficientRoutes);
app.use('/api/salaries', salaryRoutes);

export default app;
