import { Router, Request, Response } from "express";
import { createClub } from "../services/createClub";
import { classClub } from "../entities/classClub";
import * as fs from "node:fs";
import { selectClub } from "../services/selectClub";
import { createClubs } from "../services/createClubs";
const routerHome = Router();

routerHome.get("/", (req: Request, res: Response) => {
  const clubes = JSON.parse(fs.readFileSync("./data/equipos.json", "utf-8"));
  res.render("home", {
    layout: "layout",
    data: createClubs(clubes, createClub, classClub, selectClub),
  });
});
export { routerHome };
