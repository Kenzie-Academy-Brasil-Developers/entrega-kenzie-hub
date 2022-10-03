import React from "react";
import { Input } from "./CustomInputStyles";

export const CustomInput = React.forwardRef(
  (props, ref) => {
    return <Input {...props} ref={ref} />;
  }
);
