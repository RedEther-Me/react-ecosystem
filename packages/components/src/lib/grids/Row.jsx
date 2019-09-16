import React from "react";
import classnames from "classnames";

export default ({ className, children }) => (
  <div className={classnames("row", className)}>{children}</div>
);
