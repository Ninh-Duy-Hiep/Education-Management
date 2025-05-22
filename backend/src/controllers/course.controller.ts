import { Request, Response } from 'express';
import { Course } from '../models/course.model';
import { Faculty } from '../models/faculty.model';
import { Semester } from '../models/semester.model';

export const getAllCourses = async (_req: Request, res: Response) => {
  try {
    const courses = await Course.findAll({ include: [Faculty, Semester] });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi lấy danh sách lớp học phần', detail: error });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id, { include: [Faculty, Semester] });
    if (!course) return res.status(404).json({ error: 'Không tìm thấy lớp học phần' });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi lấy chi tiết lớp học phần', detail: error });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  const { name, faculty_id, semester_id, student_count, course_weight } = req.body;
  try {
    const newCourse = await Course.create({ name, faculty_id, semester_id, student_count, course_weight });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: 'Lỗi tạo lớp học phần', detail: error });
  }
};

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ error: 'Không tìm thấy lớp học phần' });

    const { name, faculty_id, semester_id, student_count, course_weight } = req.body;
    await course.update({ name, faculty_id, semester_id, student_count, course_weight });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: 'Lỗi cập nhật lớp học phần', detail: error });
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const deleted = await Course.destroy({ where: { id: req.params.id } });
    if (deleted) return res.json({ message: 'Đã xoá lớp học phần' });
    res.status(404).json({ error: 'Không tìm thấy lớp học phần để xoá' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi xoá lớp học phần', detail: error });
  }
};
