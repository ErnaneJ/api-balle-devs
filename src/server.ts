import "reflect-metadata";
import 'express-async-errors';
import express from "express";
import './database';
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use( (err, req, res, next) => {
    return res.json({
      status: "Error",
      message: err.message
    });
  }
);

app.listen(process.env['PORT'] || 3001, () => console.log("🔥 The server is running..."));