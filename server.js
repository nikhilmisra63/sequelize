const express = require("express");
const db = require("./models/index");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.text());

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("connected...");
  });
});
// routes

// show all data
app.get("/api/", (req, res) => {
  db.user
    .findAll()
    .then(user => {
      console.log(user);
      res.send(user);
    })
    .catch(err => console.log(err));
});

// add data
app.post("/api/add", (req, res) => {
  db.user
    .create({
      name: req.body.name,
      address: req.body.address
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});
// update data
app.put("/api/update/:id", (req, res) => {
  db.user
    .update(
      {
        name: req.body.name,
        address: req.body.address
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});
// delete data
app.delete("/api/delete/:id", (req, res) => {
  db.user
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});

// show by id

app.get("/api/:id", (req, res) => {
  db.user
    .findAll({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
});
