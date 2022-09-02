import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/TextInput";
import {
  StyledForm,
  StyledInLineInputsWrapper,
  StyledLaptopSectionOne,
  StyledLaptopSectionThree,
  StyledLaptopSectionTwo,
} from "./FormWrapper.styled";
import DropdownSelect from "library/component/react-select/DropdownSelect";
import { schemaLaptop } from "library/utilities/Validator";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButtonGroup from "library/component/radiobuttons/RadioButtonGroup";

function LaptopSection({ padding }) {
  const [laptopSectionData, setLaptopSectionData] = useState(
    JSON.parse(window.localStorage.getItem("LAPTOP_SECTION_DATA"))
  );

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    // resolver: yupResolver(schemaLaptop),
    defaultValues: {
      ლეპტოპის_სახელი: laptopSectionData?.ლეპტოპის_სახელი,
      ლეპტოპის_ბრენდი: laptopSectionData?.ლეპტოპის_ბრენდი,
      CPU: laptopSectionData?.CPU,
      CPU_ბირთვი: laptopSectionData?.CPU_ბირთვი,
      CPU_ნაკადი: laptopSectionData?.CPU_ნაკადი,
      RAM: laptopSectionData?.["RAM"],
      მეხსიერების_ტიპი: laptopSectionData?.მეხსიერების_ტიპი,
      შეძენის_რიცხვი: laptopSectionData?.შეძენის_რიცხვი,
      ფასი: laptopSectionData?.ფასი,
      მდგომარეობა: laptopSectionData?.მდგომარეობა,
    },
  });

  useEffect(() => {
    const subscribe = watch((data) => {
      setLaptopSectionData(data);
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    window.localStorage.setItem(
      "LAPTOP_SECTION_DATA",
      JSON.stringify(laptopSectionData)
    );
  }, [laptopSectionData]);

  const [laptopMemory, setLaptopMemory] = useState("");
  const [laptopCondition, setLaptopCondition] = useState("");

  const laptopMemoryHandler = (e) => {
    setLaptopMemory(e.target.value);
  };

  const laptopConditionHandler = (e) => {
    setLaptopCondition(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const LAPTOP_MEMORY_DATA = [
    {
      id: "1",
      value: "SSD",
      register: "მეხსიერების_ტიპი",
    },
    {
      id: "2",
      value: "HDD",
      register: "მეხსიერების_ტიპი",
    },
  ];

  const LAPTOP_CONDITION_DATA = [
    {
      id: "1",
      value: "ახალი",
      register: "მდგომარეობა",
    },
    {
      id: "2",
      value: "მეორადი",
      register: "მდგომარეობა",
    },
  ];

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <FormProvider register={register}>
      <StyledForm padding={padding} onSubmit={handleSubmit(onSubmit)}>
        <StyledLaptopSectionOne>
          <StyledInLineInputsWrapper>
            <Input
              hintMessage="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
              label="ლეპტოპის სახელი"
              name="ლეპტოპის_სახელი"
              errors={errors}
              register={register}
              placeholder="HP"
              margin="0 63px 0 0 "
            />
            <DropdownSelect
              name="ლეპტოპის_ბრენდი"
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
            <RadioButtonGroup
              title="მეხსიერების ტიპი"
              data={LAPTOP_MEMORY_DATA}
              handler={laptopMemoryHandler}
              errors={errors}
              state={laptopMemory}
            />
          </StyledInLineInputsWrapper>
        </StyledLaptopSectionTwo>

        <StyledLaptopSectionThree>
          <StyledInLineInputsWrapper>
            <Input
              label="შეძენის რიცხვი (არჩევითი)"
              name="შეძენის_რიცხვი"
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
          <StyledInLineInputsWrapper>
            <RadioButtonGroup
              title="ლეპტოპის მდგომარეობა"
              data={LAPTOP_CONDITION_DATA}
              errors={errors}
              handler={laptopConditionHandler}
              state={laptopCondition}
            />
          </StyledInLineInputsWrapper>
        </StyledLaptopSectionThree>
        <StyledInLineInputsWrapper>
          <Button
            font="18px"
            backgroundColor="#ffffff"
            textAlign="left"
            width="297px"
            fontColor="#0089A7"
          >
            უკან
          </Button>
          <Button width="219px">დამახსოვრება</Button>
        </StyledInLineInputsWrapper>
      </StyledForm>
    </FormProvider>
  );
}

export default LaptopSection;
