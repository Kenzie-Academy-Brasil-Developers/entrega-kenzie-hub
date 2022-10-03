import { Button } from "./CustonButtonStyles";

export const CustonButton = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <>
      <Button {...rest}>
        {startIcon}
        {children}
      </Button>
    </>
  );
};
