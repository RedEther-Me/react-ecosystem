import React, { Fragment } from "react";

const CheckboxGroupFieldComponent = ({
  id,
  name,
  value: fieldValue,
  hasHelpText,
  hasErrors,
  className,
  onChange,
  onBlur,
  options = []
}) => {
  const modifiedOnChange = evt => {
    const { value: targetValue } = evt.target;
    const isIncluded = fieldValue.includes(targetValue);
    const updatedValue = isIncluded
      ? fieldValue.filter(v => v !== targetValue)
      : [...fieldValue, targetValue];

    onChange({
      target: {
        name,
        value: updatedValue
      }
    });
  };
  return (
    <Fragment>
      {options.map(({ label, value }) => (
        <label key={value} className="radiocheck">
          {label}
          <input
            type="checkbox"
            {...{ id, name, value, onChange: modifiedOnChange, onBlur }}
            checked={fieldValue.includes(`${value}`)}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    </Fragment>
  );
};

export default CheckboxGroupFieldComponent;
