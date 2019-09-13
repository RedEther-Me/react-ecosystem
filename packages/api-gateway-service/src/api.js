// ./app.js
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");

const { port } = require("config");

const registrationService = require("./services/registrationService");
const v1ApiDoc = require("./api-doc");

const { initialize } = expressOpenApi;

const app = express();

initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {
    registrationService: registrationService
  },
  paths: path.resolve(__dirname, "controllers")
});

app.all("/api/:serviceName/*", (req, res) => {
  const { params, query } = req;
  const { serviceName, "0": path } = params;
  const service = registrationService.getAvailableService(serviceName);

  console.log("api hit", serviceName, service, path, query);

  if (!service) {
    res.status(404).send();
    return;
  }

  res.send(`${service.baseUrl}/${path}`);
});

app.listen(port);
