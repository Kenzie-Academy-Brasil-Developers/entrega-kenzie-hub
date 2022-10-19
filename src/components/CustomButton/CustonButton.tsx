import { ButtonHTMLAttributes } from "react";
import { Button } from "./CustonButtonStyles";

interface ButtonPropsInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
}

export const CustonButton = ({
  children,
  startIcon,
  ...rest
}: ButtonPropsInterface) => {
  return (
    <>
      <Button {...rest}>
        {startIcon}
        {children}
      </Button>
    </>
  );
};
