import React from "react";
import styled from "styled-components";

// Components
import { Input } from "./input";
import { TextArea } from "./textarea";
import { NetlifyForm } from "./netlify-form";
import { Link } from "./link";

const Container = styled.div`
  text-align: center;
  padding: 5px;
  p {
    font-family: Alice, Helvetica, sans-serif;
    font-size: 20px;
  }
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = () => {
  return (
    <Container>
      <p style={{ color: "white" }}>
        Please fill out the form below or email us at{" "}
        <Link
          href="mailto:info@veganworks.com?subject = Hello VeganWorks!"
          style={{ display: "inline", userSelect: "all" }}
        >
          info@veganworks.com
        </Link>
      </p>
      <br />
      <NetlifyForm
        name="Contact"
        successMessage="Thanks for reaching out. We will get back to you soon!"
      >
        <FieldsWrapper>
          <Input name="name" placeholder="Your Name" required={true} />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            required={true}
          />

          <TextArea name="message" placeholder="Your Message" required={true} />
        </FieldsWrapper>
      </NetlifyForm>
    </Container>
  );
};

export { ContactForm };
