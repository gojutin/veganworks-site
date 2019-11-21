import React from "react";
import styled from "styled-components";
import { useTheme } from "../../styles";

// Components
import { Input } from "./input";
import { TextArea } from "./textarea";
import { NetlifyForm } from "./netlify-form";
import { Link } from "gatsby";

const Container = styled.div`
  text-align: center;
  padding: 15px;
  p {
    font-family: Alice, Helvetica, sans-serif;
    font-size: 20px;
    color: white;
  }
`;

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactForm = () => {
  const { secondary4 } = useTheme().colors;
  return (
    <Container>
      <p>
        Please fill out the form below or email us at{" "}
        <span
          // href="mailto: info@veganworks.com?subject = Hello VeganWorks!&body = Message"
          style={{ color: secondary4, userSelect: "all" }}
        >
          info@veganworks.com
        </span>
      </p>
      <br />
      <NetlifyForm
        name="Contact"
        successMessage="Thanks for reaching out. We will get back to you very soon :)"
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
      <Link style={{ color: "white" }} to="/">
        Go Back
      </Link>
    </Container>
  );
};

export { ContactForm };
