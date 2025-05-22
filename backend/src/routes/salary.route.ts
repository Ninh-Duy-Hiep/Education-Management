import express from 'express';
import {
  getAllSalaries,
  getSalaryById,
  deleteSalary,
  calculateSalary
} from '../controllers/salary.controller';

const router = express.Router();

router.get('/', getAllSalaries as express.RequestHandler);  
router.get('/:id', getSalaryById as express.RequestHandler);
router.post('/calculate', calculateSalary as express.RequestHandler);
router.delete('/:id', deleteSalary as express.RequestHandler);

export default router;
