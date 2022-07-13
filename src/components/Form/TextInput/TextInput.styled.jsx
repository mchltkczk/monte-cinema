import styled from "styled-components";
import eyeIcon from "../../../assets/eye.svg";

export const StyledTextInput = styled.input`
  background-color: rgb(247, 247, 247);
  border: none;
  outline: ${({ error, name }) =>
    error === true &&
    Object.keys(error).some((err) => err === name && error[err] === true)
      ? "2px solid red"
      : "none"};
  border-radius: 8px;
  font-size: 18px;
  font-weight: 400;
  color: rgb(133, 134, 141);
  padding: 15px 45px 15px 15px;
  width: 100%;

  &:hover {
    background-color: rgb(229, 229, 229);
  }

  &:focus {
    background-color: rgba(47, 128, 237, 0.1);
    outline: 2px solid rgb(47, 128, 237);
  }
  .error-show {
    outline: 2px solid red;
  }
  .error-hide {
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  font-family: "Roboto Mono", monospace;
  color: rgb(244, 112, 115);
  font-weight: 700;
  width: 100%;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;
