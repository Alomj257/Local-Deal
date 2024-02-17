import React from "react";
import { MdDelete } from "react-icons/md";
import { deleteAdmin } from "../../../services/adminService";
import { toast } from "react-toastify";

const DeleteAdmin = ({ user, onUserDelete }) => {
  const handleDelete = async (id) => {
    try {
      const res = await deleteAdmin(id);
      toast.success(res.message);
      onUserDelete();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <h5 className="text-center text-dark">{user?.name}</h5>
      <p className="text-dark">Are you sure you want to delete this admin?</p>
      <div className="d-flex justify-content-between">
        <button
          onClick={() => onUserDelete()}
          className="btn btn-secondary fw-bold d-flex w-100 justify-content-center fw-5"
        >
          Cancel
        </button>
        <button
          onClick={() => handleDelete(user?._id)}
          className="btn btn-danger fw-bold d-flex w-100 justify-content-center fw-5"
        >
          <MdDelete className="my-auto" size={20} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAdmin;
