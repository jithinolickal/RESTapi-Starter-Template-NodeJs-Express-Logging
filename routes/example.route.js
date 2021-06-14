/* 
This route file will manage all routes for the 'example'
 */

module.exports = (app) => {

  //Importing Controller file
  const example = require("../controllers/example.controller.js");

  //get all user
  app.get("/api/example/getExample", example.getExample);

};
