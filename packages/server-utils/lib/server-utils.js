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
          jwt: {
            action: {
              secretOrPublicKey: "localhost"
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
