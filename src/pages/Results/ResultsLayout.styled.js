import styled from "styled-components";

export const StyledResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-weight: 700;
    font-size: 34px;
    margin: 78px 0 90px 0;
  }

  @media (max-width: 391px) {
    > p {
      font-size: 16px;
      margin: 31px 0 33px 0;
    }
  }
`;
