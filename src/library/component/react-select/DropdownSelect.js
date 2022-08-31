import React from "react";
import Select from "react-select";

const DropdownSelect = ({
  placeholder,
  width,
  options,
  margin,
  register,
  required,
}) => {
  const customStyles = {
    container: (styles) => ({
      ...styles,
      width: width,
      height: "60px",
      margin: margin,
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#EBEBEB",
      border: "none",
      boxShadow: "none",
      borderRadius: "8px",
    }),
    valueContainer: (styles) => ({
      ...styles,
      paddingLeft: "16px",
      fontSize: "18px",
      fontWeight: "500",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "#484848",
      padding: "22px",
    }),
    menu: (styles) => ({
      ...styles,
      width: "878px",
      margin: "0",
      borderRadius: "8px",
      filter: "drop-shadow(0px 4px 34px rgba(0, 0, 0, 0.25))",
      fontWeight: "400",
      fontSize: "18px",
      boxShadow: "none",
    }),
    menuList: (styles) => ({
      ...styles,
      padding: "0",
    }),
    option: (styles) => ({
      ...styles,
      height: "41px",
      padding: "10px",
      backgroundColor: "#fff",
      color: "#484848",
      ":hover": { backgroundColor: "#E7F0F8 " },
    }),
    placeholder: (styles) => ({
      ...styles,
      fontWeight: "500",
      color: "#000000",
    }),
    singleValue: (styles) => ({
      ...styles,
      fontWeight: "500",
      color: "#000000",
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={placeholder}
      isSearchable={false}
      {...register(placeholder, { required })}
    />
  );
};

export default DropdownSelect;