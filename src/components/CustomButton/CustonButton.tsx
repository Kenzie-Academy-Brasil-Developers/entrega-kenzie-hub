import { Button } from "./CustonButtonStyles";

interface ButtonPropsInterface {
  children: React.ReactNode;
  startIcon: React.ReactNode;
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
