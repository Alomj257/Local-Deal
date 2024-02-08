import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Update with your backend server URL

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

export const register = async (user) => {
  try {
    const res = await axios.post(`${API_URL}/admin/register`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateadmin = async (user, id) => {
  try {
    const res = await axios.put(`${API_URL}/admin/users/${id}`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
export const deleteAdmin = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/admin/users/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export default adminLogin;
