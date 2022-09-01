import React from "react";
import { useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/TextInput";
import { StyledForm, StyledEmployeeSectionOne } from "./FormWrapper.styled";
import DropdownSelect from "library/component/react-select/DropdownSelect";
import { schemaEmployee } from "library/utilities/Validator";
import { yupResolver } from "@hookform/resolvers/yup";

function EmployeeSection({ padding }) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaEmployee),
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
      <StyledEmployeeSectionOne>
        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="სახელი"
          name="სახელი"
          errors={errors}
          register={register}
          placeholder="გრიშა"
          margin="0px 63px 0px 0px"
        />

        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="გვარი"
          name="გვარი"
          errors={errors}
          register={register}
          placeholder="ბაგრატიონი"
        />
      </StyledEmployeeSectionOne>
      <DropdownSelect
        name="თიმი"
        options={options}
        control={control}
        errors={errors}
        placeholder="თიმი"
        width="878px"
        margin="52px 0 0 0 "
      />

      <DropdownSelect
        name="პოზიცია"
        options={options}
        control={control}
        errors={errors}
        placeholder="პოზიცია"
        width="878px"
        margin="53px 0 0 0 "
      />

      <Input
        hintMessage="უნდა მთავრდებოდეს @redberry.ge-ით"
        label="მეილი"
        name="მეილი"
        errors={errors}
        register={register}
        placeholder="grish666@redberry.ge"
        margin="51px 0 0 0"
        width="842.4px"
      />

      <Input
        hintMessage="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        label="ტელეფონის ნომერი"
        name="ტელეფონის_ნომერი"
        register={register}
        errors={errors}
        placeholder="+995 598 00 07 01"
        margin="48px 0 0 0"
        width="842.4px"
      />

      <Button width="176px" margin="95px 0 0 702px">
        შემდეგი
      </Button>
    </StyledForm>
  );
}

export default EmployeeSection;
