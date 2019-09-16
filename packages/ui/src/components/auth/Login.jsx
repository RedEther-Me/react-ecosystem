import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button, InputField } from "@ether/components";

import { login } from "../../utils/api/auth";

function Login() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
      })}
      onSubmit={() => {}}
      render={props => {
        console.log(props);
        return (
          <Form>
            <InputField name="username" label="Username" />
            <InputField name="password" label="Password" />
            <Button className="btn-primary">Submit</Button>
          </Form>
        );
      }}
    />
  );
}

export default Login;
