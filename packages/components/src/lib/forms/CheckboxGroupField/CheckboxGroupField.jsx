import React from "react";
import { Field } from "formik";

import CheckboxGroupFieldWrapper from "./CheckboxGroupFieldWrapper";

const CheckboxGroupField = ({ name, label, helpText, options }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { value, onBlur, onChange } = field;
      const { errors, touched, submitCount } = form;

      console.log(field, form);

      return (
        <CheckboxGroupFieldWrapper
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

export default CheckboxGroupField;
