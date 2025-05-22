import axios from '@/plugins/axios';

export interface Degree {
  id: number;
  name: string;
  coefficient: number;
}

export interface CreateDegreePayload {
  name: string;
  coefficient: number;
}

export const degreeService = {
  async getDegrees(): Promise<Degree[]> {
    const res = await axios.get('/api/degrees');
    return res.data;
  },

  async createDegree(payload: CreateDegreePayload): Promise<Degree> {
    const res = await axios.post('/api/degrees', payload);
    return res.data;
  }
};
