import React from "react";

import FieldWrapper from "../FieldWrapper";
import RadioGroupFieldComponent from "./RadioGroupFieldComponent";

const RadioGroupFieldWrapper = ({
  id,
  name,
  label,
  value,
  helpText,
  errors,
  touched,
  options,
  className,
  onChange,
  onBlur
}) => {
  const hasErrors = touched && errors && errors.length > 0;
  return (
    <FieldWrapper {...{ id, label, helpText, errors, touched }}>
      <RadioGroupFieldComponent
        {...{
          id,
          name,
          value,
          hasHelpText: !!helpText,
          hasErrors,
          options,
          className,
          onChange,
          onBlur
        }}
      />
    </FieldWrapper>
  );
};

export default RadioGroupFieldWrapper;
