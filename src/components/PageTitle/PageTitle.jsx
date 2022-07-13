import { StyledPageTitle } from "./PageTitle.Styled";

export const PageTitle = ({ row1, row2, formStepCounter }) => {
  return (
    <StyledPageTitle>
      <h1
        style={
          formStepCounter === 3
            ? { textAlign: "center" }
            : { textAlign: "left" }
        }>
        {row1}
      </h1>
      <h1 style={{ color: "gray" }}>{row2}</h1>
    </StyledPageTitle>
  );
};
