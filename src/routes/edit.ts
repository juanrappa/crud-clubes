import { Router, Request, Response } from "express";
import { createClub } from "../services/createClub";
import { classClub } from "../entities/classClub";
import * as fs from "node:fs";
import { selectClub } from "../services/selectClub";
const clubes = JSON.parse(fs.readFileSync("./data/equipos.json", "utf-8"));

const routerEdit = Router();
routerEdit.get("/:id/edit", (req: Request, res: Response): any => {
  res.render("edit", {
    layout: "layout",
    club: createClub(Number(req.params.id), classClub, clubes, selectClub),
  });
});

export { routerEdit };
