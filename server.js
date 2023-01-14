import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";
import express from "express";
import registration from "./routes/user.js";
import logMiddleware from "./middlewares/log.js";

const app = express();
app.use(express.json());

const port  = process.env.PORT || 4001;
app.listen(port, () => console.log(`listening on port ${port}`));

app.use(logMiddleware);

app.use("/registration", registration);
app.use((err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).send(err.message);
});

