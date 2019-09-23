import React from "react";
import classnames from "classnames";

export default ({ children, isFluid }) => (
  <div
    className={classnames({ container: !isFluid, "container-fluid": isFluid })}
  >
    {children}
  </div>
);
