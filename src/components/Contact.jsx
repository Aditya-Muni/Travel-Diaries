import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* ============== emailJS code ============== */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uioj5sp",
        "template_yi3f1wf",
        form.current,
        "DA6CSLoSP_RQHeO8t"
      )
      .then(
        (result) => {
          /* ============== react toast ============== */
          toast.info("Message Sent!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log("success");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("fail");
        }
      );
  };

  return (
    <div className="py-16 flex flex-col justify-center align-middle">
      <div className="my-3 header self-center">Contact Us!</div>
      <p className="my-2 self-center">
        Ready for your next adventure? Contact us to plan your dream getaway. We
        are here to assist with all your travel needs and inquiries
      </p>
      <form
        className=" my-2 w-[65%] flex flex-col justify-center align-middle self-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className=" mb-4  flex flex-col">
          <div className="pb-4 w-[100%] grid gap-x-4  grid-cols-2 self-center">
            <textarea
              type="text"
              placeholder="Your Name*"
              name="from_name"
              rows={1}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 bg-[#E8EDF5] resize-none rounded-lg text-[#6CA49F] focus:outline-none focus:border-cyan-400 focus:border-[2px]"
            />
            <textarea
              type="email"
              placeholder="Your Email*"
              name="from_email"
              rows={1}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 bg-[#E8EDF5] resize-none rounded-lg  text-[#6CA49F] focus:outline-none focus:border-cyan-400 focus:border-[2px]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message*"
            rows={7}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" p-4 w-[100%] self-center bg-[#E8EDF5] resize-none rounded-lg text-[#6CA49F] focus:outline-none focus:border-cyan-400 focus:border-[2px]"
          />
        </div>
        <input
          type="submit"
          value="Send Message"
          className="btn bg-cyan-400 text-gray-100 border-cyan-400 self-center"
        />
      </form>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Contact;
