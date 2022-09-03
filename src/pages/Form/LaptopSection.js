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
import useGetFetch from "library/utilities/useGetFetch";
import FromatedTextInput from "library/component/input/FromatedTextInput";
import { useNavigate } from "react-router-dom";

function LaptopSection({ padding, formData, setFormData }) {
  const [laptopSectionData, setLaptopSectionData] = useState(
    JSON.parse(window.sessionStorage.getItem("LAPTOP_SECTION_DATA"))
  );

  const { data: cpus } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/cpus"
  );
  const { data: brands } = useGetFetch(
    "https://pcfy.redberryinternship.ge/api/brands"
  );

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaLaptop),
    defaultValues: {
      laptop_name: laptopSectionData?.laptop_name,
      laptop_brand_id: laptopSectionData?.laptop_brand_id,
      laptop_cpu: laptopSectionData?.laptop_cpu,
      laptop_cpu_cores: laptopSectionData?.laptop_cpu_cores,
      laptop_cpu_threads: laptopSectionData?.laptop_cpu_threads,
      laptop_ram: laptopSectionData?.laptop_ram,
      laptop_hard_drive_type: laptopSectionData?.laptop_hard_drive_type,
      laptop_state: laptopSectionData?.laptop_state,
      laptop_purchase_date: laptopSectionData?.laptop_purchase_date,
      laptop_price: laptopSectionData?.laptop_price,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const subscribe = watch((data) => {
      setLaptopSectionData(data);
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    window.sessionStorage.setItem(
      "LAPTOP_SECTION_DATA",
      JSON.stringify(laptopSectionData)
    );
  }, [laptopSectionData]);

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };

  const LAPTOP_MEMORY_DATA = [
    {
      id: "1",
      value: "SSD",
      register: "laptop_hard_drive_type",
    },
    {
      id: "2",
      value: "HDD",
      register: "laptop_hard_drive_type",
    },
  ];

  const LAPTOP_CONDITION_DATA = [
    {
      id: "3",
      value: "ახალი",
      register: "laptop_state",
    },
    {
      id: "4",
      value: "მეორადი",
      register: "laptop_state",
    },
  ];

  return (
    <FormProvider register={register}>
      <StyledForm padding={padding} onSubmit={handleSubmit(onSubmit)}>
        <StyledLaptopSectionOne>
          <StyledInLineInputsWrapper>
            <Input
              hintMessage="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
              label="ლეპტოპის სახელი"
              name="laptop_name"
              errors={errors}
              register={register}
              placeholder="HP"
              margin="0 63px 0 0 "
            />
            <DropdownSelect
              name="laptop_brand_id"
              options={brands}
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
              name="laptop_cpu"
              options={cpus}
              control={control}
              errors={errors}
              placeholder="CPU"
              width="277px"
              margin=""
            />
            <Input
              hintMessage="მხოლოდ ციფრები"
              label="CPU-ს ბირთვი"
              name="laptop_cpu_cores"
              errors={errors}
              register={register}
              placeholder="14"
              width="240.4px"
            />
            <Input
              hintMessage="მხოლოდ ციფრები"
              label="CPU-ს ნაკადი"
              name="laptop_cpu_threads"
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
              name="laptop_ram"
              errors={errors}
              register={register}
              placeholder="16"
            />
            <RadioButtonGroup
              title="მეხსიერების ტიპი"
              data={LAPTOP_MEMORY_DATA}
              errors={errors}
              state={laptopSectionData?.laptop_hard_drive_type}
            />
          </StyledInLineInputsWrapper>
        </StyledLaptopSectionTwo>

        <StyledLaptopSectionThree>
          <StyledInLineInputsWrapper>
            <FromatedTextInput
              label="შეძენის რიცხვი (არჩევითი)"
              name="laptop_purchase_date"
              control={control}
              formatType="date"
              errors={errors}
              placeholder="დდ / თთ / წწწწ"
              margin="0 0 18.66px 0"
            />
            <Input
              hintMessage="მხოლოდ ციფრები"
              label="ლეპტოპის ფასი"
              name="laptop_price"
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
              state={laptopSectionData?.laptop_state}
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
