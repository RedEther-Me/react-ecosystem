import React from "react";
import classnames from "classnames";

export default ({ className, type, onClick, children }) => (
  <button {...{ type, onClick }} className={classnames(className, "btn")}>
    {children}
  </button>
);
