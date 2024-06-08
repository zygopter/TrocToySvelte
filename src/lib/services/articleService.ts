import { getUserId } from './auth';
import { getLocation } from './locationService';
import type {Location} from './locationService';

export const createArticle = async (title: string, description: string, photos: File[]): Promise<any> => {
  const userId = getUserId();
  const location = await getLocation();

  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  if (userId) {
    formData.append('userId', userId);
  }
  formData.append('location', JSON.stringify(location));
  console.log(photos);
  const photosArray = Array.from(photos);
  photosArray.forEach((photo, index) => formData.append(`photo${index}`, photo));

  console.log('Sending the following data to the server:', Object.fromEntries(formData));

  return fetch(`${import.meta.env.VITE_API_URL}/api/articles`, {
    method: 'POST',
    body: formData
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};
