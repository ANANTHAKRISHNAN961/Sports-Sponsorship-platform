import axios from 'axios';

const API_URL = 'http://localhost:5000/api/athletes/'; // Update with your backend URL

export const getAthletes = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Other athlete-related service functions can be added here.
