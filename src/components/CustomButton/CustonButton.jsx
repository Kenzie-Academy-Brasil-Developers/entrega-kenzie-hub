import { Button } from "./CustonButtonStyles";

export const CustonButton = ({ children, onCLick }) => {
  return (
    <>
      <Button onClick={onCLick}>{children}</Button>
    </>
  );
};
