import Cleave from "cleave.js/react";
import React, { useState } from "react";
import { Controller, useController } from "react-hook-form";
import "cleave.js/dist/addons/cleave-phone.ge";
import {
  StyledInputLabel,
  StyledInputMessage,
  StyledInputWrapper,
} from "./TextInput.styled";

const FromatedTextInput = ({
  name,
  control,
  placeholder,
  formatType,
  label,
  hintMessage,
  margin,
  width = "363.4px",
  errors,
}) => {
  const [cleaveInstance, setCleaveInstance] = useState(null);
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
  });

  const myOnChange = () => {
    if (cleaveInstance !== null) {
      const value =
        formatType === "phone"
          ? cleaveInstance.getRawValue()
          : cleaveInstance.lastInputValue;
      onChange(value);
    }
  };

  const getOptions = () => {
    if (formatType === "phone") {
      return {
        phone: true,
        phoneRegionCode: "GE",
      };
    } else if (formatType === "date") {
      return {
        date: true,
        datePattern: ["d", "m", "Y"],
      };
    }
  };

  return (
    <>
      <StyledInputWrapper width={width} margin={margin} errors={errors?.[name]}>
        {label && <StyledInputLabel>{label}</StyledInputLabel>}
        <Cleave
          value={value}
          name={name}
          ref={ref}
          placeholder={placeholder}
          options={getOptions()}
          onChange={myOnChange}
          onInit={(e) => setCleaveInstance(e)}
        />
        {(errors?.[name] && (
          <StyledInputMessage>{errors?.[name].message}</StyledInputMessage>
        )) ||
          (hintMessage && (
            <StyledInputMessage>{hintMessage}</StyledInputMessage>
          ))}
      </StyledInputWrapper>
    </>
  );
};
export default FromatedTextInput;
