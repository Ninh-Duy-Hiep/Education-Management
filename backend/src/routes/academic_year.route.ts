import express from 'express';
import {
  getAllAcademicYears,
  getAcademicYearById,
  createAcademicYear,
  updateAcademicYear,
  deleteAcademicYear
} from '../controllers/academic_year.controller';

const router = express.Router();

router.get('/', getAllAcademicYears as express.RequestHandler);
router.get('/:id', getAcademicYearById as express.RequestHandler);
router.post('/', createAcademicYear as express.RequestHandler);
router.put('/:id', updateAcademicYear as express.RequestHandler);
router.delete('/:id', deleteAcademicYear as express.RequestHandler);

export default router;
