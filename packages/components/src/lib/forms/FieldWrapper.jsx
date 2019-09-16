import React from "react";

export default ({ id, label, helpText, errors, children }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
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
  </div>
);
