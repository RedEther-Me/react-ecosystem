import React from "react";
import classnames from "classnames";

export default props => (
  <button className={classnames(props.className, "btn")}>
    {props.children}
  </button>
);
