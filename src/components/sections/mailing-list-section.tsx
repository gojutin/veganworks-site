import React from "react";
import styled from "styled-components";
import Section from "../section";
import Input from "../input";
import Button from "../button";
import NetlifyForm from "react-netlify-form";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Feedback = styled.p<{ color?: string }>`
  color: #333;
  font-family: Alice;
  font-size: 20px;
`;

const MailingListSection = () => {
  const clearFields = () => {
    const allInputs = document.querySelectorAll("input, textarea");
    allInputs.forEach((el: HTMLInputElement | HTMLTextAreaElement) => {
      el.value = ""; // eslint-disable-line
    });
  };
  return (
    <>
      <Section title="Join our mailing list" titleColor="#333" bg={"#e6f7ff"}>
        <NetlifyForm name="newsletter">
          {/* eslint-disable-next-line */}
          {({ loading, error, success }) => {
            if (success) {
              clearFields();
            }

            const maybeRenderSuccess = success && (
              <Feedback color="#05e642">You have been signed up!</Feedback>
            );

            const maybeRenderError = error && (
              <Feedback color="tomato">
                Oops...something went wrong. Please try again.
              </Feedback>
            );

            const maybeRenderFeedback =
              !success &&
              (!error && (
                <Feedback>
                  Stay up to date about our latest products and promotions.
                </Feedback>
              ));

            return (
              <div style={{ textAlign: "center" }}>
                <input type="hidden" name="form-name" value="newsletter" />
                <FormWrapper>
                  {maybeRenderSuccess}
                  {maybeRenderError}
                  {maybeRenderFeedback}
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <Button type="submit" disabled={loading}>
                    Submit
                  </Button>
                </FormWrapper>
              </div>
            );
          }}
        </NetlifyForm>
      </Section>
    </>
  );
};

export { MailingListSection };
