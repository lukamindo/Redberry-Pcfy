import styled from "styled-components";

export const StyledFormLayoutWrapper = styled.div`
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
  background-color: #ffffff;

  @media (max-width: 391px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const StyledEmployeeSectionOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 391px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const StyledLaptopSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 52px;
  @media (max-width: 391px) {
    padding-bottom: 10px;
  }
`;

export const StyledLaptopSectionTwo = styled.div`
  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 52px;
  @media (max-width: 391px) {
    padding-bottom: 20px;
  }
`;
export const StyledLaptopSectionThree = styled.div``;

export const StyledInLineInputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;

  @media (max-width: 391px) {
    padding-top: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledForm2MobileButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media (max-width: 391px) {
    margin-bottom: 20px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const StyledRadioSection = styled.div`
  display: flex;
  width: 399px;
  @media (max-width: 391px) {
    align-items: flex-start;
    width: 100%;
  }
  > p {
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.errors && "#E52F2F"};
  }

  img {
    width: 22px;
    height: 20px;
    margin-left: 14px;
  }
`;

export const StyledFormFotterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 67px 0 45px 0;
`;

export const StyledFormHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 91px;

  @media (max-width: 391px) {
    padding-top: 31px;
  }
`;

export const StyledFormPhoneTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }
`;
