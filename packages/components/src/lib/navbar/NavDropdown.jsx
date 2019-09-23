import React, { useState } from "react";
import classnames from "classnames";

export default ({ tagName = "li", isActive, label, children }) => {
  const Tag = tagName;
  const [isOpen, setOpen] = useState(false);

  return (
    <Tag className={classnames("nav-item dropdown")}>
      <a
        class="nav-link dropdown-toggle"
        // href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setOpen(!isOpen)}
      >
        {label}
      </a>
      <div
        class={classnames("dropdown-menu", { show: isOpen })}
        aria-labelledby="navbarDropdown"
      >
        {children}
      </div>
    </Tag>
  );
};
