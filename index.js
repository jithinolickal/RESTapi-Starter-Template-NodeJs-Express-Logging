const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());

//Importing routes
require("./routes/index.js")(app);

//App Listening on PORT
app.listen(process.env.PORT || 3050, () => {
  console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
});
