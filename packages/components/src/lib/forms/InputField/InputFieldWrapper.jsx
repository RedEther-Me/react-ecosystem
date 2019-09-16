import React from "react";

import FieldWrapper from "../FieldWrapper";
import InputFieldComponent from "./InputFieldComponent";

const InputFieldWrapper = ({
  id,
  name,
  label,
  value,
  helpText,
  errors,
  type = "text",
  className,
  onChange,
  onBlur
}) => {
  const hasErrors = errors && errors.length > 0;
  return (
    <FieldWrapper {...{ id, label, helpText, errors }}>
      <InputFieldComponent
        {...{
          id,
          name,
          value,
          hasHelpText: !!helpText,
          hasErrors,
          type,
          className,
          onChange,
          onBlur
        }}
      />
    </FieldWrapper>
  );
};

export default InputFieldWrapper;
