import express from 'express';
import { getAllDegrees, createDegree } from '../controllers/degree.controller';

const router = express.Router();

router.get('/', getAllDegrees);
router.post('/', createDegree);

export default router;
