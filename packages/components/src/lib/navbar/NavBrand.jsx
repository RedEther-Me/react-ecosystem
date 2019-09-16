import React from "react";
import classnames from "classnames";

export default ({ className, children }) => (
  <a className={classnames("navbar-brand", className)} href="#">
    {children}
  </a>
);
