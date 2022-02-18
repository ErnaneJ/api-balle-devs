import "reflect-metadata";
import 'express-async-errors';
import express from "express";
import cors from "cors";
import './database';
import { routes } from "./routes";

const app = express();

const allowedOrigins = ['http://localhost:5000', 'http://localhost:3000', 'https://ballerinidevs.netlify.app/'];
app.use(cors());
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