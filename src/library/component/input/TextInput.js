import React from "react";
import { Controller, useController } from "react-hook-form";
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInputMessage,
  StyledInput,
} from "./TextInput.styled";
import { onlyNumberRegexNoZero } from "library/utilities/Validator";

const TextInput = ({
  name,
  label,
  control,
  hintMessage,
  placeholder,
  valueInNumber,
  margin,
  width = "363.4px",
  errors,
}) => {
  const {
    field: { onChange, value, ref },
  } = useController({
    name,
    control,
  });

  const myOnChange = (value) => {
    if (onlyNumberRegexNoZero.test(value)) {
      onChange(Number(value));
    } else {
      onChange(value);
    }
  };

  return (
    <StyledInputWrapper width={width} margin={margin} errors={errors?.[name]}>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        ref={ref}
        onChange={(e) =>
          valueInNumber ? myOnChange(e.target.value) : onChange(e.target.value)
        }
      />
      {(errors?.[name] && (
        <StyledInputMessage>{errors?.[name].message}</StyledInputMessage>
      )) ||
        (hintMessage && <StyledInputMessage>{hintMessage}</StyledInputMessage>)}
    </StyledInputWrapper>
  );
};
export default TextInput;
