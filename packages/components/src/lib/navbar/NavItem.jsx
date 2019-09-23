import React from "react";
import classnames from "classnames";

export default ({ tagName = "li", isActive, children }) => {
  const Tag = tagName;
  return (
    <Tag className={classnames("nav-item", { active: isActive })}>
      <a class="nav-link" href="#">
        {children} {isActive && <span class="sr-only">(current)</span>}
      </a>
    </Tag>
  );
};
