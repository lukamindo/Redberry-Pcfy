import React from "react";
import {
  StyledRowTitle,
  StyledRowValue,
  StyledSpecRowWrapper,
} from "./SpecRow.styled";

const SpecRow = ({ title, value }) => {
  return (
    <StyledSpecRowWrapper>
      <StyledRowTitle>{`${title}:`}</StyledRowTitle>
      <StyledRowValue>{value}</StyledRowValue>
    </StyledSpecRowWrapper>
  );
};

export default SpecRow;
