import React from "react";
import backbutton from "assets/imgs/backbutton.svg";
import phoneback from "assets/imgs/phoneback.svg";
import { StyledBackIconButton } from "./BackIconButton.styled";
import { useMediaQuery } from "react-responsive";

const BackIconButton = ({ onClickHandler }) => {
  const phone = useMediaQuery({ query: "(max-width: 391px)" });

  return (
    <>
      <StyledBackIconButton onClick={onClickHandler}>
        <img src={phone ? phoneback : backbutton} alt="redberry-pcfy"></img>
      </StyledBackIconButton>
    </>
  );
};

export default BackIconButton;
