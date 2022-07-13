import { StyledCheckbox, StyledCheckboxWrapper } from "./Checkbox.Styled";

export const Checkbox = ({ label, labelText, type, onChange, name }) => {
  return (
    <StyledCheckboxWrapper>
      <StyledCheckbox type={type} onChange={onChange} name={name} />
      <label htmlFor={label}>{labelText}</label>
    </StyledCheckboxWrapper>
  );
};
