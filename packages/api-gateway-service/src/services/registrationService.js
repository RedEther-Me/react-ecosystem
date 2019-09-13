// ./services/worldsService.js

const services = {};

const registrationService = {
  getAvailableService(name) {
    return services[name] ? [worlds[name]] : undefined;
  },
  addAvailableService(name, baseUrl) {
    services[name] = { baseUrl };
  }
};

module.exports = registrationService;
