import express, { Application, request, response } from "express";
import cors from "cors";
import router from "./app/routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Welcome to bike servicing management system");
});

// application routes
app.use("/api", router);

export default app;
