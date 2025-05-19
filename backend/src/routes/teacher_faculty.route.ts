import express from 'express';
import {
  getAllTeacherFaculty,
  getFacultiesOfTeacher,
  getTeachersOfFaculty,
  assignTeacherToFaculty,
  removeTeacherFromFaculty
} from '../controllers/teacher_faculty.controller';

const router = express.Router();

router.get('/', getAllTeacherFaculty as express.RequestHandler);
router.get('/teachers/:teacherId', getFacultiesOfTeacher as express.RequestHandler);
router.get('/faculties/:facultyId', getTeachersOfFaculty as express.RequestHandler);
router.post('/', assignTeacherToFaculty as express.RequestHandler);
router.delete('/', removeTeacherFromFaculty as express.RequestHandler);

export default router;
