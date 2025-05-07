import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacher.controller';

const router = express.Router();

router.get('/', getAllTeachers as express.RequestHandler);
router.get('/:id', getTeacherById as express.RequestHandler);
router.post('/', createTeacher as express.RequestHandler);
router.put('/:id', updateTeacher as express.RequestHandler);
router.delete('/:id', deleteTeacher as express.RequestHandler);

export default router;
