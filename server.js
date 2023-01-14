import dotenv from "dotenv";
dotenv.config();
import "./lib/mongoose.js";
import express from "express";

const app = express();

const port  = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}`));

import logMiddleware from "./middlewares/log.js";
app.use(logMiddleware);

app.use(express.json());
