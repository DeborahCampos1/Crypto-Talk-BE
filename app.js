const express = require("express");
const cors = require("cors");
const app = express();
const resourcesController = require("./controllers/resourcesController.js");


app.use(cors());
app.use(express.json());
app.use("/resources", resourcesController);


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Test DataBase</h1>");
});

app.get("*", (req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;