// ./api-v1/paths/worlds.js
module.exports = function(registrationService) {
  function post(req, res, next) {
    const { body } = req;
    const { name, baseUrl } = body;

    console.log("----", JSON.stringify(body));

    res
      .status(200)
      .json(registrationService.addAvailableService(name, baseUrl));
  }

  // NOTE: We could also use a YAML string here.
  post.apiDoc = {
    summary: "Returns worlds by name.",
    parameters: [
      {
        in: "body",
        name: "body",
        required: true,
        schema: {
          $ref: "#/definitions/Registration"
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
    post
  };
};
