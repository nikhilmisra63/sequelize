const express = require("express");
const app = express();

const db = require("../models/index");
const PORT = process.env.PORT || 2000;
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.text());

before(async function() {
  await db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log("connected...");
    });
  });
});
require("./functional/user");
