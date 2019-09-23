// ./app.js
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");
const bodyParser = require("body-parser");

const { port, apiGateway, serviceName } = require("config");

const { registerService } = require("@ether/server-utils");

const v1ApiDoc = require("./api-doc");

const { initialize } = expressOpenApi;

const app = express();
app.use(bodyParser.json());

initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {},
  paths: path.resolve(__dirname, "controllers")
});

app.listen(port, () => {
  console.log(`Service started on port ${port}`);

  console.log(`registering ${serviceName} on ${apiGateway}`);
  registerService({ apiGateway, serviceName, port });
});
