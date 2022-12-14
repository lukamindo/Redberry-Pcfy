import styled from "styled-components";

export const StyledSpecRowWrapper = styled.div`
  display: flex;
  font-size: 22px;
  text-align: left;
  margin-bottom: 20px;
  @media (max-width: 391px) {
    margin-bottom: 15px;
    font-size: 14px;
  }
`;

export const StyledRowTitle = styled.p`
  color: #2e2e2e;
  font-weight: 500;
  width: 50%;
  min-width: 300px;

  @media (max-width: 391px) {
    min-width: auto;
  }
`;

export const StyledRowValue = styled.p`
  color: #797979;
  font-weight: 400;
  width: 50%;
  @media (max-width: 391px) {
    word-break: break-all;
  }
`;
