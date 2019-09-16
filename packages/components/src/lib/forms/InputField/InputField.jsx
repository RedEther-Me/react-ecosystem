import React from "react";
import { Field } from "formik";
import InputFieldWrapper from "./InputFieldWrapper";

const InputField = ({ name, label, type, helpText }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const { value, onBlur, onChange } = field;
      const errors = form.errors[name];

      return (
        <InputFieldWrapper
          {...{
            id: name,
            name,
            label,
            helpText,
            type,
            errors,
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
