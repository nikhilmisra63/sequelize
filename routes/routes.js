const express = require("express");
const db = require("../models/index");
const bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.text());

// routes
const vaildId = (req, res, next) => {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
};
// show all data
app.get("/api/user/show/all-records", (req, res) => {
  db.user
    .findAll()
    .then(user => {
      console.log(user);
      res.send(user);
    })
    .catch(err => console.log(err));
});

// add data
app.post("/api/user/add-records", (req, res) => {
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
app.put("/api/user/update-records/:id", vaildId, (req, res) => {
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
app.delete("/api/user/delete/:id", vaildId, (req, res) => {
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

app.get("/api/user/show/:id", vaildId, (req, res) => {
  db.user
    .findAll({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      if (result) {
        res.send(result);
      } else {
      }
    })
    .catch(err => console.log(err));
});
module.exports = app;
