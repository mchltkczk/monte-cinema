import { StyledPageTitle } from "./PageTitle.Styled";

export const PageTitle = ({ row1, row2 }) => {
  return (
    <StyledPageTitle>
      <h1>{row1}</h1>
      <h1 style={{ color: "gray" }}>{row2}</h1>
    </StyledPageTitle>
  );
};
