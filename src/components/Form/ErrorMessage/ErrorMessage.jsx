import { StyledErrorMessage } from "./ErrorMessage.Styled";

export const ErrorMessage = ({
  errorMessage,
  dateOfBirth,
  isError,
  isAdult,
}) => {
  return (
    <p
      style={
        dateOfBirth.length < 13
          ? { color: "black" }
          : isAdult
          ? { color: "red" }
          : { color: "green" }
      }
      // isUserWriting={isUserWriting}
    >
      {errorMessage}
    </p>
  );
};
