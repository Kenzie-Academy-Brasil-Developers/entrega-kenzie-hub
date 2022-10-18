import { Label } from "./CustomLabelsStyles";

interface CustomLabelInterface {
  children: React.ReactNode;
  labelName?: string;
}

export const CustomLabel = ({
  children,
  labelName,
}: CustomLabelInterface) => {
  return (
    <>
      <Label htmlFor={labelName}>{children}</Label>
    </>
  );
};
