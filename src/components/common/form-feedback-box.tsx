import styled from "styled-components";

const FormFeedbackBox = styled.p<{ type?: string }>`
  color: ${props => (props.type === "success" ? props.theme.colors.secondary2 : "tomato")};
  font-family: Alice;
  border-radius: 12px;
  background: ${props => props.theme.colors.secondary7};
  font-size: 20px;
  padding: 15px;
  margin: 10px;
`;

export { FormFeedbackBox };
