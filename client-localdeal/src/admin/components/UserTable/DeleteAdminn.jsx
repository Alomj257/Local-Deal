import React from "react";
import { MdDelete } from "react-icons/md";
import { deleteAdmin } from "../../../services/adminService";
import { toast } from "react-toastify";

const DeleteAdmin = ({ user }) => {
  const handledelete = async (id) => {
    try {
      const res = await deleteAdmin(id);
      toast.success(res.message);
    } catch (error) {
      toast.success(error);
    }
  };

  return (
    <div>
      <h5 className="text-center text-white">{user?.name}</h5>
      <p className="text-white">Are you sure delete this admin</p>
      <button
        onClick={() => handledelete(user?._id)}
        className="btn fw-bold d-flex btn-primary w-100 justify-content-center fw-5"
      >
        <MdDelete className="my-auto" size={20} />
        Delete
      </button>
    </div>
  );
};

export default DeleteAdmin;