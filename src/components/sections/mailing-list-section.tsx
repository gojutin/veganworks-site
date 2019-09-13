import React from "react";
import styled from "styled-components";
import Section from "../section";
import Input from "../input";
import Button from "../button";
import NetlifyForm from "react-netlify-form";

const Feedback = styled.p<{ color?: string }>`
  color: #333;
  font-family: Alice;
  font-size: 20px;
`;

const MailingListSection = () => {
  return (
    <>
      <Section
        title="Join our mailing list"
        titleColor="#333"
        bg={`linear-gradient(
      to bottom,
      white,
      #bdfff4);`}
      >
        <NetlifyForm name="newsletter">
          {({ loading, error, success }) => {
            if (success) {
              const allInputs = document.querySelectorAll("input, textarea");
              allInputs.forEach(
                (el: HTMLInputElement | HTMLTextAreaElement) => {
                  el.value = ""; // eslint-disable-line
                }
              );
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
                    <Feedback color="#05e642">
                      You have been signed up!
                    </Feedback>
                  )}
                  {error && (
                    <Feedback color="tomato">
                      Oops...something went wrong. Please try again.
                    </Feedback>
                  )}
                  {!success &&
                    (!error && (
                      <Feedback>
                        Stay up to date about our latest products and
                        promotions.
                      </Feedback>
                    ))}

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <Button type="submit" disabled={loading}>
                    Join!
                  </Button>
                </div>
              </div>
            );
          }}
        </NetlifyForm>
      </Section>
      <div
        css={`
          margin-bottom: -5px;

          background: #bdfff4;
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00CBA9"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,74.7C480,96,600,160,720,170.7C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default MailingListSection;
