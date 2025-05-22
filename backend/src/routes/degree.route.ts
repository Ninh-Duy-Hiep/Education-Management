import express from 'express';
import { getAllDegrees, createDegree } from '../controllers/degree.controller';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Degrees
 *   description: Quản lý bằng cấp
 */

/**
 * @swagger
 * /api/degrees:
 *   get:
 *     summary: Lấy danh sách bằng cấp
 *     tags: [Degrees]
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

/**
 * @swagger
 * /api/degrees:
 *   post:
 *     summary: Thêm bằng cấp mới
 *     tags: [Degrees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               coefficient: 
 *                 type: number
 *     responses:
 *       201:
 *         description: Tạo thành công
 *       400:
 *         description: Lỗi dữ liệu đầu vào
 */

router.get('/', getAllDegrees);
router.post('/', createDegree);

export default router;