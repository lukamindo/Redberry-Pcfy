import {
  RadioButtonWrapper,
  StyledRadioSection,
} from "pages/Form/FormLayout.styled";
import React from "react";
import RadioButton from "./RadioButton";
import radioerror from "assets/imgs/radioerror.svg";

export default function RadioButtonGroup({ state, data, title, errors }) {
  return (
    <RadioButtonWrapper>
      <StyledRadioSection errors={errors?.[data[0].register]}>
        <p>{title}</p>
        {errors?.[data[0].register] && <img src={radioerror}></img>}
      </StyledRadioSection>
      <StyledRadioSection>
        {data?.map((data) => {
          return (
            <RadioButton
              name={data.register}
              key={data.value}
              state={state}
              label={data.title}
              value={data.value}
            />
          );
        })}
      </StyledRadioSection>
    </RadioButtonWrapper>
  );
}
