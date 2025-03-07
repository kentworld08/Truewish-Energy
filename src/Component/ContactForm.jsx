import React, { useState } from "react";
import "@/App.css";

const Form = ({ includeNumber }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <form
      className={includeNumber ? "form-style-two" : "form-style-one"}
      onSubmit={handleSubmit}
    >
      {includeNumber ? (
        <div className="display-flex">
          <input
            type="text"
            name="firstName"
            placeholder="ENTER FIRST NAME"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="ENTER LAST NAME"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <input
          type="text"
          name="firstName"
          placeholder="YOUR NAME (REQUIRED)"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      )}

      {includeNumber ? (
        <div className="display-flex">
          <input
            type="email"
            name="email"
            placeholder="ENTER YOUR EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="ENTER PHONE NUMBER"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <input
          type="email"
          name="email"
          placeholder="YOUR EMAIL (REQUIRED)"
          value={formData.email}
          onChange={handleChange}
          required
        />
      )}

      <textarea
        name="message"
        placeholder="YOUR MESSAGE"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;

{
  /* <Form includeNumber={true} /> */
}
