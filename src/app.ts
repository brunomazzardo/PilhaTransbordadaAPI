
import { Response } from "express";
const bodyParser = require("body-parser");

const express = require("express");
// Create Express server
const app = express();

// Express configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Oi gente"));

