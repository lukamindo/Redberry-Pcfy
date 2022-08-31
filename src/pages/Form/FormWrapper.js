import EmployeeSection from "./EmployeeSection";
import { StyledFormWrapper } from "./FormWrapper.styled";
import LaptopSection from "./LaptopSection";

function FormWrapper() {
  return (
    <StyledFormWrapper>
      {/* <EmployeeSection padding="96px 174px 44px 174px" /> */}
      <LaptopSection padding="68px 174px 45px 174px" />
    </StyledFormWrapper>
  );
}

export default FormWrapper;
