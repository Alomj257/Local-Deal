import React from "react";
import { toast } from "react-toastify";
import { ReplyService } from "../../../services/contactService";
const Reply = ({ url, onUpdateAction, contact, title }) => {
  const [rmessage, setRmessage] = React.useState("");
  const handleReply = async (e) => {
    e.preventDefault();
    try {
      const reply = {
        name: contact?.name,
        message: contact?.message,
        email: contact?.email,
        reply: rmessage,
      };
      const res = await ReplyService(reply, url);
      toast.success(res);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="container  mb-5">
      <h2 className="text-center text-warning"> Reply</h2>
      <div className="row row-cols-md-2 text-start text-dark text-capitalize">
        <div className=" border-bottom pt-3 ">
          <span className="fw-bold"> Name:</span>:<span>{contact?.name}</span>
        </div>
        <div className=" border-bottom pt-3 ">
          <span className="fw-bold"> Email:</span>:<span>{contact?.email}</span>
        </div>
        <div className=" border-bottom pt-3 ">
          <span className="fw-bold"> Subject:</span>:
          <span>{contact?.subject}</span>
        </div>
        <div className=" border-bottom pt-3 ">
          <span className="fw-bold"> Message:</span>:
          <span>{contact?.message}</span>
        </div>
      </div>
      <div>
        <form action="" onSubmit={handleReply}>
          <textarea
            placeholder="type your message"
            name="reply"
            id=""
            className="w-100 p-2"
            rows="3"
            onChange={(e) => setRmessage(e.target.value)}
          ></textarea>
          <button className="btn btn-primary">Reply</button>
        </form>
      </div>
    </div>
  );
};

export default Reply;
