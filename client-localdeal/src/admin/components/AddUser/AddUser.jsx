import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="container">
      <div className="add-user">
        <h3 className="text-center fw-bold">Add Admin</h3>
        <form className="add-user-form">
          <div className="row row-cols-md-2">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="cnf-password">Confirm Password</label>
              <input type="password" id="cnf-password" name="cnf-password" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="dob">DOB</label>
              <input type="date" id="dob" name="dob" className="form-control" />
            </div>
            <div className="form-group" id="user-gender">
              <label>Gender</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input type="radio" id="male" name="gender" value="Male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="female" name="gender" value="Female" />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="radio-item">
                  <input type="radio" id="other" name="gender" value="Other" />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input type="text" id="role" name="role" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="qualifications">Qualifications</label>
              <input type="text" id="qualifications" name="qualifications" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input type="text" id="nationality" name="nationality" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="passport-no">Passport No</label>
              <input type="text" id="passport-no" name="passport-no" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="profile">Profile Picture</label>
              <input type="file" id="profile" name="profile" className="form-control-file" />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
