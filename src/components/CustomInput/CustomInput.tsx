import React, {
  FunctionComponent,
  InputHTMLAttributes,
} from "react";
import { Input } from "./CustomInputStyles";

interface CustomInputInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
}

export const CustomInput: FunctionComponent<CustomInputInterface> =
  React.forwardRef((props, ref) => {
    return <Input {...props} ref={ref as any} />;
  });
CustomInput.displayName = "CustomInput";
