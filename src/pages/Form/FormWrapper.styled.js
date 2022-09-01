import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  background: #f7f7f7;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
  background-color: #ffffff;
`;

export const StyledEmployeeSectionOne = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLaptopSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 52px;
`;

export const StyledLaptopSectionTwo = styled.div`
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 52px;
`;
export const StyledLaptopSectionThree = styled.div``;

export const StyledInLineInputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
`;

export const RadioButtonWrapper = styled.div`
  /* display: flex; */
  p {
    font-weight: 500;
    font-size: 18px;
  }
`;
