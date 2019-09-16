import React from "react";

import FieldsetWrapper from "../FieldsetWrapper";
import CheckboxGroupFieldComponent from "./CheckboxGroupFieldComponent";

const CheckboxGroupFieldWrapper = ({
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
      <CheckboxGroupFieldComponent
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

export default CheckboxGroupFieldWrapper;
