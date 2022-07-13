export const passwordErrorMessages = [
  "At least 8 characters",
  "At least one letter",
  "At least one digit",
];

export const handleErrors = (
  e,
  setError,
  error,
  isNotLongEnough,
  hasNoLetters,
  hasNoDigits
) => {
  if (e.target.name === "email") {
    // !/\S+@\S+\.\S+/.test(e.target.value) &&
    !e.target.value.endsWith("@monterail.com")
      ? setError({ ...error, email: true })
      : setError({ ...error, email: false });
  }
  if (e.target.name === "password") {
    isNotLongEnough || hasNoLetters || hasNoDigits
      ? setError({ ...error, password: true })
      : setError({ ...error, password: false });
  }
  if (e.target.name === "firstName") {
    e.target.name.length < 1
      ? setError({ ...error, firstName: true })
      : setError({ ...error, firstName: false });
  }
  if (e.target.name === "lastName") {
    e.target.name.length < 1
      ? setError({ ...error, firstName: true })
      : setError({ ...error, firstName: false });
  }
  if (e.target.name === "dateOfBirth") {
    e.target.name.length < 14
      ? setError({ ...error, dateOfBirth: true })
      : setError({ ...error, dateOfBirth: false });
  }
  if (e.target.name === "isPolicyAccepted") {
    !e.target.checked
      ? setError({ ...error, isPolicyAccepted: true })
      : setError({ ...error, isPolicyAccepted: false });
  }
};

export const passwordLength = (password) => {
  //password
  if (password.length < 8) {
    return "error-active";
  } else {
    return "error-inactive";
  }
};
export const passwordHasLetter = (password) => {
  const hasAtLeastOneLetter = /[a-zA-Z]/;
  if (hasAtLeastOneLetter.test(password)) {
    return "error-inactive";
  } else {
    return "error-active";
  }
};

export const passwordHasDigit = (password) => {
  const hasAtLeastOneDigit = /[0-9]/;
  if (hasAtLeastOneDigit.test(password)) {
    return "error-inactive";
  } else {
    return "error-active";
  }
};
