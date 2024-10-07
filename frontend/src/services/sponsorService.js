import axios from 'axios';

const API_URL = 'http://localhost:5000/api/sponsors/'; // Update with your backend URL

export const getSponsors = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Other sponsor-related service functions can be added here.
