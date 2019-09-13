// ./app.js
import express from "express";
import expressOpenApi from "express-openapi";
import v1WorldsService from "./services/worldsService.js";
import v1ApiDoc from "./api-doc.js";

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
  paths: "./controllers/"
});

app.listen(3000);
