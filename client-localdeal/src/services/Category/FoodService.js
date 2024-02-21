import Axios from "../../Axios";

export const createService = async (url, category) => {
  try {
    const res = await Axios.post(`${url}`, category, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const updateActionService = async (url, category, id) => {
  try {
    const res = await Axios.put(`${url}/${id}`, category, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const deleteActionService = async (url, id) => {
  try {
    const res = await Axios.delete(`${url}/${id}`);
    return res.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
