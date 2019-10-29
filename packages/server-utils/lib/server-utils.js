const axios = require("axios").default;

module.exports = {
  async registerService({ apiGateway, serviceName, port }) {
    await axios.put(`${apiGateway}/api-endpoints/${serviceName}Public`, {
      host: "localhost",
      paths: `/${serviceName}-public/*`
    });

    await axios.put(`${apiGateway}/api-endpoints/${serviceName}`, {
      host: "localhost",
      paths: `/${serviceName}/*`
    });

    // TODO: Make this retrieve current config and add if needed
    await axios.put(`${apiGateway}/service-endpoints/${serviceName}Service`, {
      url: `http://localhost:${port}`
    });

    await axios.put(
      `${apiGateway}/service-endpoints/${serviceName}PublicService`,
      {
        url: `http://localhost:${port}/public`
      }
    );

    // TODO: Make this retrieve current config and add if needed
    await axios.put(`${apiGateway}/pipelines/${serviceName}Service`, {
      apiEndpoints: [serviceName],
      policies: [
        {
          cors: {
            action: {
              origin: "http://localhost:3000",
              methods: "HEAD,GET,PUT,PATCH,POST,DELETE",
              credentials: true
            }
          }
        },
        {
          jwt: {
            action: {
              secretOrPublicKey: "localhost",
              checkCredentialExistence: "true"
            }
          }
        },
        {
          proxy: [
            {
              action: {
                serviceEndpoint: `${serviceName}Service`,
                changeOrigin: true,
                prependPath: true,
                ignorePath: false,
                stripPath: true
              }
            }
          ]
        }
      ]
    });

    await axios.put(`${apiGateway}/pipelines/${serviceName}PublicService`, {
      apiEndpoints: [`${serviceName}Public`],
      policies: [
        {
          cors: {
            action: {
              origin: "http://localhost:3000",
              methods: "HEAD,GET,PUT,PATCH,POST,DELETE"
            }
          }
        },
        {
          proxy: [
            {
              action: {
                serviceEndpoint: `${serviceName}PublicService`,
                changeOrigin: true,
                prependPath: true,
                ignorePath: false,
                stripPath: true
              }
            }
          ]
        }
      ]
    });
  }
};
