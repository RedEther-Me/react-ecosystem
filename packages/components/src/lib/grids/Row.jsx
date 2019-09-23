import React from "react";
import classnames from "classnames";

export default ({ hasBottomMargin, className, children }) => (
  <div className={classnames("row", className, { "mb-3": hasBottomMargin })}>
    {children}
  </div>
);
