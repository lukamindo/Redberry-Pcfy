import * as yup from "yup";

const geoRegex = /^[ა-ჰ]+$/;
const emailRegex = /[a-z0-9](\.?[a-z0-9]){5,}@redberry\.ge$/;
const numberRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;
const laptopNameRegex = /^[a-zA-Z0-9!@#$%^&*()_+=]*$/;
const onlyNumberRegex = /^[0-9]*$/;

export const schemaEmployee = yup.object().shape({
  name: yup
    .string()
    .matches(geoRegex, "გამოიყენე ქართული ასოები")
    .min(2, "უნდა შეიცვადეს მინიმუმ 2 სიმბოლოს")
    .required("ველის შევსება სავალდებულოა"),
  surname: yup
    .string()
    .matches(geoRegex, "გამოიყენე ქართული ასოები")
    .min(2, "უნდა შეიცვადეს მინიმუმ 2 სიმბოლოს")
    .required("ველის შევსება სავალდებულოა"),
  team_id: yup.object().shape({
    id: yup.number().required(),
    name: yup.string().required(),
  }),
  position_id: yup.object().shape({
    id: yup.number().required(),
    name: yup.string().required(),
  }),
  email: yup
    .string()
    .email()
    .matches(emailRegex, "გამოიყენე @redberry.ge-ს იმეილი")
    .required("ველის შევსება სავალდებულოა"),
  phone_number: yup
    .string()
    .matches(numberRegex, "გამოიყენე ქართული მობ-ნომრის ფორმატი")
    .required("ველის შევსება სავალდებულოა"),
});

export const schemaLaptop = yup.object().shape({
  laptop_name: yup
    .string()
    .matches(
      laptopNameRegex,
      "შესაძლებელია შეიცავდეს მხოლოდ ლათინურ სიმბოლოებს, რიცხვებსა და !@#$%^&*()_+="
    )
    .required("ველის შევსება სავალდებულოა"),
  laptop_brand_id: yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  }),
  laptop_cpu: yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  }),
  laptop_cpu_cores: yup
    .string()
    .matches(onlyNumberRegex, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_cpu_threads: yup
    .string()
    .matches(onlyNumberRegex, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_ram: yup
    .string()
    .matches(onlyNumberRegex, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_price: yup
    .string()
    .matches(onlyNumberRegex, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_hard_drive_type: yup.string().required(),
  laptop_state: yup.string().required(),
});
