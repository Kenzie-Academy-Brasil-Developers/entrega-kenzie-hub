import { Input } from "./CustomInputStyles";

export const CustomInput = ({ placeholder, name }) => {
  return (
    <>
      <Input name={name} placeholder={placeholder} />
    </>
  );
};
