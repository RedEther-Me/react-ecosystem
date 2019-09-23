import React from "react";

export default ({ to, label }) => (
  <a class="dropdown-item" href={to}>
    {label}
  </a>
);
