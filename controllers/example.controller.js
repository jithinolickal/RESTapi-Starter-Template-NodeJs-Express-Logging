//Importing Logger
const logger = require("../logger/index.js");

//GET-EXAMPLE - /api/example/getExample
exports.getExample = (req, res) => {
  logger.info("GET Request - /api/example/getExample");

  try {

 /* 
  Write your code here...
 */

    const data = {
      status: true,
      data: "This is the response data",
      message: "Data retrieved successfully!",
    };
    res.status(200).send(data);
  } catch (err) {
    //Creating custom error message structure
    const data = {
      status: false,
      data: null,
      message: "Error retrieving Data",
    };
    logger.error(err);
    res.status(500).send(data);
  }
};
