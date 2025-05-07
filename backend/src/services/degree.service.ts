import { Degree } from '../models/degree.model';

export const findAllDegrees = () => Degree.findAll();

export const addDegree = (name: string, coefficient: number) =>
  Degree.create({ name, coefficient });
