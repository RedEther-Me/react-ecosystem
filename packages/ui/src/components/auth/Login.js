import React, { Fragment, useState } from "react";

import { Button } from "@ether/components";

import { login } from "../../utils/api/auth";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <Fragment>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          login(username, password);
        }}
      >
        <input
          id="username"
          name="username"
          onChange={evt => setUsername(evt.target.value)}
          value={username}
        />
        <input
          id="passsword"
          name="passsword"
          type="password"
          onChange={evt => setPassword(evt.target.value)}
          value={password}
        />
        <Button className="btn-primary">test</Button>
      </form>
    </Fragment>
  );
}

export default Login;
