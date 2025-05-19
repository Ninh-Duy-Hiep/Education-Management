import { Request, Response } from 'express';
import { TeacherFaculty } from '../models/teacher_faculty.model';
import { Teacher } from '../models/teacher.model';
import { Faculty } from '../models/faculty.model';

export const getAllTeacherFaculty = async (_req: Request, res: Response) => {
  try {
    const data = await TeacherFaculty.findAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi lấy danh sách phân công giáo viên-khoa', detail: err });
  }
};

export const getFacultiesOfTeacher = async (req: Request, res: Response) => {
  const { teacherId } = req.params;
  try {
    const teacher = await Teacher.findByPk(teacherId, {
      include: [{ model: Faculty }]
    });
    if (!teacher) return res.status(404).json({ error: 'Không tìm thấy giáo viên' });
    res.json(teacher.Faculties);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi lấy khoa của giáo viên', detail: err });
  }
};

export const getTeachersOfFaculty = async (req: Request, res: Response) => {
  const { facultyId } = req.params;
  try {
    const faculty = await Faculty.findByPk(facultyId, {
      include: [{ model: Teacher }]
    });
    if (!faculty) return res.status(404).json({ error: 'Không tìm thấy khoa' });
    res.json(faculty.Teachers);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi khi lấy giáo viên của khoa', detail: err });
  }
};

export const assignTeacherToFaculty = async (req: Request, res: Response) => {
  const { teacher_id, faculty_id } = req.body;
  try {
    await TeacherFaculty.create({ teacher_id, faculty_id });
    res.status(201).json({ message: 'Gán thành công' });
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi gán giáo viên vào khoa', detail: err });
  }
};

export const removeTeacherFromFaculty = async (req: Request, res: Response) => {
  const { teacher_id, faculty_id } = req.body;
  try {
    const deleted = await TeacherFaculty.destroy({ where: { teacher_id, faculty_id } });
    if (deleted) return res.json({ message: 'Huỷ gán thành công' });
    res.status(404).json({ error: 'Không tìm thấy bản ghi cần huỷ' });
  } catch (err) {
    res.status(400).json({ error: 'Lỗi khi huỷ gán giáo viên khỏi khoa', detail: err });
  }
};
