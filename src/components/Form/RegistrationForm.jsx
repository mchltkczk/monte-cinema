import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import { StyledRegistration } from "./RegistrationForm.Styled";
import { TextInput } from "./TextInput/TextInput";
import { useState, useEffect } from "react";
import { Checkbox } from "./Checkbox/Checkbox";
import { handleDateInput } from "../../utils/handleDateInput";
import { isUserAdult } from "../../utils/handleDateInput";
import {
  passwordErrorMessages,
  handleErrors,
  passwordLength,
  passwordHasLetter,
  passwordHasDigit,
} from "../../utils/formErrorHandler";

export const RegistrationForm = ({
  formStepCounter,
  setDataToSubmit,
  setFormStepCounter,
  error,
  setError,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    isPolicyAccepted: false,
    isAdult: null,
  });
  const [errorMessage, setErrorMessage] = useState({
    isNotLongEnough: null,
    hasNoLetters: null,
    hasNoDigits: null,
    isAdult: null,
  });

  const { isNotLongEnough, hasNoLetters, hasNoDigits } = errorMessage;
  const {
    email,
    password,
    firstName,
    lastName,
    dateOfBirth,
    isPolicyAccepted,
    isAdult,
  } = formData;

  const handleFormDataChange = (e) => {
    e.target.type === "checkbox"
      ? setFormData({
          ...formData,
          [e.target.name]: e.target.checked,
        })
      : setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });

    if (e.target.name === "dateOfBirth") {
      if (e.target.value.length === 2 || e.target.value.length === 7) {
        return setFormData({
          ...formData,
          dateOfBirth: `${e.target.value} / `,
        });
      }
      if (e.target.value.length > 14) {
        return setFormData({
          ...formData,
          dateOfBirth: e.target.value.substring(0, 14),
        });
      }
    }
  };

  const handleInputErrors = (e) => {
    handleErrors(
      e,
      setError,
      error,
      isNotLongEnough,
      hasNoLetters,
      hasNoDigits
    );
  };

  useEffect(() => {
    let errorListener = document.querySelector(".error-active");
    errorListener
      ? setError({ ...error, password: true })
      : setError({ ...error, password: false });

    setDataToSubmit(formData);
  }, [password, formStepCounter, formData]);
  //
  return (
    <StyledRegistration>
      {formStepCounter === 1 && (
        <>
          <TextInput
            type='email'
            placeholder={
              window.screen.width < 1024
                ? "Something ending with..."
                : "Something ending with monterail.com"
            }
            label='EMAIL'
            name='email'
            password='no'
            onChange={handleFormDataChange}
            onBlur={handleInputErrors}
            error={error}
          />
          <p className={error.email ? "form-error--show" : "form-error--none"}>
            Email address should end with @monterail.com
          </p>
          <TextInput
            type='password'
            placeholder='Enter your password'
            label='PASSWORD'
            name='password'
            password='passsword'
            onChange={handleFormDataChange}
            value={password}
            onBlur={handleInputErrors}
            error={error}
          />
          {passwordErrorMessages.map((error, i) => (
            <div
              key={i}
              className={
                password.length != 0
                  ? error === "At least 8 characters"
                    ? passwordLength(password)
                    : null || error === "At least one letter"
                    ? passwordHasLetter(password)
                    : null || error === "At least one digit"
                    ? passwordHasDigit(password)
                    : null
                  : "error-start"
              }>
              {error}
            </div>
          ))}
        </>
      )}
      {/* step 2 */}
      {formStepCounter === 2 && (
        <>
          <TextInput
            type='text'
            placeholder='e.g. Jessica'
            label='FIRST NAME'
            name='firstName'
            password='no'
            onChange={handleFormDataChange}
            onBlur={handleInputErrors}
            error={error}
          />
          <TextInput
            type='text'
            placeholder='e.g. Walton'
            label='LAST NAME'
            name='lastName'
            password='no'
            onChange={handleFormDataChange}
            onBlur={handleInputErrors}
          />
          <TextInput
            type='text'
            placeholder='DD / MM / YYYY'
            label='DATE OF BIRTH'
            name='dateOfBirth'
            password='no'
            onChange={handleFormDataChange}
            value={dateOfBirth}
            onBlur={() => isUserAdult(dateOfBirth, setFormData, formData)}
          />
          <div
            className={
              isAdult === null
                ? "error-start"
                : isAdult === false
                ? "error-active"
                : "error-inactive"
            }>
            You should be minimum 18 years old
          </div>
          {/* <ErrorMessage
            isError={isAdult}
            dateOfBirth={dateOfBirth}
            errorMessage='You should be minimum 18 years old'
          /> */}
          <Checkbox
            label='privacyPolicy'
            type='checkbox'
            name='isPolicyAccepted'
            labelText={[
              "I accept ",
              <a
                key={1}
                href='https://www.monterail.com/privacy-policy'
                target='_blank'>
                Privacy Policy
              </a>,
            ]}
            onChange={handleFormDataChange}
          />
        </>
      )}
    </StyledRegistration>
  );
};
