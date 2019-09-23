import React from "react";

import {
  Navbar,
  NavBrand,
  NavbarContent,
  NavDropdown,
  NavDropdownItem,
  NavbarGroup
} from "../lib";

export default () => (
  <Navbar hasBottomMargin>
    <NavBrand>NavBrand</NavBrand>
    <NavbarContent>
      <NavbarGroup>
        <NavDropdown label="Components">
          <NavDropdownItem label="Navigation" to="/navigation" />
          <NavDropdownItem label="Forms" to="/forms" />
        </NavDropdown>
      </NavbarGroup>
    </NavbarContent>
  </Navbar>
);
