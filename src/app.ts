import { selectClub } from "./services/selectClub";
import { createClub } from "./services/createClub";
import { createClubs } from "./services/createClubs";
import express from "express";
import { classClub } from "./entities/classClub";
import { router } from "./routes/home";
import * as exphbs from "express-handlebars";
import * as fs from "node:fs";

const PUERTO = 8080;
const app = express();
const hbs = exphbs.create();
import { Router, Response, Request } from "express";
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const clubes = JSON.parse(fs.readFileSync("./data/equipos.json", "utf-8"));

app.use(router);
app.get("/:id/look", (req: Request, res: Response) => {
  res.render("club", {
    layout: "layout",
    club: createClub(Number(req.params.id), classClub, clubes, selectClub),
  });
});
app.get("/:id/edit", (req: Request, res: Response): any => {
  res.render("edit", {
    layout: "layout",
    club: createClub(Number(req.params.id), classClub, clubes, selectClub),
  });
});
console.log(selectClub(57, clubes));
app.listen(PUERTO);
console.log(`Escuchando en http://localhost:${PUERTO}`);
