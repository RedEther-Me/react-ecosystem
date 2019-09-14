// ./services/worldsService.js

const services = {};

const registrationService = {
  getAvailableService(name) {
    return services[name] ? services[name] : undefined;
  },
  addAvailableService(name, baseUrl) {
    services[name] = { baseUrl };
  }
};

module.exports = registrationService;
