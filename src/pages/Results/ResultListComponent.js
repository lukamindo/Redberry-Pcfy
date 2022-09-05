import React from "react";
import {
  StyledLaptopBorder,
  StyledListLaptopContentWrapper,
  StyledListLaptopImageWrapper,
  StyledListLaptopLink,
  StyledListLaptopName,
  StyledListLaptopOwner,
  StyledListLaptopWrapper,
} from "./ResultListComponent.styled";

const ResultListComponent = ({ image, owner, name, id }) => {
  return (
    <StyledListLaptopWrapper>
      <StyledLaptopBorder>
        <StyledListLaptopImageWrapper>
          <img src={image} alt="redberry pcfy" />
        </StyledListLaptopImageWrapper>
        <StyledListLaptopContentWrapper>
          <StyledListLaptopOwner>{owner}</StyledListLaptopOwner>
          <StyledListLaptopName>{name}</StyledListLaptopName>
          <StyledListLaptopLink to={`/results/${id}`}>
            მეტის ნახვა
          </StyledListLaptopLink>
        </StyledListLaptopContentWrapper>
      </StyledLaptopBorder>
    </StyledListLaptopWrapper>
  );
};

export default ResultListComponent;
