import React from "react";

const CheckboxFieldComponent = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur
}) => {
  return (
    <label key={value} className="radiocheck">
      {label}
      <input
        type="checkbox"
        {...{ id, name, value, onChange, onBlur }}
        checked={!!value}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default CheckboxFieldComponent;
