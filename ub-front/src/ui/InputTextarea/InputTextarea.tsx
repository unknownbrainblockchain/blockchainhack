import React from "react";
import { TextArea } from "./styled";

type Props = {
  placeholder?: string;
};

const InputTextarea = ({ placeholder, ...props }: Props) => {
  return <TextArea placeholder={placeholder} {...props} />;
};

export default InputTextarea;
