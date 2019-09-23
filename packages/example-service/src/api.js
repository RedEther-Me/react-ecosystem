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

const listener = app.listen(port, () =>
  console.log(`Service started on port ${port}`)
);
