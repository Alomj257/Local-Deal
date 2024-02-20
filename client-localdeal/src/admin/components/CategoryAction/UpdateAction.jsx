// UpdateAdmin.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { updateActionService } from "../../../services/Category/FoodService";

const UpdateAction = ({ oldData, onUpdateAction, title, url }) => {
  const dataTypes = ["schedule", "date"];
  const [data, setUser] = useState(oldData);

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setUser({ ...data, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      console.log(data);
      const res = await updateActionService(url, formData, oldData?._id);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        // Trigger a re-fetch of data in the parent component
      } else {
        toast.success(res?.message);
      }
      onUpdateAction();
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
        <h3 className="text-center fw-bold">Update {title} </h3>
        <form className="add-user-form text-start" onSubmit={handleSubmit}>
          <div className="row row-cols-md-2 text-dark">
            {formData.map((d, i) => {
              return (
                <>
                  {d?.key !== "image" && (
                    <div key={i} className="form-group my-3">
                      <label htmlFor={d?.key} className="text-capitalize">
                        {d?.key}
                      </label>

                      <input
                        type={
                          dataTypes.includes(d?.key) ? "datetime-local" : "text"
                        }
                        id={d?.key}
                        name={d?.key}
                        className="form-control"
                        value={data[d?.key]}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </>
              );
            })}
            {oldData?.image && (
              <div className="form-group my-3">
                <label htmlFor="image" className="text-capitalize">
                  Image
                </label>{" "}
                <br />
                <div className="d-flex gap-4">
                  {" "}
                  <img
                    style={{ width: "6rem" }}
                    src={`http://localhost:5000${oldData["image"]}`}
                    alt="category"
                    className="py-3"
                  />
                  {data?.file && (
                    <img
                      style={{ width: "6rem" }}
                      src={URL.createObjectURL(data?.file)}
                      alt="category"
                      className="py-3"
                    />
                  )}
                </div>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>
            )}
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

export default UpdateAction;
