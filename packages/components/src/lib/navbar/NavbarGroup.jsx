import React from "react";
import classnames from "classnames";

export default ({ tagName = "ul", isRight = false, children }) => {
  const Tag = tagName;
  return (
    <Tag className={classnames("navbar-nav", { "mr-auto": !isRight })}>
      {children}
    </Tag>
  );
};
