import Input from "library/component/input/Input";
import { useForm } from "react-hook-form";
import Button from "library/component/button/Button";

function EmployeeSection() {
  const { register, handleSubmit } = useForm();
  //სახელის_ვალიდაცია_ობიექტი_უნდა_იყოს
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input {...register("firstName")} placeholder="გრიშა"></input>
        <Input {...register("lastName")} placeholder="ლუკა"></Input>
        <Button>შემდეგი</Button>
      </form>
    </>
  );
}

export default EmployeeSection;
