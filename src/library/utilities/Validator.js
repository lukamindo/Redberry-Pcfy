import * as yup from "yup";

const geoRegex = /^[ა-ჰ]+$/;
const emailRegex = /[a-z0-9](\.?[a-z0-9]){5,}@redberry\.ge$/;
const numberRegex = /^(\+?995)?(79\d{7}|5\d{8})$/;

export const schemaEmployee = yup.object().shape({
  სახელი: yup
    .string()
    .matches(geoRegex, "გამოიყენე ქართული ასოები")
    .min(2, "უნდა შეიცვადეს მინიმუმ 2 სიმბოლოს")
    .required("ველის შევსება სავალდებულოა"),
  გვარი: yup
    .string()
    .matches(geoRegex, "გამოიყენე ქართული ასოები")
    .min(2, "უნდა შეიცვადეს მინიმუმ 2 სიმბოლოს")
    .required("ველის შევსება სავალდებულოა"),
  თიმი: yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  }),
  პოზიცია: yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  }),
  მეილი: yup
    .string()
    .email()
    .matches(emailRegex, "გამოიყენე @redberry.ge-ს იმეილი")
    .required("ველის შევსება სავალდებულოა"),
  ტელეფონის_ნომერი: yup
    .string()
    .matches(numberRegex, "გამოიყენე ქართული მობ-ნომრის ფორმატი")
    .required("ველის შევსება სავალდებულოა"),
});
