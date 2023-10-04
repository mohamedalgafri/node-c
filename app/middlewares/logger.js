const fs = require("fs");

exports.logger = (req, res, next) => {
  const log = `${new Date()} - URL(${req.url}) - BODY(${req.body})\n`;
  fs.appendFile(process.env.LOG_FILE, log, () => {});
  next();
};
