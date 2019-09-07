import React from "react";
import NetlifyForm from "react-netlify-form";
import Button from "./button";

interface NetlifyFormProps {
  formName?: string;
  successMessage?: string;
}

const NetlifyFormComponent: React.FC<NetlifyFormProps> = ({
  formName = "Contact Form",
  children,
  successMessage = "Got it, thanks!",
}) => {
  return (
    <NetlifyForm name={formName}>
      {({ loading, error, success }) => {
        if (success) {
          const allInputs = document.querySelectorAll("input, textarea");
          allInputs.forEach((el: HTMLInputElement | HTMLTextAreaElement) => {
            el.value = "";
          });
        }

        return (
          <div>
            <input type="hidden" name="form-name" value={formName} />
            {children}

            <Button type="submit" disabled={loading}>
              Submit
            </Button>

            {success && successMessage}
            {error && "Ooops"}
          </div>
        );
      }}
    </NetlifyForm>
  );
};

export default NetlifyFormComponent;
