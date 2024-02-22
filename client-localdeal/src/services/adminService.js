import Axios from "../Axios";

const adminLogin = async (email, password) => {
  try {
    const response = await Axios.post(`/admin/login`, {
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
    const res = await Axios.post(`/admin/register`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateadmin = async (user, id) => {
  try {
    const res = await Axios.put(`/admin/update/${id}`, user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
export const deleteAdmin = async (id) => {
  try {
    const res = await Axios.delete(`/admin/users/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export default adminLogin;

export const forgetPassword = async (email) => {
  try {
    const res = await Axios.post(`/admin/forget/send-email`, email);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const verififyOtp = async (otp) => {
  try {
    const res = await Axios.post(`/admin/forget/verify`, otp);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const resetPassword = async (email, password, cnfPassword) => {
  try {
    const res = await Axios.post(`/admin/forget/set-password`, {
      email: email,
      password,
      cnfPassword,
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
