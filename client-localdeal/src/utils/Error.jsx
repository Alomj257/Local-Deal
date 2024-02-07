import React, { useEffect, useState } from "react";

const Error = ({ isError, message }) => {
  const [alert, setAlert] = useState(false);
  const [cnt, setCnt] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (cnt > 0) {
        setCnt(cnt - 1);
        setAlert(true);
      } else {
        setAlert(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cnt]);

  return (
    <>
      {alert && (
        <div className={isError ? "text-danger" : "text-success"}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Error;
