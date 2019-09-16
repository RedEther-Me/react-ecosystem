import React from "react";
import classnames from "classnames";

const SelectFieldComponent = ({
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
  <select
    id={id}
    name={name}
    className={classnames("form-control", className, {
      "is-invalid": hasErrors
    })}
    aria-describedby={classnames({
      [`${id}-help`]: hasHelpText,
      [`${id}-errors`]: hasErrors
    })}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  >
    <option key="unselected">Select One Option</option>
    {options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default SelectFieldComponent;
