import { Request, Response } from 'express';
import { Coefficient } from '../models/coefficient.model';

export const getAllCoefficients = async (_req: Request, res: Response) => {
  try {
    const data = await Coefficient.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi lấy hệ số', detail: err });
  }
};

export const getCoefficientById = async (req: Request, res: Response) => {
  try {
    const data = await Coefficient.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Không tìm thấy hệ số' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi truy xuất hệ số', detail: err });
  }
};

export const createCoefficient = async (req: Request, res: Response) => {
  const { type, reference_id, value } = req.body;
  try {
    const newData = await Coefficient.create({ type, reference_id, value });
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi tạo hệ số', detail: err });
  }
};

export const updateCoefficient = async (req: Request, res: Response) => {
  try {
    const item = await Coefficient.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Không tìm thấy hệ số' });

    const { type, reference_id, value } = req.body;
    await item.update({ type, reference_id, value });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi cập nhật hệ số', detail: err });
  }
};

export const deleteCoefficient = async (req: Request, res: Response) => {
  try {
    const deleted = await Coefficient.destroy({ where: { id: req.params.id } });
    if (deleted) return res.json({ message: 'Đã xoá hệ số' });
    res.status(404).json({ error: 'Không tìm thấy hệ số để xoá' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi xoá hệ số', detail: err });
  }
};
