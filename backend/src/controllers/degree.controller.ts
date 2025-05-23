import { Coefficient } from './../models/coefficient.model';
import { Request, Response } from 'express';
import { Degree } from '../models/degree.model';

export const getAllDegrees = async (req: Request, res: Response) => {
  const degrees = await Degree.findAll();
  res.json(degrees);
};

export const createDegree = async (req: Request, res: Response) => {
  
  const { name, symbol_name, coefficient  } = req.body;
  try {
    const existingName = await Degree.findOne({ where: { name } });
      if (existingName) {
        return res.status(400).json({ error: 'Không được trùng tên bằng !' });
      }
  
    const existingSymbol = await Degree.findOne({ where: { symbol_name } });
      if (existingSymbol) {
        return res.status(400).json({ error: 'Không được trùng tên kí hiệu !' });
    }
    const degree = await Degree.create({ name, symbol_name, coefficient });
    res.status(201).json(degree);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateDegree = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, symbol_name, coefficient } = req.body;
  try {
    const degree = await Degree.findByPk(id);
    if (!degree) return res.status(404).json({ error: 'Không tìm thấy bằng cấp này !' });

    await degree.update({ name, symbol_name, coefficient });
    res.json(degree);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi cập nhật bằng cấp' , detail:err });
  }
};

export const deleteDegree = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const degree = await Degree.findByPk(id);
    if (!degree) return res.status(404).json({ error: 'Không tìm thấy bằng cấp này !' });

    await degree.destroy();
    res.json({ message: 'Đã xoá bằng cấp' });
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi xoá bằng cấp', detail: err });
  }
};


