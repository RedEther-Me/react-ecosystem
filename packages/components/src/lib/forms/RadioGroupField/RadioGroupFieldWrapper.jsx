import React from "react";

import FieldsetWrapper from "../FieldsetWrapper";
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
    <FieldsetWrapper {...{ id, label, helpText, errors, touched }}>
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
    </FieldsetWrapper>
  );
};

export default RadioGroupFieldWrapper;
