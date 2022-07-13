import { StyledButton } from "./Button.Styled";

export const Button = ({ children, color, onClick, type, formStepCounter }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      color={color}
      formStepCounter={formStepCounter}>
      {children}
    </StyledButton>
  );
};
