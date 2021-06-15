import "reflect-metadata";
import express from 'express';
import "./database/connect";

const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("🔥  It's works at server http://localhost:3333"));