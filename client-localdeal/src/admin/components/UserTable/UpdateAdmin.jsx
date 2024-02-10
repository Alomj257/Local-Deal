// UpdateAdmin.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateadmin } from "../../../services/adminService";

const UpdateAdmin = ({ oldUser, onUserUpdate }) => {
  const [user, setUser] = useState(oldUser);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setUser({ ...user, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (let key in user) {
        formData.append(key, user[key]);
      }
      console.log(user);
      const res = await updateadmin(formData, oldUser?._id);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        // Trigger a re-fetch of data in the parent component
        onUserUpdate();
      } else {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error);
    }
  };

  return (
    <div className="container">
      <div className="add-user">
        <h3 className="text-center fw-bold">Update Admin</h3>
        <form className="add-user-form text-start" onSubmit={handleSubmit}>
          <div className="row row-cols-md-2">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={user?.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control"
                value={user?.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone No.</label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                className="form-control"
                value={user?.phoneNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date Of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                defaultChecked
                className="form-control"
                value={user?.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="Male">Male</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    onChange={handleInputChange}
                    value="Other"
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                name="role"
                className="form-control"
                value={user?.role}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="qualification">Qualifications</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                className="form-control"
                value={user?.qualification}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={user?.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                className="form-control"
                value={user?.nationality}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passportNo">Passport No.</label>
              <input
                type="text"
                id="passportNo"
                name="passportNo"
                className="form-control"
                value={user?.passportNo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Profile Image</label>
              <small style={{ fontSize: "9px" }}>
                image must be less than 5MB and jpeg, png, webp, gif formate
              </small>
              {user?.profile && (
                <div className="form-group">
                  <img
                    src={user?.profile}
                    alt="Profile"
                    style={{ width: "100px", height: "auto" }}
                  />
                </div>
              )}
              <input
                type="file"
                id="file"
                name="file"
                className="form-control"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Update User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdmin;
