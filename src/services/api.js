import axios from 'axios';

// Configurer l'URL de base de l'API Symfony
const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Adresse de votre backend Symfony
  headers: {
    'Content-Type': 'application/json',
  },
});

// Appels API
export const getData = async () => {
  try {
    const response = await apiClient.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (payload) => {
  try {
    const response = await apiClient.post('/submit', payload);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
