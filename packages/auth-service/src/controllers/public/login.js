const axios = require("axios").default;
const jwt = require("jsonwebtoken");

const { apiGateway } = require("config");

module.exports = function() {
  async function POST(req, res, next) {
    try {
      const { body } = req;
      const { username, password } = body;

      // TODO: Validate password

      const { data } = await axios.post(`${apiGateway}/credentials`, {
        consumerId: username,
        type: "jwt"
      });
      const { keyId, keySecret } = data;
      console.log(data);

      const payload = {
        sub: keyId
      };
      const options = {
        issuer: "react-ecosystem",
        audience: "react-ecosystem"
      };

      const token = jwt.sign(payload, "localhost", options);

      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ err });
    }
  }

  // NOTE: We could also use a YAML string here.
  POST.apiDoc = {
    summary: "Log the user in",
    parameters: [
      {
        in: "body",
        name: "body",
        required: true,
        schema: {
          $ref: "#/definitions/Login"
        }
      }
    ],
    responses: {
      200: {
        description: "A list of worlds that match the requested name.",
        schema: {
          type: "array",
          items: {
            $ref: "#/definitions/World"
          }
        }
      },
      default: {
        description: "An error occurred",
        schema: {
          additionalProperties: true
        }
      }
    }
  };

  return {
    POST
  };
};
