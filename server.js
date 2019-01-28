const db = require("./models/index");
const app = require("./routes/routes");
const PORT = process.env.PORT || 4000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("connected...");
  });
});
