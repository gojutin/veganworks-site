import React, { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";

// Components
import { Section } from "../common/section";
import { Input } from "../common/input";
import { Button } from "../common/button";
import { FormFeedbackBox } from "../common/form-feedback-box";

const FormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const MailingListSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("loading");
    const res = await addToMailchimp(email);

    if (res.result === "success") {
      setEmail("");
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleChange = e => {
    setEmail(e.currentTarget.value);
  };

  const getFeedback = (): string => {
    switch (status) {
      case "success":
        return "Got it. Thanks for subscribing!";
      case "error":
        return "Oops...something went wrong. Please try again.";
      default:
        return "";
    }
  };

  const maybeRenderFeedback = status && (
    <FormFeedbackBox type={status}>{getFeedback()}</FormFeedbackBox>
  );

  return (
    <Section title="Join Our Mailing List" titleColor="#333" bg={"white"}>
      <FormWrapper>
        <h3>Stay up to date with our new products and promotions.</h3>
        <br />
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            required={true}
            aria-label="Email Address"
            placeholder="Your Email Address"
            value={email}
            onChange={handleChange}
            style={{ maxWidth: "350px" }}
          />
          <Button type="submit">Subscribe!</Button>
        </Form>
        {maybeRenderFeedback}
      </FormWrapper>
    </Section>
  );
};

export { MailingListSection };
