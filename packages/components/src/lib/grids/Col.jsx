import React from "react";
import classnames from "classnames";

export default ({ className, children }) => (
  <div className={classnames("col", className)}>{children}</div>
);
