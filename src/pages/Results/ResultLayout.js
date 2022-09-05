import React from "react";
import BackIconButton from "library/component/button/BackIconButton";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { StyledResultsWrapper } from "./ResultsLayout.styled";

const ResultLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const BackIconButtonHandler = () => {
    if (pathname === "/results") {
      return () => navigate("/");
    } else return () => navigate(-1);
  };

  return (
    <StyledResultsWrapper>
      <BackIconButton onClickHandler={BackIconButtonHandler()} />
      <p>{pathname === "/results" ? "ჩანაწერების სია" : "ლეპტოპის ინფო"}</p>
      <Outlet />
    </StyledResultsWrapper>
  );
};

export default ResultLayout;
