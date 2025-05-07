import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Teacher } from '../models/teacher/teacher.model';
import { TeacherFaculty } from '../models/teacher/teacher_faculty.model';
import { Degree } from '../models/degree.model';

export const getAllTeachers = async (req: Request, res: Response) => {
  const { degree_id, faculty_id, name } = req.query;

  try {
    // Base where clause
    const whereClause: any = {};
    if (degree_id) whereClause.degree_id = degree_id;
    if (name) whereClause.full_name = { [Op.like]: `%${name}%` };

    let teacherIds: number[] | undefined = undefined;

    if (faculty_id) {
      const teacherFaculties = await TeacherFaculty.findAll({ where: { faculty_id } });
      teacherIds = teacherFaculties.map(tf => tf.teacher_id);
      whereClause.id = { [Op.in]: teacherIds };
    }

    const teachers = await Teacher.findAll({
      where: whereClause,
      include: [{ model: Degree, as: 'degree' }],
    });

    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch teachers', detail: err });
  }
};

export const getTeacherById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teacher = await Teacher.findByPk(id, {
    include: [{ model: Degree, as: 'degree' }],
  });
  if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
  res.json(teacher);
};

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const updateTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teacher = await Teacher.findByPk(id);
  if (!teacher) return res.status(404).json({ error: 'Teacher not found' });

  await teacher.update(req.body);
  res.json(teacher);
};

export const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teacher = await Teacher.findByPk(id);
  if (!teacher) return res.status(404).json({ error: 'Teacher not found' });

  await teacher.destroy();
  res.json({ message: 'Teacher deleted successfully' });
};
