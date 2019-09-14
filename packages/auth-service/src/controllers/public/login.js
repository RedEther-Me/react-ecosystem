// ./api-v1/paths/worlds.js
module.exports = function() {
  function POST(req, res, next) {
    const { body } = req;
    const { username, password } = body;

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
    POST
  };
};
