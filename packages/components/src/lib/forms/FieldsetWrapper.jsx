import React from "react";
import classnames from "classnames";

export default ({ id, label, helpText, errors, children, noLabel }) => (
  <fieldset className="form-group">
    <legend className={classnames({ "sr-only": noLabel })}>{label}</legend>
    {children}
    {helpText && (
      <small id={`${id}-help`} className="form-text">
        {helpText}
      </small>
    )}
    {errors && (
      <div id={`${id}-errors`} className="invalid-feedback">
        {errors}
      </div>
    )}
  </fieldset>
);
