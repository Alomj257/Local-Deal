import React from "react";
const ViewAction = ({ data, title }) => {
  console.log(data);
  const formData = [];
  if (!data) {
    return;
  }
  for (const [key, value] of Object.entries(data)) {
    if (key !== "_id" && key !== "__v" && key !== "imagepath") {
      formData.push({ key: key, value: value });
    }
  }
  return (
    <div className="container  mb-5">
      <h3 className="text-dark">{title?.slice(0, title.length - 4)}</h3>
      <div className="d-flex flex-column text-dark">
        <div className="border  m-auto shadow p-1  border-4">
          <img
            src={`http://localhost:5000${data?.image}`}
            alt="profile"
            height={100}
            width={100}
            className="shadow"
          />
        </div>
        <p className="text-center my-4">{data?.description}</p>
      </div>
      <div className="row row-cols-md-2 text-start text-dark text-capitalize">
        {formData.map((d, k) => {
          return (
            <>
              {d?.key !== "image" && d?.key !== "description" && (
                <div key={k} className=" border-bottom pt-3 ">
                  <span className="fw-bold"> {d.key}</span>:
                  {Array.isArray(data[d.key]) ? (
                    <div className=" mt-2 mb-2">
                      {data[d.key].map((item) => (
                        <span className="p-1   mx-2 bg-secondary text-white rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span>{data[d?.key]}</span>
                  )}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ViewAction;
