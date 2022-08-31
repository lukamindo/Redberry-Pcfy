import React from "react";
import { useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/FormInput";
import {
  StyledForm,
  StyledInLineInputsWrapper,
  StyledLaptopSectionOne,
  StyledLaptopSectionThree,
  StyledLaptopSectionTwo,
} from "./FormWrapper.styled";
import DropdownSelect from "library/component/react-select/DropdownSelect";
import { schemaEmployee } from "library/utilities/Validator";
import { yupResolver } from "@hookform/resolvers/yup";

function LaptopSection({ padding }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // mode: "onSubmit",
    // resolver: yupResolver(schemaEmployee),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <StyledForm padding={padding} onSubmit={handleSubmit(onSubmit)}>
      <StyledLaptopSectionOne>
        <StyledInLineInputsWrapper>
          <Input
            hintMessage="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
            label="ლეპტოპის სახელი"
            name="ლეპტოპი"
            errors={errors}
            register={register}
            placeholder="HP"
            margin="0 63px 0 0 "
          />
          <DropdownSelect
            name="ბრენდი"
            options={options}
            control={control}
            errors={errors}
            placeholder="ლეპტოპის ბრენდი"
            width="408px"
          />
        </StyledInLineInputsWrapper>
      </StyledLaptopSectionOne>

      <StyledLaptopSectionTwo>
        <StyledInLineInputsWrapper>
          <DropdownSelect
            name="CPU"
            options={options}
            control={control}
            errors={errors}
            placeholder="CPU"
            width="277px"
            margin=""
          />
          <Input
            hintMessage="მხოლოდ ციფრები"
            label="CPU-ს ბირთვი"
            name="CPU_ბირთვი"
            errors={errors}
            register={register}
            placeholder="14"
            width="240.4px"
          />
          <Input
            hintMessage="მხოლოდ ციფრები"
            label="CPU-ს ნაკადი"
            name="CPU_ნაკადი"
            errors={errors}
            register={register}
            placeholder="365"
            width="240.4px"
          />
        </StyledInLineInputsWrapper>
        <StyledInLineInputsWrapper>
          <Input
            hintMessage="მხოლოდ ციფრები"
            label="ლეპტოპის RAM (GB)"
            name="RAM"
            errors={errors}
            register={register}
            placeholder="16"
          />
          //radio
        </StyledInLineInputsWrapper>
      </StyledLaptopSectionTwo>

      <StyledLaptopSectionThree>
        <StyledInLineInputsWrapper>
          <Input
            label="შეძენის რიცხვი (არჩევითი)"
            name="რიცხვი"
            errors={errors}
            register={register}
            placeholder="დდ / თთ / წწწწ"
            margin="0 0 18.66px 0"
          />
          <Input
            hintMessage="მხოლოდ ციფრები"
            label="ლეპტოპის ფასი"
            name="ფასი"
            errors={errors}
            register={register}
            placeholder="0000"
          />
        </StyledInLineInputsWrapper>
        <StyledInLineInputsWrapper>//radio</StyledInLineInputsWrapper>
      </StyledLaptopSectionThree>
      <StyledInLineInputsWrapper>
        <Button width="219px" margin="95px 0 0 702px">
          დამახსოვრება
        </Button>
      </StyledInLineInputsWrapper>
    </StyledForm>
  );
}

export default LaptopSection;
