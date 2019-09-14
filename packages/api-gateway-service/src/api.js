// ./app.js
const path = require("path");
const express = require("express");
const expressOpenApi = require("express-openapi");
const bodyParser = require("body-parser");
const axios = require("axios").default;

const { port } = require("config");

const registrationService = require("./services/registrationService");
const v1ApiDoc = require("./api-doc");

const { initialize } = expressOpenApi;

const app = express();
app.use(bodyParser.json());

const errorMiddleware = (...err) => {
  console.log(err);
};

initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  errorMiddleware,
  dependencies: {
    registrationService
  },
  paths: path.resolve(__dirname, "controllers")
});

app.all("/api/:serviceName/*", async (req, res) => {
  const { params, query, method } = req;
  const { serviceName, "0": path } = params;
  const service = registrationService.getAvailableService(serviceName);

  // console.log("api hit", serviceName, service, path, query, method);

  if (!service) {
    res.status(404).send();
    return;
  }

  const api = axios[method.toLowerCase()];

  try {
    const { status, body } = await api(`${service.baseUrl}${path}`);
    res.status(status).send(body);
  } catch (err) {
    const { status, body } = err.response;
    res.status(status).send(body);
  }
});

app.listen(port);
