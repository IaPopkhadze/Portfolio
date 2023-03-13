import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact_content">
        <h1 className="main_title">Contact Me</h1>
        <div
          className="line"
          style={{ width: "100px", marginBottom: "0.5rem" }}
        ></div>
        <div className="line" style={{ width: "50px" }}></div>
        <div className="contact_boxes">
          <div className="each_box">
            <BsTelephoneFill className="icon" />
            <p style={{ fontWeight: "bold" }}>Call Me</p>
            <p>+995 571 15 30 74</p>
          </div>
          <div className="each_box">
            <MdLocationPin className="icon" />
            <p style={{ fontWeight: "bold" }}>Location</p>
            <p>Isani/Salosi Ave 1</p>
          </div>
          <div className="each_box">
            <IoIosMail className="icon" />
            <p style={{ fontWeight: "bold" }}>Gmail</p>
            <p>iafofkhadze@gmail.com</p>
          </div>
        </div>
        <form>
          <div className="name_email">
            <div className="input_container">
              <input type="text" name="name" required placeholder="Name*" />
            </div>
            <div className="input_container">
              <input required placeholder="Email*" type="text" />
            </div>
          </div>
          <div style={{ marginTop: "2rem" }} className="input_container">
            <input required placeholder="Subject*" type="text" />
          </div>
          <div
            style={{ marginTop: "2rem", height: "200px" }}
            className="input_container"
          >
            <textarea required placeholder="Message* " type="text" />
          </div>
          <button className="send_btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
