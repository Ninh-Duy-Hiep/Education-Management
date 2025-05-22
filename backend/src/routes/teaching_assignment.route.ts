import express from 'express';
import {
  getAllAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} from '../controllers/teaching_assignment.controller';

const router = express.Router();

router.get('/', getAllAssignments as express.RequestHandler);
router.get('/:id', getAssignmentById as express.RequestHandler);
router.post('/', createAssignment as express.RequestHandler);
router.put('/:id', updateAssignment as express.RequestHandler);
router.delete('/:id', deleteAssignment as express.RequestHandler);

export default router;
