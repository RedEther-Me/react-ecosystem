// ./api-v1/paths/worlds.js
module.exports = function() {
  function GET(req, res, next) {
    console.log("----------- yay -----------------");
    res.status(200).json({ valid: true });
  }

  function POST(req, res, next) {
    const { body } = req;
    const { username, password } = body;

    console.log(username, password);

    res.status(200).json({ valid: true });
  }

  // NOTE: We could also use a YAML string here.
  POST.apiDoc = {
    summary: "Returns worlds by name.",
    operationId: "getWorlds",
    parameters: [
      {
        in: "query",
        name: "worldName",
        required: true,
        type: "string"
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
    GET,
    POST
  };
};
