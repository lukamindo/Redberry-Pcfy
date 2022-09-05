import styled from "styled-components";

export const StyledSubmitPageBackGround = styled.div`
  background: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1080px;
  @media (max-width: 391px) {
    height: 844px;
  }
`;

export const StyledPopUpModal = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  img {
    margin-top: 30px;
  }

  p {
    font-weight: 700;
    font-size: 25px;
    color: #292929;
  }

  @media (max-width: 391px) {
    width: 100%;
    height: 100%;
    img {
      margin-top: 20px;
    }

    p {
      max-width: 200px;
      text-align: center;
    }
  }
`;
