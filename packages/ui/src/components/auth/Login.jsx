import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Row, Col, Button, InputField } from "@ether/components";

import { login } from "../../utils/api/auth";
import { protectedApi } from "../../utils/api/example";

function Login() {
  return (
    <Row>
      <Col className="col-2 offset-5">
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
                <InputField name="username" label="Username" />
                <InputField name="password" label="Password" />
                <Button className="btn-primary">Submit</Button>
                <Button
                  type="button"
                  onClick={() => {
                    protectedApi();
                  }}
                  className="btn-primary"
                >
                  Test
                </Button>
              </Form>
            );
          }}
        />
      </Col>
    </Row>
  );
}

export default Login;
