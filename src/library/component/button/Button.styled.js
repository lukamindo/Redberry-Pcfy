import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.font};
  font-weight: 500;
`;
