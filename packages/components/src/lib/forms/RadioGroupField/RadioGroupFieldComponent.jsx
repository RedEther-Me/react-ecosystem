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
      <label className="radiocheck">
        {label}
        <input type="radio" name={name} />
        <span className="checkmark"></span>
      </label>
    ))}
  </Fragment>
);

export default RadioGroupFieldComponent;
