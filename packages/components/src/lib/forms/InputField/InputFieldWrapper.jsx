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
  touched,
  type = "text",
  className,
  onChange,
  onBlur
}) => {
  const hasErrors = touched && errors && errors.length > 0;
  return (
    <FieldWrapper {...{ id, label, helpText, errors, touched }}>
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
