import "reflect-metadata";
import 'express-async-errors';
import express from "express";
import cors from "cors";
import './database';
import { routes } from "./routes";

const app = express();

// const allowedOrigins = ['http://localhost:5000', 'http://localhost:3000', 'https://ballerinidevs.netlify.app/'];
// app.use(cors({
//   origin: (origin, callback)  => {
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
app.use(cors()); // @TODO: restringit urls presentes na white list
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