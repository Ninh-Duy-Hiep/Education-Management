import { Request, Response } from 'express';
import { Degree } from '../models/degree.model';

export const getAllDegrees = async (req: Request, res: Response) => {
  const degrees = await Degree.findAll();
  res.json(degrees);
};

export const createDegree = async (req: Request, res: Response) => {
  const { name, coefficient } = req.body;
  try {
    const degree = await Degree.create({ name, coefficient });
    res.status(201).json(degree);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
