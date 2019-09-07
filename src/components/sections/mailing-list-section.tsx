import React from "react";
import styled from "styled-components";
import Section from "../section";
import Input from "../input";
import Button from "../button";
import NetlifyForm from "react-netlify-form";

const Feedback = styled.p<{ color?: string }>`
  color: ${p => p.color || "#efefef"};
  font-family: Alice;
  font-size: 19px;
`;

const MailingListSection = () => {
  return (
    <Section title="Join our Mailing List" bg="#111" titleColor="white">
      <NetlifyForm name="newsletter">
        {({ loading, error, success }) => {
          if (success) {
            const allInputs = document.querySelectorAll("input, textarea");
            allInputs.forEach((el: HTMLInputElement | HTMLTextAreaElement) => {
              el.value = "";
            });
          }

          return (
            <div
              css={`
                text-align: center;
              `}
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div
                css={`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                `}
              >
                {success && (
                  <Feedback color="#05e642">You have been signed up!</Feedback>
                )}
                {error && (
                  <Feedback color="tomato">
                    Oops...something went wrong. Please try again.
                  </Feedback>
                )}
                {!success &&
                  (!error && (
                    <Feedback>
                      Stay up to date about our latest products and promotions.
                    </Feedback>
                  ))}

                <Input type="email" name="email" placeholder="Email Address" />
                <Button type="submit" disabled={loading}>
                  Join!
                </Button>
              </div>
            </div>
          );
        }}
      </NetlifyForm>
    </Section>
  );
};

export default MailingListSection;
