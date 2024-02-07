import React, { useState } from "react";
import "./Modal.css";
import { BiX } from "react-icons/bi";

const Modal = ({ children, btnText, bodyClass, btnClasss, closeIcon }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <button className={btnClasss} onClick={() => setIsModal(!isModal)}>
        {btnText}
      </button>
      <div className={isModal ? "modal" : "d-none"}>
        <div className={bodyClass + " p-3 rounded shadow"} id="model-body">
          <div className="text-end">
            <BiX
              size={30}
              className={closeIcon + " text-end "}
              id="user-close-icon"
              onClick={() => setIsModal(false)}
            />
          </div>
          {children}
          {/* <button
            className="btn btn-secondary "
            onClick={() => setIsModal(false)}
          >
            close
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
