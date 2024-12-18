// src/api/axiosInstance.ts
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000, // Optional: Set a timeout for requests
});

// Optional: Add request interceptors
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify config before sending the request
        // e.g., Add authorization headers if needed
        // const token = store.getState().auth.token;
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Optional: Add response interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle response errors
        // You can customize error handling based on status codes
        return Promise.reject(error);
    }
);

export default axiosInstance;