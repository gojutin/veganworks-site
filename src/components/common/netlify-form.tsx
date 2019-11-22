import React from "react";
import styled from "styled-components";
import NetlifyFormComponent from "react-netlify-form";
import { Button } from "./button";
import { FormFeedbackBox } from "./form-feedback-box";

const FormWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

type NetlifyFormProps = {
  name: string;
  successMessage: string;
};
const NetlifyForm: React.FC<NetlifyFormProps> = ({
  name,
  successMessage,
  children,
}) => {
  const clearFields = () => {
    const allInputs = document.querySelectorAll("input, textarea");
    allInputs.forEach((el: HTMLInputElement | HTMLTextAreaElement) => {
      el.value = ""; // eslint-disable-line
    });
  };

  return (
    <NetlifyFormComponent name={name}>
      {/* eslint-disable-next-line */}
      {({ loading, error, success }) => {
        if (success) {
          clearFields();
        }

        const maybeRenderSuccess = success && (
          <FormFeedbackBox type="success">{successMessage}</FormFeedbackBox>
        );

        const maybeRenderError = error && (
          <FormFeedbackBox type="error">
            Oops...something went wrong. Please try again.
          </FormFeedbackBox>
        );

        return (
          <div>
            <input type="hidden" name="form-name" value={name} />
            <FormWrapper>
              {children}
              <div>
                <Button disabled={loading} type="submit">
                  Submit
                </Button>
              </div>

              {maybeRenderSuccess}
              {maybeRenderError}
            </FormWrapper>
          </div>
        );
      }}
    </NetlifyFormComponent>
  );
};

export { NetlifyForm };
