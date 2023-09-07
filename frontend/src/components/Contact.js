import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    success: null,
    message: "",
  });

  const sendEmail = (e) => { 
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const userMessage = formData.get("message");

    const emailParams = {
      to_name: "Viharika",
      from_name: userName,
      message: userMessage,
      from_mail: userEmail,
    };

    emailjs
      .send(
        "service_kfeii4c",
        "template_0ym538b",
        emailParams,
        "BelXSijvNt-iBPDRw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setStatus({ success: true, message: "Email sent successfully!" });
          setFormDetails({
            fullName: "",
            email: "",
            message: "",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus({ success: false, message: "Email sending failed." });
        }
      );
  };

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const buttonText = "Submit";

  return (
    <section className="contact" id="connect">
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          value={formDetails.fullName}
          placeholder="Full Name"
          onChange={(e) => onFormUpdate("fullName", e.target.value)}
        />
        <input
          type="email"
          name="user_email"
          value={formDetails.email}
          placeholder="Email Address"
          onChange={(e) => onFormUpdate("email", e.target.value)}
        />
        <textarea
          rows="6"
          name="message"
          value={formDetails.message}
          placeholder="Message"
          onChange={(e) => onFormUpdate("message", e.target.value)}
        ></textarea>
        <button type="submit">
          <span>{buttonText}</span>
        </button>
        {status.message && (
          <p className={status.success === false ? "danger" : "success"}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};
