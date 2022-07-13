import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  /* margin: auto; */
  h1 {
    font-family: "Eczar", serif;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
    transform: translateY(-50%, -50%);
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
export const StyledRegistrationSummary = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 600px;
    box-shadow: ${({ formStepCounter }) =>
      formStepCounter === 3 ? "none" : "0px 4px 22px rgba(52, 53, 65, 0.15)"};
    padding: ${({ formStepCounter }) => (formStepCounter === 3 ? "0" : "60px")};
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 10px;
  }
`;
