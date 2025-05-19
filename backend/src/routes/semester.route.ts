import express from 'express';
import {
  getAllSemesters,
  getSemesterById,
  createSemester,
  updateSemester,
  deleteSemester
} from '../controllers/semester.controller';

const router = express.Router();

router.get('/', getAllSemesters as express.RequestHandler);
router.get('/:id', getSemesterById as express.RequestHandler);
router.post('/', createSemester as express.RequestHandler);
router.put('/:id', updateSemester as express.RequestHandler);
router.delete('/:id', deleteSemester as express.RequestHandler);

export default router;
