import React from "react";
import styled from "styled-components";

const Form = styled.form`
  input,
  textarea,
  button {
    width: 100%;
    max-width: 500px;
    border: 2px solid #333;
    border-color: #333;
    border-radius: 8px;
    font-size: 16px;
    display: block;
    outline: none;
    margin: 8px 0px;
    padding: 10px 5px;
    transition: border-color 0.25s;
    :focus {
      border-color: blue;
    }
  }
`;

const ContactForm: React.FC = () => {
  return (
    <Form action="">
      <h3>Contact Us!</h3>
      <label htmlFor="name">Your Name</label>
      <input id="name" name="name" type="text" required />
      <label htmlFor="email">Your Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="message">Your Message</label>
      <textarea id="message" name="message" rows={12} required />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default ContactForm;
