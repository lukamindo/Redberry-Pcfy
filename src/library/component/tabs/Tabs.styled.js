import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ButtonGroup = styled.div`
  display: flex;
`;

export const StyledNavLink = styled.span`
  a.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 60%;
    height: 2px;
    background: black;
    transform: translateX(-50%);
  }
`;
