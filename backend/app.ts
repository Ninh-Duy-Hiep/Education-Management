import express from 'express';
import degreeRoutes from './src/routes/degree.route';
import teacherRoutes from './src/routes/teacher.route';

const app = express();

app.use(express.json());
app.use('/api/degrees', degreeRoutes);
app.use('/api/teachers', teacherRoutes);

export default app;
