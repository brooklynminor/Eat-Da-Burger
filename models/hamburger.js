// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var hamburger = {
  all: function(hb) {
    orm.all("hamburgers", function(res) {
      hb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, hb) {
    orm.create("hamburgers", cols, vals, function(res) {
      hb(res);
    });
  },
  update: function(objColVals, condition, hb) {
    orm.update("hamburgers", objColVals, condition, function(res) {
      hb(res);
    });
  },
  delete: function(condition, hb) {
    orm.delete("hamburgers", condition, function(res) {
      hb(res);
    });
  }
};

// Export the database functions for the controller (hamburgerController.js).
module.exports = hamburger;
