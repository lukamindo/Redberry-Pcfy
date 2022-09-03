import React from "react";
import { useState } from "react";
import LaptopSection from "./LaptopSection";
import EmployeeSection from "./EmployeeSection";
import { StyledFormWrapper, StyledRedberryImage } from "./FormWrapper.styled";
import TabGroup from "library/component/tabs/Tabs";
import BackIconButton from "library/component/button/BackIconButton";
import redberrylogoicon from "assets/imgs/redberrylogoicon.svg";

function FormWrapper() {
  const types = [
    { title: "თანამშრომლის ინფო", page: "employee" },
    { title: "ლეპტოპის მახასიათებლები", page: "laptop" },
    ,
  ];

  const [formPage, setFormPage] = useState(types[0].page);
  return (
    <>
      <BackIconButton onClickHandler={() => console.log("asdas")} />
      <StyledFormWrapper>
        <TabGroup
          tabs={types}
          active={formPage}
          setActiveHandler={setFormPage}
        />
        {formPage === "employee" ? (
          <EmployeeSection padding="96px 174px 44px 174px" />
        ) : formPage === "laptop" ? (
          <LaptopSection padding="68px 174px 45px 174px" />
        ) : null}
        <StyledRedberryImage
          src={redberrylogoicon}
          alt="redberry_pcfy_development"
        />
      </StyledFormWrapper>
    </>
  );
}

export default FormWrapper;
