import React from "react";
import {
  MdContacts,
  MdLocationPin,
  MdPeopleAlt,
  MdSecurity,
} from "react-icons/md";
import {
  BsCalendar2MinusFill,
  BsFileEarmarkPersonFill,
  BsFileTextFill,
  BsFillThreadsFill,
  BsGenderAmbiguous,
  BsGlobeAsiaAustralia,
} from "react-icons/bs";
const ViewUser = ({ user }) => {
  return (
    <div className="container  mb-5">
      <div className="d-flex justify-content-center flex-column">
        <div className="border rounded-circle m-auto shadow p-1  border-4">
          <img
            src={`http://localhost:5000${user?.profile}`}
            alt="profile"
            height={100}
            width={100}
            className="rounded-circle  shadow"
          />
        </div>
        <p className="text-center">
          {user?.address + ", " + user?.nationality}
        </p>
      </div>
      <div className="row row-cols-md-2 text-capitalize">
        <div className=" border-bottom pt-3 ">
          <MdPeopleAlt
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.name}
        </div>
        <div className="text-lowercase  border-bottom pt-3 ">
          <BsFillThreadsFill
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.email}
        </div>
        <div className=" border-bottom pt-3 ">
          <MdSecurity
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.role} (User type)
        </div>
        <div className=" border-bottom pt-3 ">
          <BsCalendar2MinusFill
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.dob}
        </div>
        <div className=" border-bottom pt-3 ">
          <MdContacts
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.phoneNo}
        </div>
        <div className=" border-bottom pt-3 ">
          <BsFileTextFill
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.qualification}(Qualification)
        </div>
        <div className=" border-bottom pt-3 ">
          <MdLocationPin
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.address}
        </div>
        <div className=" border-bottom pt-3 ">
          <BsGenderAmbiguous
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.gender}
        </div>
        <div className=" border-bottom pt-3 ">
          <BsGlobeAsiaAustralia
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.nationality}
        </div>
        <div className=" border-bottom pt-3 ">
          <BsFileEarmarkPersonFill
            size={25}
            className="text-white bg-secondary rounded p-1 me-2"
          />
          {user?.passportNo}
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
