import React, { Fragment } from "react";

const RadioGroupFieldComponent = ({
  id,
  name,
  value: fieldValue,
  onChange,
  onBlur,
  options = []
}) => (
  <Fragment>
    {options.map(({ label, value }) => (
      <label key={value} className="radiocheck">
        {label}
        <input
          type="radio"
          {...{ id, name, value, onChange, onBlur }}
          checked={fieldValue === `${value}`}
        />
        <span className="radiomark"></span>
      </label>
    ))}
  </Fragment>
);

export default RadioGroupFieldComponent;
