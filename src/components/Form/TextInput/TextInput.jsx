import {
  EyeIcon,
  StyledInputWrapper,
  StyledLabel,
  StyledTextInput,
} from "./TextInput.styled";
import eyeIcon from "../../../assets/eye.svg";
import { useState, useEffect } from "react";

export const TextInput = ({
  type,
  placeholder,
  label,
  password,
  onChange,
  name,
  value,
  handleErrors,
  onBlur,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleShowPassword = (e) => {
    setIsPasswordVisible(!isPasswordVisible);
    inputType === "password" ? setInputType("text") : setInputType("password");
  };

  useEffect(() => {}, [inputType]);
  return (
    <>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInputWrapper>
        <StyledTextInput
          type={type === "password" ? inputType : type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          handleErrors={handleErrors}
          onBlur={onBlur}
          error={error}
          style={
            error &&
            Object.keys(error).some(
              (err) => err === name && error[err] === true
            )
              ? { outline: "2px solid red" }
              : { outline: "none" }
          }
        />
        {type === "password" ? (
          <EyeIcon src={eyeIcon} onClick={handleShowPassword} />
        ) : null}
      </StyledInputWrapper>
    </>
  );
};
