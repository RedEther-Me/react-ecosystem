import React from "react";

import FieldsetWrapper from "../FieldsetWrapper";
import CheckboxFieldComponent from "./CheckboxFieldComponent";

const CheckboxFieldWrapper = ({
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
    <FieldsetWrapper {...{ id, label, helpText, errors, touched }} noLabel>
      <CheckboxFieldComponent
        {...{
          id,
          name,
          label,
          value,
          hasHelpText: !!helpText,
          hasErrors,
          type,
          className,
          onChange,
          onBlur
        }}
      />
    </FieldsetWrapper>
  );
};

export default CheckboxFieldWrapper;
