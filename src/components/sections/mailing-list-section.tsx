import React from "react";
import styled from "styled-components";
import Section from "../section";
import Input from "../input";
import Button from "../button";
import NetlifyForm from "../netlify-form";

const Form = styled.form`
  text-align: center;
`;

const MailingListSection = () => {
  return (
    <Section title="Join our Mailing List" bg="#111" titleColor="white">
      <NetlifyForm
        formName="newsletter"
        successMessage="You have been successfully signed up!"
      >
        <p
          css={`
            color: white;
            font-family: Alice;
          `}
        >
          Stay up to date about our latest products and promotions.
        </p>
        <Input type="email" name="email" placeholder="Email Address" />
        <Button type="submit">Join!</Button>
      </NetlifyForm>
    </Section>
  );
};

export default MailingListSection;
