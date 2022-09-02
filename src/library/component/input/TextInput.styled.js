import styled from "styled-components";

export const StyledInput = styled.input``;
export const StyledInputLabel = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => (props.errors ? "#E52F2F" : "#000000")};
`;
export const StyledInputMessage = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #2e2e2e;
  color: ${(props) => (props.errors ? "#E52F2F" : "#2e2e2e")};
`;
export const StyledInputWrapper = styled.div`
  margin: ${(props) => props.margin};

  p {
    color: ${(props) => props.errors && "#E52F2F"};
  }

  input {
    border-color: ${(props) => props.errors && "#E52F2F"};
    border: 1.8px solid #8ac0e2;
    border-radius: 8px;
    width: ${(props) => props.width};
    height: 20px;
    padding: 20px 16px;
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    margin: 8px 0px;

    &:focus {
      outline: none;
    }
  }
`;
