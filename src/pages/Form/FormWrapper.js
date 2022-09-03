import React from "react";
import { useState } from "react";
import LaptopSection from "./LaptopSection";
import EmployeeSection from "./EmployeeSection";
import { StyledFormWrapper, StyledRedberryImage } from "./FormWrapper.styled";
import TabGroup from "library/component/tabs/Tabs";
import BackIconButton from "library/component/button/BackIconButton";
import redberrylogoicon from "assets/imgs/redberrylogoicon.svg";
import { useNavigate } from "react-router-dom";

function FormWrapper() {
  const types = [
    { title: "თანამშრომლის ინფო", page: "employee" },
    { title: "ლეპტოპის მახასიათებლები", page: "laptop" },
    ,
  ];

  const [formPage, setFormPage] = useState(types[0].page);
  const [formData, setFormData] = useState({ key: 1 });
  const [employeeFormIsValid, setEmployeeFormIsValid] = useState("");

  console.log(formData);

  const navigate = useNavigate();

  const navigationIconHandler = () => {
    if (formPage === "employee") {
      return () => navigate("/");
    } else if (formPage === "laptop") {
      return () => setFormPage("employee");
    }
  };

  return (
    <>
      <BackIconButton onClickHandler={navigationIconHandler()} />
      <StyledFormWrapper>
        <TabGroup
          employeeFormIsValid={employeeFormIsValid}
          tabs={types}
          active={formPage}
          setActiveHandler={setFormPage}
        />
        {formPage === "employee" ? (
          <EmployeeSection
            setEmployeeFormIsValid={setEmployeeFormIsValid}
            setFormPage={setFormPage}
            setFormData={setFormData}
            padding="96px 174px 44px 174px"
          />
        ) : formPage === "laptop" ? (
          <LaptopSection
            setFormPage={setFormPage}
            setFormData={setFormData}
            formData={formData}
            padding="68px 174px 45px 174px"
          />
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
