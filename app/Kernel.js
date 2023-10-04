const { logger } = require("./middlewares/logger");

Kernel = {
  global: [logger],
  web: [],
  api: [],
};

module.exports = Kernel;
