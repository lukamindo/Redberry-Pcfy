import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BackIconButton from "library/component/button/BackIconButton";
import TabGroup from "library/component/tabs/Tabs";
import redberrylogoicon from "assets/imgs/redberrylogoicon.svg";
import {
  StyledFormLayoutWrapper,
  StyledFormFotterContainer,
  StyledFormHeader,
  StyledFormPhoneTitle,
} from "./FormLayout.styled";
import { Tabs } from "DATA";
import { useMediaQuery } from "react-responsive";

const FormLayout = () => {
  const url = useLocation();

  const phone = useMediaQuery({ query: "(max-width: 391px)" });

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
        {phone ? (
          <StyledFormPhoneTitle>
            <p>
              {url.pathname === "/form/1"
                ? "თანამშრომლების ინფო"
                : "ლეპტოპის მახასიათებლები"}
            </p>
            <span>{`${url.pathname.slice(-1)}/2`}</span>
          </StyledFormPhoneTitle>
        ) : (
          <TabGroup tabs={Tabs} />
        )}
      </StyledFormHeader>
      <StyledFormLayoutWrapper>
        <Outlet />
      </StyledFormLayoutWrapper>
      {!phone && (
        <StyledFormFotterContainer>
          <img src={redberrylogoicon} alt="redberry_pcfy_development" />
        </StyledFormFotterContainer>
      )}
    </>
  );
};

export default FormLayout;
