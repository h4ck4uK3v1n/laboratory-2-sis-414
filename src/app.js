import express from "express";
import { dirname } from "path";
import AppRouter from "./route/router.js";
import os from "os";
const platform = os.platform();

const _dirname = dirname(new URL(import.meta.url).pathname).substring(
  platform === "win32" ? 1 : 0
);
const app = express();

app.use(express.json());
app.use(express.static(_dirname + "/static"));
console.log(_dirname);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/static/index.html");
});

app.use("/api", AppRouter);

export default app;
