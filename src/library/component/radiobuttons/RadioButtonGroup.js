import { RadioButtonWrapper } from "pages/Form/FormWrapper.styled";
import React from "react";
import RadioButton from "./RadioButton";

export default function RadioButtonGroup({ handler, state, data, title }) {
  return (
    <RadioButtonWrapper>
      <p>მეხსიერების ტიპი</p>
      {data?.map((data, i) => {
        return (
          <RadioButton
            key={i}
            onChange={handler}
            id={data.id}
            isSelected={state}
            label={data.value}
            value={data.value}
          />
        );
      })}
    </RadioButtonWrapper>
  );
}
