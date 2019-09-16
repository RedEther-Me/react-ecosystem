import React from "react";
import classnames from "classnames";

export default ({ className, children }) => (
  <div className={classnames("collapase navbar-collapse", className)}>
    {children}
  </div>
);
