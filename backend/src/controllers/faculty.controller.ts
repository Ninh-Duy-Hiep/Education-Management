import { Request, Response } from 'express';
import { Faculty } from '../models/faculty.model';
import { Teacher } from '../models/teacher.model';

export const getAllFaculties = async (req: Request, res: Response) => {
  try {
    const faculties = await Faculty.findAll({
      include: [{ model: Teacher, as: 'info_head' }]
    });
    res.json(faculties);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách khoa', detail: err });
  }
};

export const getFacultyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const faculty = await Faculty.findByPk(id, {
      include: [{ model: Teacher, as: 'info_head' }]
    });
    if (!faculty) return res.status(404).json({ error: 'Khoa không tồn tại' });
    res.json(faculty);
  } catch (err) {
    console.error('Lỗi khi lấy thông tin khoa:', err);
    res.status(500).json({ error: 'Lỗi khi lấy thông tin khoa', detail: err });
  }
};

export const createFaculty = async (req: Request, res: Response) => {
  const { name, description, contact_phone, head_of_faculty } = req.body;
  try {
    const faculty = await Faculty.create({ name, description, contact_phone, head_of_faculty });  
    res.status(201).json(faculty);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi tạo khoa', detail: err });
  }
};

export const updateFaculty = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, contact_phone, head_of_faculty } = req.body;
  try {
    const faculty = await Faculty.findByPk(id);
    if (!faculty) return res.status(404).json({ error: 'Khoa không tồn tại' });

    await faculty.update({ name, description, contact_phone, head_of_faculty });
    res.json(faculty);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi cập nhật khoa', detail: err });
  }
};

export const deleteFaculty = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const faculty = await Faculty.findByPk(id);
    if (!faculty) return res.status(404).json({ error: 'Khoa không tồn tại' });

    await faculty.destroy();
    res.json({ message: 'Khoa đã bị xoá' });
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi xoá khoa', detail: err });
  }
};
