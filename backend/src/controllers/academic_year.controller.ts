import { Request, Response } from 'express';
import { AcademicYear } from '../models/academic_year.model';

const formatDate = (date: any) => {
  const d = new Date(date); 
  return d.toISOString().split('T')[0];
};

const formatAcademicYear = (year: any) => ({
  id: year.id,
  name: year.name,
  start_date: formatDate(year.start_date),
  end_date: formatDate(year.end_date)
});


export const getAllAcademicYears = async (_req: Request, res: Response) => {
  try {
    const data = await AcademicYear.findAll();
    const formatted = data.map(formatAcademicYear);
    res.json(formatted);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách năm học', detail: err });
  }
};

export const getAcademicYearById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const year = await AcademicYear.findByPk(id);
    if (!year) return res.status(404).json({ error: 'Không tìm thấy năm học' });
    res.json(formatAcademicYear(year));    
  } catch (err) {
    res.status(500).json({ error: 'Lỗi lấy chi tiết năm học', detail: err });
  }
};

export const createAcademicYear = async (req: Request, res: Response) => {
  const { name, start_date, end_date } = req.body;
  try {
    const newYear = await AcademicYear.create({name, start_date, end_date});
    res.status(201).json(formatAcademicYear(newYear));
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi tạo năm học', detail: err });
  }
};

export const updateAcademicYear = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, start_date, end_date } = req.body;
  try {
    const year = await AcademicYear.findByPk(id);
    if (!year) return res.status(404).json({ error: 'Không tìm thấy năm học' });

    await year.update({ name, start_date, end_date });
    res.json(formatAcademicYear(year));
  } catch (err) {
    res.status(400).json({ error: 'Lỗi cập nhật năm học', detail: err });
  }
};

export const deleteAcademicYear = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await AcademicYear.destroy({ where: { id } });
    if (deleted) return res.json({ message: 'Xoá năm học thành công' });
    res.status(404).json({ error: 'Không tìm thấy năm học để xoá' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi xoá năm học', detail: err });
  }
};
