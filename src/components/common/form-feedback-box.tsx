import styled from "styled-components";

const FormFeedbackBox = styled.p<{ type?: string }>`
  color: ${props => (props.type === "success" ? "#333" : "tomato")};
  font-family: Alice;
  border-radius: 12px;
  background: #f5f5f5;
  font-size: 20px;
  padding: 15px;
  margin: 10px;
`;

export { FormFeedbackBox };
