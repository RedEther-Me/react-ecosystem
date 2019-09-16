import React, { Fragment } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import * as scope from "../../lib";

const { Row, Col, Card, CardBody } = scope;

const code = `
<Formik
  initialValues={{ firstField: ''}}
  validationSchema={Yup.object().shape({
    firstField: Yup.string().required(),
  })}
  onSubmit={() => {}}
  render={() => (
    <Form>
      <InputField
        name="firstField"
        label="First Field"
        helpText="You can test the validation by leaving the field blank"
        />
      <Button className="btn-primary">Submit</Button>
    </Form>
  )} />
`;

export default () => (
  <Fragment>
    <Row>
      <Col>
        <h2>Input Field</h2>
      </Col>
    </Row>
    <Row>
      <LiveProvider
        {...{ code, scope: { ...scope, Formik, Form, Yup, Fragment } }}
      >
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
