import Button from "library/component/button/Button";
import { useState } from "react";
import EmployeeSection from "./EmployeeSection";
import { StyledFormWrapper } from "./FormWrapper.styled";
import LaptopSection from "./LaptopSection";

function FormWrapper() {
  const [formPage, setFormPage] = useState("employee");

  return (
    <StyledFormWrapper>
      {formPage === "employee" ? (
        <EmployeeSection padding="96px 174px 44px 174px" />
      ) : formPage === "laptop" ? (
        <LaptopSection padding="68px 174px 45px 174px" />
      ) : null}
    </StyledFormWrapper>
  );
}

export default FormWrapper;
