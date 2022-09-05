import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "library/component/button/Button";
import Input from "library/component/input/TextInput";
import {
  StyledForm,
  StyledInLineInputsWrapper,
  StyledLaptopSectionOne,
  StyledLaptopSectionThree,
  StyledLaptopSectionTwo,
} from "./FormLayout.styled";
import DropdownSelect from "library/component/react-select/DropdownSelect";
import { schemaLaptop } from "library/utilities/Validator";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioButtonGroup from "library/component/radiobuttons/RadioButtonGroup";
import useGetFetch from "library/utilities/useGetFetch";
import FromatedTextInput from "library/component/input/FromatedTextInput";
import { LAPTOP_MEMORY_DATA, LAPTOP_CONDITION_DATA, TOKEN } from "DATA";
import { useData } from "library/utilities/DataContext";
import { useNavigate } from "react-router-dom";
import FileInput from "library/component/input/FileInput";

function LaptopSection() {
  const { data, setValues } = useData();

  const navigate = useNavigate();

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
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schemaLaptop),
    defaultValues: {
      laptop_name: data?.laptop_name,
      laptop_brand_id: data?.laptop_brand_id,
      laptop_cpu: data?.laptop_cpu,
      laptop_cpu_cores: data?.laptop_cpu_cores,
      laptop_cpu_threads: data?.laptop_cpu_threads,
      laptop_ram: data?.laptop_ram,
      laptop_hard_drive_type: data?.laptop_hard_drive_type,
      laptop_state: data?.laptop_state,
      laptop_purchase_date: data?.laptop_purchase_date,
      laptop_price: data?.laptop_price,
      laptop_image: data?.laptop_image,
    },
  });

  useEffect(() => {
    const subscribe = watch((data) => {
      setValues(data);
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  const onlyIdSelectKeys = ["team_id", "position_id", "laptop_brand_id"];
  const onlyValuesKeys = [
    "name",
    "surname",
    "phone_number",
    "email",
    "laptop_name",
    "laptop_image",
    "laptop_cpu_cores",
    "laptop_cpu_threads",
    "laptop_ram",
    "laptop_hard_drive_type",
    "laptop_state",
    "laptop_purchase_date",
    "laptop_price",
  ];

  const onSubmit = async () => {
    const formData = new FormData();
    onlyValuesKeys.forEach((key) => formData.append(key, data[key]));
    onlyIdSelectKeys.forEach((key) => formData.append(key, data[key].id));
    formData.append("laptop_cpu", data["laptop_cpu"].name);
    formData.append("token", TOKEN);
    console.log(Object.fromEntries(formData));

    const res = await fetch(
      "https://pcfy.redberryinternship.ge/api/laptop/create",
      {
        method: "POST",
        body: formData,
      }
    );

    console.log(res.status);
  };

  return (
    <FormProvider register={register}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledLaptopSectionOne>
          <FileInput control={control} errors={errors} name="laptop_image" />
          <StyledInLineInputsWrapper>
            <Input
              hintMessage="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
              label="ლეპტოპის სახელი"
              name="laptop_name"
              errors={errors}
              control={control}
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
              valueInNumber
              errors={errors}
              control={control}
              placeholder="14"
              width="240.4px"
            />
            <Input
              hintMessage="მხოლოდ ციფრები"
              label="CPU-ს ნაკადი"
              name="laptop_cpu_threads"
              valueInNumber
              errors={errors}
              control={control}
              placeholder="365"
              width="240.4px"
            />
          </StyledInLineInputsWrapper>
          <StyledInLineInputsWrapper>
            <Input
              hintMessage="მხოლოდ ციფრები"
              label="ლეპტოპის RAM (GB)"
              name="laptop_ram"
              valueInNumber
              errors={errors}
              control={control}
              placeholder="16"
            />
            <RadioButtonGroup
              title="მეხსიერების ტიპი"
              data={LAPTOP_MEMORY_DATA}
              errors={errors}
              state={data?.laptop_hard_drive_type}
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
              valueInNumber
              errors={errors}
              control={control}
              placeholder="0000"
            />
          </StyledInLineInputsWrapper>
          <StyledInLineInputsWrapper>
            <RadioButtonGroup
              title="ლეპტოპის მდგომარეობა"
              data={LAPTOP_CONDITION_DATA}
              errors={errors}
              state={data?.laptop_state}
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
            onClick={() => navigate("/form/1")}
          >
            უკან
          </Button>
          <Button type="submit" width="219px">
            დამახსოვრება
          </Button>
        </StyledInLineInputsWrapper>
      </StyledForm>
    </FormProvider>
  );
}

export default LaptopSection;
