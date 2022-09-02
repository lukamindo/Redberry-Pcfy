import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/TextInput";
import { StyledForm, StyledEmployeeSectionOne } from "./FormWrapper.styled";
import DropdownSelect from "library/component/react-select/DropdownSelect";
import { schemaEmployee } from "library/utilities/Validator";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFetch from "library/utilities/useGetFetch";
import FromatedTextInput from "library/component/input/FromatedTextInput";

function EmployeeSection({ padding }) {
  const [employeeSectionData, setEmployeeSectionData] = useState(
    JSON.parse(window.sessionStorage.getItem("EMPLOYEE_SECTION_DATA"))
  );

  const { data: team } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/teams"
  );
  const { data: position } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/positions"
  );

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaEmployee),
    defaultValues: {
      name: employeeSectionData?.name,
      surname: employeeSectionData?.surname,
      team_id: employeeSectionData?.team_id,
      position_id: employeeSectionData?.position_id,
      phone_number: employeeSectionData?.phone_number,
      email: employeeSectionData?.email,
    },
  });

  useEffect(() => {
    window.sessionStorage.setItem(
      "EMPLOYEE_SECTION_DATA",
      JSON.stringify(employeeSectionData)
    );
  }, [employeeSectionData]);

  useEffect(() => {
    const subscribe = watch((data) => {
      // console.log(data);
      setEmployeeSectionData(data);
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledForm padding={padding} onSubmit={handleSubmit(onSubmit)}>
      <StyledEmployeeSectionOne>
        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="სახელი"
          name="name"
          errors={errors}
          register={register}
          placeholder="გრიშა"
          margin="0px 63px 0px 0px"
        />

        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="გვარი"
          name="surname"
          errors={errors}
          register={register}
          placeholder="ბაგრატიონი"
        />
      </StyledEmployeeSectionOne>
      <DropdownSelect
        name="team_id"
        options={team}
        control={control}
        errors={errors}
        placeholder="თიმი"
        width="878px"
        margin="52px 0 0 0 "
      />

      <DropdownSelect
        name="position_id"
        options={position}
        control={control}
        errors={errors}
        placeholder="პოზიცია"
        width="878px"
        margin="53px 0 0 0 "
        onChange={(option) => console.log(option)}
      />

      <Input
        hintMessage="უნდა მთავრდებოდეს @redberry.ge-ით"
        label="მეილი"
        name="email"
        errors={errors}
        register={register}
        placeholder="grish666@redberry.ge"
        margin="51px 0 0 0"
        width="842.4px"
      />

      <FromatedTextInput
        hintMessage="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        label="ტელეფონის ნომერი"
        name="phone_number"
        control={control}
        formatType="phone"
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
