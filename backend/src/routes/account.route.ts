import express from 'express';
import { login, register, getAccountInfo, updateAccount, deleteAccount } from '../controllers/account.controller';
import { verifyToken } from '../utils/jwt.util';

const router = express.Router();

router.post('/login', login as express.RequestHandler);
router.post('/register', register as express.RequestHandler);
router.get('/me', verifyTokenMiddleware, getAccountInfo as express.RequestHandler);
router.put('/:id', verifyTokenMiddleware, updateAccount as express.RequestHandler);
router.delete('/:id', verifyTokenMiddleware, deleteAccount as express.RequestHandler);

export default router;

function verifyTokenMiddleware(req: any, res: any, next: any) {
  const token = req.headers.authorization?.split(' ')[1]; 

  if (!token) return res.status(401).json({ error: 'Token không hợp lệ' });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Token không hợp lệ' });

  req.user = decoded; 
  next();
}
