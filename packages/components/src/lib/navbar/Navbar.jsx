import React from "react";
import classnames from "classnames";

export default ({ hasBottomMargin, className, children }) => (
  <nav
    className={classnames(
      "navbar navbar-expand-lg navbar-light bg-light",
      className,
      {
        "mb-3": hasBottomMargin
      }
    )}
  >
    {children}
  </nav>
);
