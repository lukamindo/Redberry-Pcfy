import React from "react";
import { useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/FormInput";
import { StyledForm, StyledTwoInputWrapper } from "./FormWrapper.styled";
import Select from "react-select";

function EmployeeSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#EBEBEB",
      width: "878px",
      height: "60px",
      border: "none",
      boxShadow: "none",
      borderRadius: "8px",
    }),
    valueContainer: (styles) => ({
      ...styles,
      paddingLeft: "16px",
      fontSize: "18px",
      fontWeight: "500",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    // indicatorsContainer: () => ({ padding: "25px" }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "#484848",
      padding: "22px",
      ":hover": {},
    }),
    menu: (styles) => ({
      ...styles,
      width: "878px",
      margin: "0",
      borderRadius: "8px",
      border: "0px",
      filter: "drop-shadow(0px 4px 34px rgba(0, 0, 0, 0.25))",
      fontWeight: "400",
      fontSize: "18px",
    }),
    option: (styles) => ({
      ...styles,
      height: "41px",
    }),
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTwoInputWrapper>
        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="სახელი"
          register={register}
          placeholder="გრიშა"
          required
        />

        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="გვარი"
          register={register}
          placeholder="ბაგრატიონი"
          required
        />
      </StyledTwoInputWrapper>
      <Select
        options={options}
        styles={customStyles}
        placeholder="თიმი"
        isSearchable={false}
      />

      {/* <Button>შემდეგი</Button> */}
    </StyledForm>
  );
}

export default EmployeeSection;
