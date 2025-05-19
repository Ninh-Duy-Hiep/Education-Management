import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Account } from '../models/account.model';
import { Teacher } from '../models/teacher.model';
import { generateToken, verifyToken } from '../utils/jwt.util';

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const account = await Account.findOne({ where: { username }, include: Teacher });
  if (!account) return res.status(400).json({ error: 'Tài khoản không tồn tại' });

  const isMatch = await bcrypt.compare(password, account.password_hash);
  if (!isMatch) return res.status(400).json({ error: 'Mật khẩu không đúng' });

  const token = generateToken(account.id, account.role);

  res.json({ token });
};

export const register = async (req: Request, res: Response) => {
  const { username, password, role, teacher_id } = req.body;

  const password_hash = await bcrypt.hash(password, 10);

  try {
    const account = await Account.create({ username, password_hash, role, teacher_id });
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi tạo tài khoản', detail: err });
  }
};

export const getAccountInfo = async (req: Request, res: Response) => {
  const accountId = (req as any ).user.id; 

  const account = await Account.findByPk(accountId, {
    include: [{ model: Teacher }],
  });

  if (!account) return res.status(404).json({ error: 'Tài khoản không tìm thấy' });

  res.json(account);
};

export const updateAccount = async (req: Request, res: Response) => {
  const accountId = req.params.id;
  const { username, role, teacher_id } = req.body;

  const account = await Account.findByPk(accountId);
  if (!account) return res.status(404).json({ error: 'Tài khoản không tìm thấy' });

  await account.update({ username, role, teacher_id });
  res.json(account);
};

export const deleteAccount = async (req: Request, res: Response) => {
  const accountId = req.params.id;

  const account = await Account.findByPk(accountId);
  if (!account) return res.status(404).json({ error: 'Tài khoản không tìm thấy' });

  await account.destroy();
  res.json({ message: 'Tài khoản đã bị xoá' });
};
