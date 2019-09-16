import React, { Fragment } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Formik } from "formik";
import * as Yup from "yup";

import * as scope from "../../lib";

const { Row, Col, Card, CardBody } = scope;

const code = `
<Formik
  initialValues={{ firstField: ''}}
  validationSchema={Yup.object().shape({
    firstField: Yup.string().required(),
  })}
  render={() => (
    <SelectField
      name="firstField"
      label="First Field"
      helpText="You can test the validation by leaving the field blank"
      options={[
        { label: 'option1', value: 1 },
        { label: 'option2', value: 2 },
        { label: 'option3', value: 3 },
        { label: 'option4', value: 4 },
      ]}
      />
  )} />
`;

export default () => (
  <Fragment>
    <Row>
      <Col>
        <h2>Select Field</h2>
      </Col>
    </Row>
    <Row>
      <LiveProvider {...{ code, scope: { ...scope, Formik, Yup, Fragment } }}>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <LiveEditor />
                </Col>
              </Row>
              <Row>
                <Col>
                  <LiveError />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <LivePreview />
            </CardBody>
          </Card>
        </Col>
      </LiveProvider>
    </Row>
  </Fragment>
);
