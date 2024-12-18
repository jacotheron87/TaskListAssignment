import apiClient from './apiClient';
import { Task } from '../../types/Task';

/*
Fetches task data using the pre-configured `apiClient`.
It simplifies API calls by using the shared client setup,
and returns only the first 20 tasks.
Handles errors by rethrowing with a user-friendly message.
*/

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await apiClient.get('/todos');
    console.log('Fetched Tasks:', response.data);
    return response.data.slice(0, 20); // Return first 20 tasks
  } catch (error) {
    console.error('Error fetching tasks:', error);

    // Propagate the error to the caller
    throw new Error('Failed to fetch tasks. Please check your network connection.');
  }
};
