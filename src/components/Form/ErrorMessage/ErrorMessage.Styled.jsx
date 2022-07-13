import styled from "styled-components";

export const StyledErrorMessage = styled.p`
  /* color: ${({ showError }) => (showError ? "#EC1115" : "#27AE60")}; */
  /* color: ${({ isUserWriting }) =>
    isUserWriting > 0
      ? ({ showError }) =>
          showError === false && errorMessage ? "#EC1115" : "#27AE60"
      : "#000"}; */
  .error {
    color: #ec1115;
  }
  .no-error {
    color: #27ae60;
  }
`;
