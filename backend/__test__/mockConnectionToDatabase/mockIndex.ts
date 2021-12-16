import "reflect-metadata";
import express from 'express';
import "./mockConnectionTest";

const cors = require('cors');
const routes = require("../../src/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("🔥  It's works at server to tests"));

module.exports = app;