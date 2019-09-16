import React from "react";
import { Field } from "formik";

import SelectFieldWrapper from "./SelectFieldWrapper";

const InputField = ({ name, label, helpText, options }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { value, onBlur, onChange } = field;
      const { errors, touched, submitCount } = form;

      return (
        <SelectFieldWrapper
          {...{
            id: name,
            name,
            label,
            helpText,
            errors: errors[name],
            touched: touched[name] || submitCount > 0,
            value,
            onChange,
            onBlur,
            options
          }}
        />
      );
    }}
  />
);

export default InputField;
