import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BackIconButton from "library/component/button/BackIconButton";
import TabGroup from "library/component/tabs/Tabs";
import redberrylogoicon from "assets/imgs/redberrylogoicon.svg";
import {
  StyledFormLayoutWrapper,
  StyledFormFotterContainer,
  StyledFormHeader,
} from "./FormLayout.styled";
import { Tabs } from "DATA";

const FormLayout = () => {
  const url = useLocation();

  const BackIconButtonHandler = () => {
    if (url.pathname === "/form/1") {
      return () => navigate("/");
    } else return () => navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <>
      <StyledFormHeader>
        <BackIconButton onClickHandler={BackIconButtonHandler()} />
        <TabGroup tabs={Tabs} />
      </StyledFormHeader>
      <StyledFormLayoutWrapper>
        <Outlet />
      </StyledFormLayoutWrapper>
      <StyledFormFotterContainer>
        <img src={redberrylogoicon} alt="redberry_pcfy_development" />
      </StyledFormFotterContainer>
    </>
  );
};

export default FormLayout;
