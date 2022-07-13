import styled from "styled-components";

export const StyledPageTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgb(0, 0, 0);
  &:last-child {
    color: gray;
  }
  h1 {
    line-height: 0.9;

    @media (min-width: 1024px) {
      text-align: left;
      font-size: 80px;
    }
  }
`;
