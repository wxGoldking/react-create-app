const express = require("express");
const fs = require("fs");
const formidable = require("formidable");
const app = express();
var appData = require("./data.json");
var apiRoutes = express.Router();
app.use("/api", apiRoutes);

app.get("/api/gettodo", (req, res) => {
  res.json(appData.todo);
}),
  app.post("/api/addtodo", (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
      let id = 0;
      let title = fields.title;
      appData.todo.forEach((item, index) => {
        if (item.id >= id) {
          id = item.id + 1;
        }
      });
      appData.todo.push({ id, title, done: false });
      fs.writeFile(__dirname + "/data.json", JSON.stringify(appData), function(
        err
      ) {
        if (err) {
          console.log(err);
        } else if (!err) {
          res.json(appData.todo);
        }
      });
    });
  }),
  app.delete("/api/deltodo", (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
      let id = fields.id;
      appData.todo = appData.todo.filter((item, index) => {
        return item.id != id;
      });
      fs.writeFile(__dirname + "/data.json", JSON.stringify(appData), function(
        err
      ) {
        if (err) {
          console.log(err);
        } else if (!err) {
          res.json(appData.todo);
        }
      });
    });
  }),
  app.post("/api/changetodo", (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
      let id = fields.id;
      let k = fields.k;
      let v = fields.v;
      appData.todo.forEach((item, index) => {
        if (item.id == id) {
          item[k] = v;
        }
      });
      fs.writeFile(__dirname + "/data.json", JSON.stringify(appData), function(
        err
      ) {
        if (err) {
          console.log(err);
        } else if (!err) {
          res.json(appData.todo);
        }
      });
    });
  });
app.listen(9527)
