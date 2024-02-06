import React from "react";
import "./AddUser.css";
const AddUser = () => {
  return (
    <div className="p-3 ">
      <h3 className="text-center fw-bold text-primary">Add User/ Register</h3>
      <form action="">
        <div className="row row-cols-md-2">
          <div className="my-3">
            <label htmlFor="">Name</label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">Email</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">Password</label>
            <input type="password" name="password" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="cnf-password"
              className="form-control"
            />
          </div>
          <div className="my-3">
            <label htmlFor="">Phone</label>
            <input type="tel" name="phone" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">DOB</label>
            <input type="date" name="dob" className="form-control" />
          </div>
          <div className="my-3" id="user-gender">
            <label htmlFor="">Gender</label>
            <div className="d-flex justify-content-between mx-3">
              <div>
                <span className="me-2">Male</span>
                <input value="Male" type="radio" name="gender" />
              </div>
              <div>
                <span className="me-2">Female</span>
                <input type="radio" value="Female" name="gender" />
              </div>
              <div>
                <span className="me-2">Other</span>
                <input type="radio" value="other" name="gender" />
              </div>
            </div>
          </div>

          <div className="my-3">
            <label htmlFor="">Role</label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">Qualifications</label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">Address</label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">Nationality</label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3">
            <label htmlFor="">PassportNo</label>
            <input type="text" className="form-control" />
          </div>
          <div className="my-3">
            <img src="user" alt="" />
            <input type="file" name="profile" id="" />
          </div>
        </div>
        <div className="text-center my-3">
          <button className="btn btn-primary">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
