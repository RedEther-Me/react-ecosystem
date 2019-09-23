import React from "react";
import { Field } from "formik";
import CheckboxFieldWrapper from "./CheckboxFieldWrapper";

const CheckboxField = ({ name, label, type, helpText }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { value, onBlur, onChange } = field;
      const { errors, touched, submitCount } = form;

      return (
        <CheckboxFieldWrapper
          {...{
            id: name,
            name,
            label,
            helpText,
            type,
            errors: errors && errors[name],
            touched: (touched && touched[name]) || submitCount > 0,
            value,
            onChange,
            onBlur
          }}
        />
      );
    }}
  />
);

export default CheckboxField;
