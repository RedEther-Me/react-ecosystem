import React, { Fragment } from "react";

const RadioGroupFieldComponent = ({
  id,
  name,
  value,
  hasHelpText,
  hasErrors,
  className,
  onChange,
  onBlur,
  options = []
}) => (
  <Fragment>
    {options.map(({ label, value }) => (
      <label key={value} className="radiocheck">
        {label}
        <input type="radio" {...{ id, name, value, onChange, onBlur }} />
        <span className="checkmark"></span>
      </label>
    ))}
  </Fragment>
);

export default RadioGroupFieldComponent;
