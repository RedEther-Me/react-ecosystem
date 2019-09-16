import React from "react";

export default ({ id, label, helpText, errors, children }) => (
  <fieldset className="form-group">
    <legend>{label}</legend>
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
