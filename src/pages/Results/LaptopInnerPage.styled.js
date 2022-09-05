import styled from "styled-components";

export const StyledLaptopInnerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .border {
    border-top: 1px solid #a5a5a5;
    border-bottom: 1px solid #a5a5a5;
  }
`;

export const StyledLaptopInnerPageSection = styled.div`
  display: flex;
  align-items: ${(props) => (props.alignItem ? props.alignItem : "flex-start")};
  padding: 50px 0;
`;

export const StyledLaptopInnerPageCol = styled.div`
  width: 577px;
  padding-right: 70px;
  img {
    width: 100%;
    height: 340px;
  }
`;
