// ./app.js
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");
const axios = require("axios").default;

const { port, apiGateway, serviceName } = require("config");

const v1ApiDoc = require("./api-doc");

const { initialize } = expressOpenApi;

const app = express();

initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {},
  paths: path.resolve(__dirname, "controllers")
});

const listener = app.listen(port);

const register = async () => {
  try {
    console.log(`registering ${serviceName} on ${apiGateway}`);
    const result = await axios.post(`${apiGateway}/v1/register`, {
      name: serviceName,
      baseUrl: `http://localhost:${port}/`
    });

    const { status } = result;
    if (status !== 200) {
      console.log("Unable to connect to api-gateway, exiting...");
      // console.log(result.json());

      listener.close(function() {
        console.log("Closed out remaining connections.");
        // Close db connections, etc.
      });

      setTimeout(function() {
        console.error(
          "Could not close connections in time, forcefully shutting down"
        );
        process.exit(1);
      }, 30 * 1000);

      return;
    }

    setTimeout(register, 30 * 1000);
  } catch (err) {
    console.log(err);
    listener.close();
  }
};

register();
