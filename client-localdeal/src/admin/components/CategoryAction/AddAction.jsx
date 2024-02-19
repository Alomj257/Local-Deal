// UpdateAdmin.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateadmin } from "../../../services/adminService";

const AddAction = ({ oldData, onUpdateAction, title }) => {
  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setData({ ...data, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      console.log(data);
      const res = await updateadmin(formData, oldData?._id);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        // Trigger a re-fetch of data in the parent component
        onUpdateAction();
      } else {
        toast.success(res?.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error);
    }
  };
  const formData = [];
  if (!oldData) {
    return;
  }
  for (const [key, value] of Object.entries(oldData)) {
    if (
      key !== "_id" &&
      key !== "__v" &&
      key !== "imagepath" &&
      !Array.isArray(value)
    ) {
      formData.push({ key: key, value: value });
    }
  }

  return (
    <div className="container">
      <div className="add-user text-dark">
        <h3 className="text-center fw-bold">Add {title}</h3>
        <form className="add-user-form text-start" onSubmit={handleSubmit}>
          <div className="row row-cols-md-2 text-dark">
            {formData.map((data, i) => {
              return (
                <>
                  {data?.key !== "image" && (
                    <div key={i} className="form-group my-3">
                      <label htmlFor={data?.key} className="text-capitalize">
                        {data?.key}
                      </label>

                      <input
                        type="text"
                        id={data?.key}
                        name={data?.key}
                        className="form-control"
                        value={data[data?.key]}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </>
              );
            })}
            <div className="form-group my-3">
              <label htmlFor="image" className="text-capitalize">
                Image
              </label>{" "}
              <br />
              {data?.file && (
                <img
                  style={{ width: "6rem" }}
                  src={URL.createObjectURL(data?.file)}
                  alt="category"
                  className="py-3"
                />
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
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAction;
