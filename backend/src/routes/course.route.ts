import express from 'express';
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
} from '../controllers/course.controller';

const router = express.Router();

router.get('/', getAllCourses as express.RequestHandler);
router.get('/:id', getCourseById as express.RequestHandler);
router.post('/', createCourse as express.RequestHandler);
router.put('/:id', updateCourse as express.RequestHandler);
router.delete('/:id', deleteCourse as express.RequestHandler);

export default router;
