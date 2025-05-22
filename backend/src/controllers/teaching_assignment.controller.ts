import { Request, Response } from 'express';
import { TeachingAssignment } from '../models/teaching_assignment.model';
import { Teacher } from '../models/teacher.model';
import { Course } from '../models/course.model';

export const getAllAssignments = async (_req: Request, res: Response) => {
  try {
    const assignments = await TeachingAssignment.findAll({
      include: [Teacher, Course],
    });
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi lấy danh sách phân công', detail: err });
  }
};

export const getAssignmentById = async (req: Request, res: Response) => {
  try {
    const assignment = await TeachingAssignment.findByPk(req.params.id, {
      include: [Teacher, Course],
    });
    if (!assignment) return res.status(404).json({ error: 'Không tìm thấy phân công' });
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi lấy phân công', detail: err });
  }
};

export const createAssignment = async (req: Request, res: Response) => {
  const { teacher_id, course_id, assigned_date } = req.body;
  try {
    const newAssignment = await TeachingAssignment.create({
      teacher_id,
      course_id,
      assigned_date,
    });
    res.status(201).json(newAssignment);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi tạo phân công', detail: err });
  }
};

export const updateAssignment = async (req: Request, res: Response) => {
  try {
    const assignment = await TeachingAssignment.findByPk(req.params.id);
    if (!assignment) return res.status(404).json({ error: 'Không tìm thấy phân công' });

    const { teacher_id, course_id, assigned_date } = req.body;
    await assignment.update({ teacher_id, course_id, assigned_date });
    res.json(assignment);
  } catch (err) {
    res.status(400).json({ error: 'Lỗi cập nhật phân công', detail: err });
  }
};

export const deleteAssignment = async (req: Request, res: Response) => {
  try {
    const deleted = await TeachingAssignment.destroy({ where: { id: req.params.id } });
    if (deleted) return res.json({ message: 'Đã xoá phân công' });
    res.status(404).json({ error: 'Không tìm thấy phân công để xoá' });
  } catch (err) {
    res.status(500).json({ error: 'Lỗi xoá phân công', detail: err });
  }
};
