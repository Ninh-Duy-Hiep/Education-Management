import { Request, Response } from 'express';
import { SalaryCalculation } from '../models/salary.model';
import { Teacher } from '../models/teacher.model';
import { Course } from '../models/course.model';
import { Degree } from '../models/degree.model';
import { Coefficient } from '../models/coefficient.model';

const BASE_SALARY = 100000;

export const getAllSalaries = async (_req: Request, res: Response) => {
  const salaries = await SalaryCalculation.findAll();
  res.json(salaries);
};

export const getSalaryById = async (req: Request, res: Response) => {
  const salary = await SalaryCalculation.findByPk(req.params.id);
  if (!salary) return res.status(404).json({ error: 'Không tìm thấy bản ghi lương' });
  res.json(salary);
};

export const deleteSalary = async (req: Request, res: Response) => {
  const deleted = await SalaryCalculation.destroy({ where: { id: req.params.id } });
  if (deleted) return res.json({ message: 'Đã xoá thành công' });
  res.status(404).json({ error: 'Không tìm thấy bản ghi để xoá' });
};

export const calculateSalary = async (req: Request, res: Response) => {
  const { teacher_id, course_id, semester_id } = req.body;

  try {
    const teacher = await Teacher.findByPk(teacher_id);
    const course = await Course.findByPk(course_id);
    if (!teacher || !course) return res.status(400).json({ error: 'Dữ liệu không hợp lệ' });

    const degree = await Degree.findByPk(teacher.degree_id);
    const degreeCoeff = degree?.coefficient ?? 1.0;
    const courseWeight = course.course_weight;

    const extraCoeffs = await Coefficient.findAll({ where: { reference_id: course_id } });
    const totalExtra = extraCoeffs.reduce((sum, coeff) => sum + coeff.value, 0);

    const totalSalary = BASE_SALARY * degreeCoeff * courseWeight * (1 + totalExtra);

    const record = await SalaryCalculation.create({
      teacher_id,
      course_id,
      semester_id,
      total_salary: totalSalary
    });

    res.status(201).json(record);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi tính lương', detail: err });
  }
};
