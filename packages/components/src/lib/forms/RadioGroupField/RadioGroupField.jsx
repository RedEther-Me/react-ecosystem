import React from "react";
import { Field } from "formik";

import RadioGroupFieldWrapper from "./RadioGroupFieldWrapper";

const RadioGroupField = ({ name, label, helpText, options }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { value, onBlur, onChange } = field;
      const { errors, touched, submitCount } = form;

      return (
        <RadioGroupFieldWrapper
          {...{
            id: name,
            name,
            label,
            helpText,
            errors: errors && errors[name],
            touched: (touched && touched[name]) || submitCount > 0,
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

export default RadioGroupField;
