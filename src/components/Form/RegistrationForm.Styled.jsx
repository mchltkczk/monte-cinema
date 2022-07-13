import styled from "styled-components";

export const StyledRegistration = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;

  .form-error--show {
    visibility: visible;
    color: red;
  }

  .form-error--none {
    visibility: hidden;
  }

  .error-active {
    color: red;
  }
  .error-inactive {
    color: green;
  }
  .error-start {
    color: black;
  }
`;
