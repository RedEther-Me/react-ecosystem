import React from "react";
import classnames from "classnames";
export default (function (props) {
  return React.createElement("button", {
    className: classnames(props.className, "btn")
  }, props.children);
});