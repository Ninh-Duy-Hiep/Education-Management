import express from 'express';
import {
  getAllCoefficients,
  getCoefficientById,
  createCoefficient,
  updateCoefficient,
  deleteCoefficient
} from '../controllers/coefficient.controller';

const router = express.Router();

router.get('/', getAllCoefficients as express.RequestHandler);
router.get('/:id', getCoefficientById as express.RequestHandler);
router.post('/', createCoefficient as express.RequestHandler);
router.put('/:id', updateCoefficient as express.RequestHandler);
router.delete('/:id', deleteCoefficient as express.RequestHandler);

export default router;
