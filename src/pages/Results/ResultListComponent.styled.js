import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledListLaptopWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
  width: 50%;
`;

export const StyledLaptopBorder = styled.div`
  border: 1px solid #aed1ea;
  border-radius: 20px;
  display: flex;
  background: #eafaff;
`;

export const StyledListLaptopImageWrapper = styled.div`
  margin: 14px 28px 13px 14px;
  img {
    width: 266px;
    height: 178px;
    border-radius: 10px;
  }
`;

export const StyledListLaptopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #2e2e2e;
  font-size: 18px;
  margin: 45px 77px 0 0;
`;

export const StyledListLaptopOwner = styled.p`
  font-weight: 500;
`;

export const StyledListLaptopName = styled.p`
  margin: 18px 0 40px 0;
  font-weight: 400;
`;

export const StyledListLaptopLink = styled(NavLink)`
  color: #4386a9;
  font-weight: 400;
  font-size: 16px;
`;
