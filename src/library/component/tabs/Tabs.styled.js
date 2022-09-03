import styled from "styled-components";

export const Tab = styled.button`
  color: #232323;
  font-size: 20px;
  font-weight: 700;
  padding: 0px 33px;
  background: #f7f7f7;
  border: 0;
  outline: 0;
  /* cursor: pointer; */
  ${({ active }) =>
    active &&
    `
    &:after {
      content: "";
      display: block;
      border-bottom: 2px solid #000000;
      width: 80%;
      margin: 4% 10%;
  }
    

  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
`;
