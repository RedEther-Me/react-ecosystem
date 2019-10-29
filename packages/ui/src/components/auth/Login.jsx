import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Row, Col, Button, InputField } from "@ether/components";

import { login } from "../../utils/api/auth";

function Login() {
  return (
    <Row>
      <Col className="col-lg-2 col-md-4 col-8 offset-lg-5 offset-md-4 offset-2">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required(),
            password: Yup.string().required()
          })}
          onSubmit={({ username, password }) => {
            login(username, password);
          }}
          render={() => {
            return (
              <Form>
                <Row>
                  <Col>
                    <InputField name="username" label="Username" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <InputField name="password" label="Password" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button className="btn-primary">Log In</Button>
                    <Button type="button" className="btn-link">
                      Register
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        />
      </Col>
    </Row>
  );
}

export default Login;
