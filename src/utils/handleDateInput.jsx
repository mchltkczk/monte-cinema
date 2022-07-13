import { StyledErrorMessage } from "../components/Form/ErrorMessage/ErrorMessage.Styled";

export const handleDateInput = (e, setFormData, formData) => {
  if (e.target.name === "dateOfBirth") {
    if (e.target.value.length === 2 || e.target.value.length === 7) {
      return setFormData({ ...formData, dateOfBirth: `${e.target.value} / ` });
    }
  }
};

export const isUserAdult = (dateOfBirth, setFormData, formData) => {
  const today = new Date();
  const convertedDateOfBirth = new Date(
    dateOfBirth.split(" ").join("").split("/").reverse().join(",")
  );
  let age = today.getFullYear() - convertedDateOfBirth.getFullYear();
  const m = today.getMonth() - convertedDateOfBirth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < convertedDateOfBirth.getDate())) {
    age--;
  }
  age >= 18
    ? setFormData({ ...formData, isAdult: true })
    : setFormData({ ...formData, isAdult: false });
};

export const handleDateError = (isAdult, setErrorMessage, errorMessage) => {
  if (isAdult === false) {
    setErrorMessage({ ...errorMessage, isAdult: false });
  } else {
    setErrorMessage({ ...errorMessage, isAdult: true });
  }
};
