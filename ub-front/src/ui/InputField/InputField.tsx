import React from "react";
import { Field } from "./styled";

type Props = {
  placeholder?: string;
};

const InputField = ({ placeholder, ...props }: Props) => {
  return <Field placeholder={placeholder} type="text" {...props} />;
};

export default InputField;
