import React, { Fragment } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import * as scope from "../../lib";

const { Row, Col, Card, CardBody } = scope;

const code = `
<Navbar>
  <NavBrand>NavBrand</NavBrand>
  <NavbarContent>
    <NavbarGroup>
      <NavItem isActive>Home</NavItem>
      <NavItem>About</NavItem>
      <NavDropdown label="Dropdown">
        <NavDropdownItem label="First Option" to="#" />
        <NavDropdownItem label="Second Option" to="#" />
        <NavDropdownDivider />
        <NavDropdownItem label="Third Option" to="#" />
      </NavDropdown>
    </NavbarGroup>
    <NavbarGroup tag="div" isRight>
      <NavItem>Option</NavItem>
    </NavbarGroup>
  </NavbarContent>
</Navbar>
`;

export default () => (
  <Fragment>
    <Row>
      <Col>
        <h2>Global Navigation</h2>
      </Col>
    </Row>
    <Row>
      <LiveProvider
        {...{ code, scope: { ...scope, Formik, Form, Yup, Fragment } }}
      >
        <Col>
          <Row className="mb-3">
            <Col>
              <Card>
                <CardBody>
                  <LiveEditor />
                </CardBody>
              </Card>
            </Col>
            <Col>
              <LiveError />
            </Col>
          </Row>
          <Row>
            <Col>
              <LivePreview />
            </Col>
          </Row>
        </Col>
      </LiveProvider>
    </Row>
  </Fragment>
);
