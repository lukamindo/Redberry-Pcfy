import {
  RadioButtonWrapper,
  StyledRadioSection,
} from "pages/Form/FormWrapper.styled";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import RadioButton from "./RadioButton";
import radioerror from "assets/imgs/radioerror.svg";

export default function RadioButtonGroup({
  handler,
  state,
  data,
  title,
  errors,
}) {
  const formContext = useFormContext();
  console.log();
  return (
    <RadioButtonWrapper>
      <StyledRadioSection errors={errors?.[data[0].register]}>
        <p>{title}</p>
        {errors?.[data[0].register] && <img src={radioerror}></img>}
      </StyledRadioSection>
      <StyledRadioSection>
        {data?.map((data, i) => {
          return (
            <RadioButton
              name={data.register}
              register={formContext.register}
              key={i}
              onChange={handler}
              id={data.id}
              isSelected={state}
              label={data.value}
              value={data.value}
            />
          );
        })}
      </StyledRadioSection>
    </RadioButtonWrapper>
  );
}
