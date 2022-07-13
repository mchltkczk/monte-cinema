import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { TextInput } from "../components/Form/TextInput/TextInput";
import {
  StyledButtonsWrapper,
  StyledFormWrapper,
  StyledHeader,
  StyledPageWrapper,
  StyledRegistrationSummary,
} from "./Register.Styled";
import logo from "../assets/logo.svg";
import { RegistrationForm } from "../components/Form/RegistrationForm";
import { PageTitle } from "../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { isUserAdult } from "../utils/handleDateInput";

export const Register = () => {
  const [formStepCounter, setFormStepCounter] = useState(1);
  const [dataToSubmit, setDataToSubmit] = useState({});
  const [error, setError] = useState({
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    isPolicyAccepted: null,
  });

  let navigate = useNavigate();

  const handleFormNextStep = () => {
    if (formStepCounter === 3) {
      //submit formData to some database and register user
    }
    (formStepCounter === 1 &&
      error.email != true &&
      error.password != true &&
      dataToSubmit.email.length > 0 &&
      dataToSubmit.password.length > 7) ||
    (formStepCounter === 2 &&
      error != true &&
      dataToSubmit.firstName.length > 0 &&
      dataToSubmit.lastName.length > 0 &&
      dataToSubmit.dateOfBirth.length > 0 &&
      dataToSubmit.isPolicyAccepted === true &&
      dataToSubmit.isAdult === true)
      ? formStepCounter < 3
        ? setFormStepCounter(formStepCounter + 1)
        : navigate("/")
      : console.log(formStepCounter);
    return;
  };

  const handleGoToLoginPage = () => {
    setFormStepCounter(1);
    navigate("/");
  };

  const formReset = (e) => {};

  useEffect(() => {}, [formStepCounter]);
  return (
    <>
      <StyledPageWrapper>
        <main>
          <PageTitle
            row1={
              (formStepCounter === 1 && "Ahoy you!") ||
              (formStepCounter === 2 && "Great!") ||
              (formStepCounter === 3 && `Good job ${dataToSubmit.firstName}!`)
            }
            row2={
              (formStepCounter === 1 && "Care to register?") ||
              (formStepCounter === 2 && "Now your name")
            }
          />
          {formStepCounter === 3 && (
            <StyledRegistrationSummary>
              We have sent you an email to <b>{dataToSubmit.email}.</b> Make
              sure to click the link from the message to activate your account.
            </StyledRegistrationSummary>
          )}
          <StyledFormWrapper formStepCounter={formStepCounter}>
            <RegistrationForm
              setFormStepCounter={setFormStepCounter}
              formStepCounter={formStepCounter}
              setDataToSubmit={setDataToSubmit}
              error={error}
              setError={setError}
            />
            <StyledButtonsWrapper>
              <Button
                type='submit'
                onClick={() =>
                  formStepCounter < 3
                    ? handleFormNextStep()
                    : setFormStepCounter(1)
                }
                formStepCounter={formStepCounter}>
                {(formStepCounter === 1 && "Next step") ||
                  (formStepCounter === 2 && "Register") ||
                  (formStepCounter === 3 && "Go to homepage")}
              </Button>
              {formStepCounter <= 2 && (
                <Button onClick={handleGoToLoginPage} color='white'>
                  Login instead
                </Button>
              )}
            </StyledButtonsWrapper>
          </StyledFormWrapper>
        </main>
      </StyledPageWrapper>
    </>
  );
};
