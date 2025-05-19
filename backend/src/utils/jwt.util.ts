import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';

export const generateToken = (id: number, role: string) => {
  return jwt.sign({ id, role }, JWT_SECRET, { expiresIn: '4h' });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};
