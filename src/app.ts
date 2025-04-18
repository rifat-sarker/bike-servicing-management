import express, { Application, request, response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Welcome to bike servicing management system");
});

export default app;
