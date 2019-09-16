import React from "react";
import classnames from "classnames";

const InputFieldComponent = ({
  id,
  name,
  value,
  hasHelpText,
  hasErrors,
  type = "text",
  className,
  onChange,
  onBlur
}) => (
  <input
    id={id}
    name={name}
    type={type}
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
  />
);

export default InputFieldComponent;
