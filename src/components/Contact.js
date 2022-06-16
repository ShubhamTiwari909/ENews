import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Pulse from 'react-reveal/Pulse';
import './Waaducss.css'

const Contact = () => {
  const [display, setDiplay] = useState(false);
  return (
    <div className='grid place-content-center pt-10 pb-20'>
      <div className=" w-blue-claymorphism">
        <Pulse>
          <h1 className="text-2xl py-3 text-center">Home News</h1>
          <h1 className="text-xl py-3 postTitle">SOCIAL MEDIA LINKS </h1>

          <div
            style={{ display: display ? "flex" : "none" }}
            className="flex justify-center align-middle my-4 p-2"
          >
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a className="text-xl linkText" href="https://wa.me/+91 8266943516">
                <AiOutlineWhatsApp color="crimson" />
              </a>
            </p>
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a
                className="text-xl linkText"
                href="mailto:shubhmtiwri00@gmail.com"
              >
                <MdOutgoingMail color="crimson" />
              </a>
            </p>
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a
                className="text-xl linkText"
                href="https://www.linkedin.com/in/shubham-tiwari-b7544b193/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin color="crimson" className="contactIcons" />
              </a>
            </p>
            <p className="flex justify-center align-middle my-2 p-2 space-x-5">
              <a
                className="text-xl linkText"
                href="https://www.instagram.com/s_h.u_b.h_a.m_2k99/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram color="crimson" className="contactIcons" />
              </a>
            </p>
          </div>
          <div className="grid place-content-center">
            <button
              onClick={() => setDiplay(!display)}
              className="bg-slate-900 ring-2 ring-red-200 bg-none text-slate-200 rounded-md px-4 py-2 my-4"
            >
              Contacts
            </button>
          </div>
        </Pulse>
      </div>
    </div>
  );
};

export default Contact;
