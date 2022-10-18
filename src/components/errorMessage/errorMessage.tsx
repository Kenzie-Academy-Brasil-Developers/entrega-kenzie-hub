import { ErrorMessage } from "./errorMessageStyles";

interface InputErrorMessageInterface {
  children: React.ReactNode;
}

export const InputErrorMessage = ({
  children,
}: InputErrorMessageInterface) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};
