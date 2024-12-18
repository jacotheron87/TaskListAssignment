import axios from 'axios';

/*
Set up an Axios client with a set URL
and timeout to keep things simple and consistent.
*/

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

export default apiClient;
