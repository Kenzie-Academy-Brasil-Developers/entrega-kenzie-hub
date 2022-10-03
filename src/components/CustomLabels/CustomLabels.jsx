import { Label } from "./CustomLabelsStyles";

export const CustomLabel = ({ children, labelName }) => {
  return (
    <>
      <Label htmlFor={labelName}>{children}</Label>
    </>
  );
};
