import axios from 'axios';

axios.defaults.baseURL = 'https://630d411153a833c5343dd62a.mockapi.io';

export const addMaterial = async material => {
  const resp = await axios.post('/materials', material);
  return resp.data;
};

export const getMaterials = async () => {
  const resp = await axios.get('/materials');
  return resp.data;
};

export const deleteMaterial = async materialId => {
  const resp = await axios.delete(`/materials/${materialId}`);
  return resp.data;
};

export const updateMaterial = async update => {
  const resp = await axios.put(`/materials/${update.id}`, update);
  return resp.data;
};
