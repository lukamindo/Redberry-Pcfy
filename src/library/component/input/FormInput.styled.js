import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1.8px solid #8ac0e2;
  border-radius: 8px;
  width: 375px;
  height: 20px;
  padding: 20px 16px;
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  margin: 8px 0px;

  &:focus {
    outline: none;
  }
`;
export const StyledInputLabel = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
`;
export const StyledInputMessage = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #2e2e2e;
`;
export const StyledInputWrapper = styled.div`
  padding: 8px 24px;
`;
