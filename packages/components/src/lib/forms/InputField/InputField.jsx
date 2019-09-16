import React from "react";
import { Field } from "formik";
import InputFieldWrapper from "./InputFieldWrapper";

const InputField = ({ name, label, type, helpText }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { value, onBlur, onChange } = field;
      const { errors, touched, submitCount } = form;

      return (
        <InputFieldWrapper
          {...{
            id: name,
            name,
            label,
            helpText,
            type,
            errors: errors[name],
            touched: touched[name] || submitCount > 0,
            value,
            onChange,
            onBlur
          }}
        />
      );
    }}
  />
);

export default InputField;
