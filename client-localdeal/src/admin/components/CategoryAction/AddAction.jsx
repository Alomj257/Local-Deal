// UpdateAdmin.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import { createService } from "../../../services/Category/FoodService";

const AddAction = ({ oldData, onAddAction, title, url }) => {
  const [data, setData] = useState({});
  const dataTypes = ["schedule", "date"];
  const [field, setFields] = useState([]);

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
      const res = await createService(url, formData);
      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        // Trigger a re-fetch of data in the parent component
      } else {
        toast.success(res?.message);
      }
      onAddAction();
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error(error);
    }
  };
  const fields = [];
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
      fields.push({ key: key, value: value });
    }
  }

  const handleAddField = () => {
    const newLabel = prompt("Enter new label:");
    if (newLabel) {
      setFields([...field, { key: newLabel, value: "" }]);
    }
  };

  const handleLabelDoubleClick = (index) => {
    const newLabel = prompt("Enter new label:", field[index].key);
    if (newLabel) {
      const updatedFields = [...field];
      updatedFields[index].key = newLabel;
      setFields(updatedFields);
    }
  };
  return (
    <div className="container">
      <div className="add-user text-dark">
        <h3 className="text-center fw-bold">Add {title}</h3>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddField}
        >
          Add Field
        </button>
        <form className="add-user-form text-start" onSubmit={handleSubmit}>
          <div className="row row-cols-md-2 text-dark">
            {fields.map((data, i) => {
              return (
                <>
                  {data?.key !== "image" && (
                    <div key={i} className="form-group my-3">
                      <label htmlFor={data?.key} className="text-capitalize">
                        {data?.key}
                      </label>

                      <input
                        type={
                          dataTypes.includes(data?.key)
                            ? "datetime-local"
                            : "text"
                        }
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
            {/* dynamic field */}
            {field.map((data, i) => {
              return (
                <>
                  {data?.key !== "image" && (
                    <div key={i} className="form-group my-3">
                      <label
                        htmlFor={data?.key}
                        className="text-capitalize"
                        onDoubleClick={() => handleLabelDoubleClick(i)}
                      >
                        {data?.key}
                      </label>

                      <input
                        type={
                          dataTypes.includes(data?.key)
                            ? "datetime-local"
                            : "text"
                        }
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
            {/* image handle */}
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
