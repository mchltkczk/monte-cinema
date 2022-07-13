import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 64px;
  background-color: ${({ color }) => (color === "white" ? "white" : "#ec1115")};
  color: ${({ color }) => (color === "white" ? "#ec1115" : "white")};
  /* color: #fff; */
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 18px;
  padding: 18px 50px;
  border: none;
  width: ${({ formStepCounter }) => (formStepCounter === 3 ? "auto" : "100%")}
    100%;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) =>
      color === "white" ? "white" : "#a60c0e"};
  }
  &:active {
    outline: ${({ color }) =>
      color === "white" ? "none" : "5px solid #f47073"};
  }
`;
