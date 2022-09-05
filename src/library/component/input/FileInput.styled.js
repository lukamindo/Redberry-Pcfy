import styled from "styled-components";

export const StyledFileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  border: ${(props) =>
    props.errors ? "2px dashed #E52F2F" : "2px dashed #4386a9"};
  border-radius: 18px;
  height: 423px;
  width: 878px;

  @media (max-width: 391px) {
    img {
      width: 358px;
      height: 244px;
    }
    width: 358px;
    height: 244px;
  }
`;
export const StyledFileUploadText = styled.p`
  color: #4386a9;
  font-size: 20px;
  font-weight: 500;
  width: 210px;
  text-align: center;
`;

export const StyledFileDescriptonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

export const StyledFileDescripton = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 22px;
    height: 22px;
  }
`;
export const StyledFileUploadSucces = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 18px;
`;

export const StyledFileInput = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 233px;
  height: 60px;

  cursor: pointer;

  border-radius: 8px;
  background: #62a1eb;

  font-weight: 500;
  font-size: 20px;

  color: #ffffff;

  @media (max-width: 391px) {
    width: 100px;
  }
`;

export const StyledFileInputErrorImage = styled.img`
  width: 35px;
  height: 35px;
  margin-bottom: 15px;
`;
