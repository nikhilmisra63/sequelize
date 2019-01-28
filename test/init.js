const app = require("../routes/routes");
const db = require("../models/index");
const PORT = process.env.PORT || 2000;

before(async function() {
  await db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log("connected...");
    });
  });
});
require("./functional/user");
