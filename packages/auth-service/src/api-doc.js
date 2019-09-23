// ./api-v1/api-doc.js

const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "A getting started API.",
    version: "1.0.0"
  },
  definitions: {
    Login: {
      type: "object",
      properties: {
        username: {
          description: "The username to authenticate",
          type: "string"
        },
        password: {
          description: "The password used to authenticate the username",
          type: "string"
        }
      },
      required: ["username", "password"]
    }
  },
  paths: {}
};

module.exports = apiDoc;
