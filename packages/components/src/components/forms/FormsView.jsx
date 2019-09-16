import React from "react";

import { Row, Col } from "../../lib";
import InputFieldView from "./InputFieldView";
import SelectFieldView from "./SelectFieldView";
import RadioFieldView from "./RadioFieldView";

export default () => (
  <Row>
    <Col>
      <InputFieldView />
      <RadioFieldView />
      <SelectFieldView />
    </Col>
  </Row>
);
