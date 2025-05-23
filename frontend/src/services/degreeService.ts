import axios from '@/plugins/axios';

export interface Degree {
  id: number;
  name: string;
  symbol_name: string;
  coefficient: number;
}

export interface CreateDegreePayload {
  name: string;
  symbol_name: string;
  coefficient: number;
}

export type UpdateDegreePayload = CreateDegreePayload;

export const degreeService = {
  async getDegrees(): Promise<Degree[]> {
    const res = await axios.get('/api/degrees');
    return res.data;
  },

  async createDegree(payload: CreateDegreePayload): Promise<Degree> {
    const res = await axios.post('/api/degrees', payload);
    return res.data;
  },

  async updateDegree(id: number, payload: UpdateDegreePayload): Promise<Degree> {
    const res = await axios.put(`/api/degrees/${id}`, payload);
    return res.data;
  },

  async deleteDegree(id: number): Promise<void> {
    const res = await axios.delete(`/api/degrees/${id}`);
    return res.data;
  }
};
