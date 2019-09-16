import React from "react";

import { Row, Col } from "../../lib";
import InputFieldView from "./InputFieldView";
import SelectFieldView from "./SelectFieldView";
import RadioFieldView from "./RadioFieldView";
import CheckboxFieldView from "./CheckboxFieldView";

export default () => (
  <Row>
    <Col>
      <CheckboxFieldView />
      <InputFieldView />
      <RadioFieldView />
      <SelectFieldView />
    </Col>
  </Row>
);
