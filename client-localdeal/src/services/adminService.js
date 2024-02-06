import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update with your backend server URL

const adminLogin = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, {
      email,
      password,
    });
    return response.data; // Return the token if login is successful
  } catch (error) {
    throw error.response.data.message; // Throw error message if login fails
  }
};

export default adminLogin;
