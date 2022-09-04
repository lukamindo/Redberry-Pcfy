import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/TextInput";
import { StyledForm, StyledEmployeeSectionOne } from "./FormLayout.styled";
import DropdownSelect from "library/component/react-select/DropdownSelect";
import { schemaEmployee } from "library/utilities/Validator";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFetch from "library/utilities/useGetFetch";
import FromatedTextInput from "library/component/input/FromatedTextInput";
import { useData } from "library/utilities/DataContext";
import { useNavigate } from "react-router-dom";

function EmployeeSection() {
  const { data, setValues } = useData();
  const navigate = useNavigate();

  const { data: team } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/teams"
  );
  const { data: position } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/positions"
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaEmployee),
    defaultValues: {
      name: data?.name,
      surname: data?.surname,
      team_id: data?.team_id,
      position_id: data?.position_id,
      phone_number: data?.phone_number,
      email: data?.email,
    },
  });

  console.log(data);

  useEffect(() => {
    const subscribe = watch((data) => {
      setValues(data);
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  const onSubmit = () => {
    navigate("/form/2");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledEmployeeSectionOne>
        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="სახელი"
          name="name"
          errors={errors}
          control={control}
          placeholder="გრიშა"
          margin="0px 63px 0px 0px"
        />

        <Input
          hintMessage="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          label="გვარი"
          name="surname"
          errors={errors}
          control={control}
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
        control={control}
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
