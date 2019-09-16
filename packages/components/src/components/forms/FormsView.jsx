import React from "react";

import { Row, Col } from "../../lib";

import CheckboxFieldView from "./CheckboxFieldView";
import CheckboxGroupFieldView from "./CheckboxGroupFieldView";
import InputFieldView from "./InputFieldView";
import RadioFieldView from "./RadioFieldView";
import SelectFieldView from "./SelectFieldView";

export default () => (
  <Row>
    <Col>
      <CheckboxFieldView />
      <CheckboxGroupFieldView />
      <InputFieldView />
      <RadioFieldView />
      <SelectFieldView />
    </Col>
  </Row>
);
