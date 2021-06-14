/* 
This is the parent route File.
All individual routes are imported here.
 */
module.exports = (app) => {
  require("./example.route.js")(app); //Example route
};
