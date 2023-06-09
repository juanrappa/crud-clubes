import { Router, Request, Response } from "express";
import { createClub } from "../services/createClub";
import { classClub } from "../entities/classClub";
import * as fs from "node:fs";
import { selectClub } from "../services/selectClub";
const routerLook = Router();

routerLook.get("/:id/look", (req: Request, res: Response) => {
  const clubes = JSON.parse(fs.readFileSync("./data/equipos.json", "utf-8"));
  console.log(Number(req.params.id));
  const club = createClub(Number(req.params.id), classClub, clubes, selectClub);
  res.render("club", {
    layout: "layout",
    club: createClub(Number(req.params.id), classClub, clubes, selectClub),
  });
  console.log(club);
});

export { routerLook };
