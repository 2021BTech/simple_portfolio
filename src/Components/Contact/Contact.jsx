import React from "react";
// icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2> Contact Me </h2>
      <p>
        Feel free to reach out to me! Whether you have questions, want to
        collaborate, or just want to say hello, I'd love to hear from you. You
        can contact me via email at{" "}
        <a href="mailto:becondaniel@outlook.com"> becondaniel@outlook.com</a> or
        connect with me on social media using the links below.
      </p>
      <div className="icon">
        <FaFacebook className="icon-fa i" />
        <FaTwitter className="icon-x i" />
        <FaInstagramSquare className="icon-in i" />
        <FaYoutube className="icon-tu i" />
      </div>
    </section>
  );
};

export default Contact;
