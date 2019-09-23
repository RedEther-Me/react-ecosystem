import React from "react";

export default ({ id, label, helpText, errors, children, noLabel }) => (
  <div className="form-group">
    {!noLabel && <label htmlFor={id}>{label}</label>}
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
