import express from 'express';
import { getAllFaculties, getFacultyById, createFaculty, updateFaculty, deleteFaculty } from '../controllers/faculty.controller';

const router = express.Router();

router.get('/', getAllFaculties as express.RequestHandler);
router.get('/:id', getFacultyById as express.RequestHandler);
router.post('/', createFaculty as express.RequestHandler);
router.put('/:id', updateFaculty as express.RequestHandler);
router.delete('/:id', deleteFaculty as express.RequestHandler);

export default router;
