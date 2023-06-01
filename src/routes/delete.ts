import { Router, Request, Response } from "express";
import { createClub } from "../services/createClub";
import { classClub } from "../entities/classClub";
import * as fs from "node:fs";
import { selectClub } from "../services/selectClub";
const clubes = JSON.parse(fs.readFileSync("./data/equipos.json", "utf-8"));

const routerDelete = Router();
routerDelete.get("/:id/delete", (req: Request, res: Response): any => {
  res.render("delete", {
    layout: "layout",
  });
});

export { routerDelete };
