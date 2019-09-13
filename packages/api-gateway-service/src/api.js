// ./app.js
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");
const v1WorldsService = require("./services/worldsService");
const v1ApiDoc = require("./api-doc");

const { initialize } = expressOpenApi;

const app = express();
initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {
    worldsService: v1WorldsService
  },
  paths: path.resolve(__dirname, "controllers")
});

app.listen(3000);
