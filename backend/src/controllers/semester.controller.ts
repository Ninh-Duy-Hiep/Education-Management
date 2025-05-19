import { Request, Response } from 'express';
import { Semester } from '../models/semester.model';
import { AcademicYear } from '../models/academic_year.model';

export const getAllSemesters = async (_req: Request, res: Response) => {
  try {
    const semesters = await Semester.findAll({ include: AcademicYear });
    res.json(semesters);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi lấy danh sách kỳ học', detail: err });
  }
};

export const getSemesterById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const semester = await Semester.findByPk(id, { include: AcademicYear });
    if (!semester) return res.status(404).json({ error: 'Không tìm thấy kỳ học' });
    res.json(semester);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi lấy chi tiết kỳ học', detail: err });
  }
};

export const createSemester = async (req: Request, res: Response) => {
  const { name, academic_year_id, start_date, end_date } = req.body;
  try {
    const newSemester = await Semester.create({ name, academic_year_id, start_date, end_date });
    res.status(201).json(newSemester);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi tạo kỳ học', detail: err });
  }
};

export const updateSemester = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, academic_year_id, start_date, end_date } = req.body;
  try {
    const semester = await Semester.findByPk(id);
    if (!semester) return res.status(404).json({ error: 'Không tìm thấy kỳ học' });

    await semester.update({ name, academic_year_id, start_date, end_date });
    res.json(semester);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi cập nhật kỳ học', detail: err });
  }
};

export const deleteSemester = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Semester.destroy({ where: { id } });
    if (deleted) return res.json({ message: 'Xoá kỳ học thành công' });
    res.status(404).json({ error: 'Không tìm thấy kỳ học để xoá' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi xoá kỳ học', detail: err });
  }
};
